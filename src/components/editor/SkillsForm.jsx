import { useState } from "react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import { SquarePen, Trash2, Plus, X, Save } from "lucide-react";

export default function SkillsForm({ skills, setSkills }) {
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
        <>
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
        </>
    )
}