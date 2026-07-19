import { useState } from "react";
import { Download, User, Contact, FileText, Lightbulb, SquarePen, Trash2, Plus, X, Save } from "lucide-react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Accordion from "../ui/Accordion";
import PersonalInfoForm from "./PersonalInfoForm";
import ProSummaryForm from "./ProSummaryForm";

function Editor({ personalInfo, setPersonalInfo, professionalSummary, setProfessionalSummary, skills, setSkills, education, setEducation, experience, setExperience }) {
    // Skills States
    const [ isAddingSkill, setIsAddingSkill ] = useState(false)
    const [ newSkill, setNewSkill ] = useState("")
    const [ editingSkillIndex, setEditingSkillIndex ] = useState(null)


    const handleSaveSkill = () => {
        if(newSkill.trim !== "") {
            if(editingSkillIndex !== null) {
                const updatedSkills = [...skills];
                updatedSkills[editingSkillIndex] = newSkill;
                setSkills(updatedSkills);
            } else {
                setSkills([...skills, newSkill]);
            }

            setNewSkill("");
            setIsAddingSkill(false);
            setEditingSkillIndex(null)
        }
    }

    const handleCancelSkill = () => {
        setNewSkill("")
        setIsAddingSkill(false)
        setEditingSkillIndex(null)
    }

    const handleEditSkill = (index, currentSkillText) => {
        setIsAddingSkill(true);
        setNewSkill(currentSkillText);
        setEditingSkillIndex(index);
    }

    const handleDeleteSkill = (indexToDelete) => {
        setSkills(skills.filter((_, index) => index !== indexToDelete));
    }

    return (
        <div className="w-1/4 overflow-y-auto p-8 flex flex-col gap-8">
            <h1 className="font-heading text-2xl font-semibold">Resume Contents:</h1>
            <div className="flex flex-col gap-4">
                {/* Personal informations accordion */}
                <Accordion
                    title={"Personal Information"}
                    icon={<User/>}
                >
                    <PersonalInfoForm 
                        personalInfo={personalInfo}
                        setPersonalInfo={setPersonalInfo}
                    />
                </Accordion>

                {/* Professional Summary Accordion */}
                <Accordion
                    title={"Professional Summary"} 
                    icon={<FileText/>}
                >
                    <ProSummaryForm
                        professionalSummary={professionalSummary}
                        setProfessionalSummary={setProfessionalSummary}
                    />
                </Accordion>

                {/* Skills Accordion */}
                <Accordion
                    title={"Skills"}
                    icon={<Lightbulb/>}
                    isList={true}
                >
                    {
                        skills.map((skill, index) => {
                            return (
                                <div className="flex justify-between items-center" key={index}>
                                    <span>{skill}</span>
                                    <div className="flex">
                                        <Button icon={<SquarePen size={20}/>} variant={"ghost"} onClick={() => handleEditSkill(index, skill)}/>
                                        <Button icon={<Trash2  size={20}/>} variant={"ghost"} onClick={() => handleDeleteSkill(index)}/>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        isAddingSkill ? (
                            <div>
                                <FormInput 
                                    label={"New Skill"}
                                    name={"newSkill"}
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                />

                                <div className="flex justify-end gap-3 mt-4">
                                    <Button text={"Cancel"} icon={<X size={18}/>} variant={"secondary"} onClick={handleCancelSkill} />
                                    <Button text={"Save"} icon={<Save size={18}/>} variant={"primary"} onClick={handleSaveSkill} />
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-end mt-4">
                                <Button text={"Add Skill"} icon={<Plus/>} variant={"primary"} onClick={() => setIsAddingSkill(true)}/>
                            </div>
                        )
                    }

                    
                </Accordion>
            </div>
            <div className="flex gap-4">
                <Button text={"Reset"} icon={<Download size={18}/>} variant={"danger"}/>
                <Button text={"Download"} icon={<Download size={18}/>} variant={"secondary"}/>
            </div>
        </div>
    )
}

export default Editor;