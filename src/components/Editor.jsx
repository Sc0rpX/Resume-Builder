import { useState } from "react";
import { ChevronDown, ChevronUp, Download, User, Contact, FileText, Lightbulb, SquarePen, Trash2, Plus, X, Save } from "lucide-react";
import Button from "./Button";

function FormInput({ type="text", label, name, value, onChange }) {
    if(type === "textarea") {
        return (
            <textarea 
                name={name} 
                value={value} 
                onChange={onChange}
                rows={"4"}
                className="p-3 border border-gray-700 rounded-sm"
            ></textarea>
        )
    } else {
        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={name} className="text-sm font-semibold text-gray-600">{label}</label>
                <input 
                    type={type}
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    className="p-3 border border-gray-700 rounded-sm" 
                />
            </div>
        )
    }
}

function Accordion({title, icon, children}) {
    const [ isOpen, setIsOpen ] = useState(false);

    function toggleAccordion() {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <div className="border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer" onClick={toggleAccordion}>
                <div className="flex items-center gap-3">
                    {icon}
                    <h3 className="font-bold">{title}</h3>
                </div>
                { isOpen ? <ChevronUp /> : <ChevronDown />}
                
            </div>
            {
                isOpen && (
                    <div className="p-6 flex flex-col gap-2 border-l-4 border-blue-800">
                        {children}
                    </div>
                )
            }
        </div>
    )
}

function Editor({ personalInfo, setPersonalInfo, professionalSummary, setProfessionalSummary, skills, setSkills, education, setEducation, experience, setExperience }) {
    // Skills States
    const [ isAddingSkill, setIsAddingSkill ] = useState(false)
    const [ newSkill, setNewSkill ] = useState("")

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;

        setPersonalInfo({
            ...personalInfo, 
            [name]: value
        })
    }

    const handleProSummaryChange = (e) => {
        const { value } = e.target;

        setProfessionalSummary(value)
    }

    const handleSaveSkill = () => {
        if(newSkill.trim !== "") {
            setSkills([...skills, newSkill]);
            setNewSkill("");
            setIsAddingSkill(false);
        }
    }

    const handleCancelSkill = () => {
        setNewSkill("")
        setIsAddingSkill(false)
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
                    <FormInput 
                        label="Full Name" 
                        name="fullName"
                        value={personalInfo.fullName}
                        onChange={handlePersonalInfoChange}
                    />
                    <FormInput 
                        label="Job Title" 
                        name="jobTitle"
                        value={personalInfo.jobTitle}
                        onChange={handlePersonalInfoChange}
                    />
                    <FormInput 
                        type="email"
                        label="Email" 
                        name="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                    />
                    <FormInput 
                        type="tel"
                        label="Phone" 
                        name="phone"
                        value={personalInfo.phone}
                        onChange={handlePersonalInfoChange}
                    />
                    <FormInput 
                        type="url"
                        label="Website URL" 
                        name="website"
                        value={personalInfo.website}
                        onChange={handlePersonalInfoChange}
                    />
                </Accordion>

                {/* Professional Summary Accordion */}
                <Accordion
                    title={"Professional Summary"} 
                    icon={<FileText/>}
                >
                    <FormInput 
                        type="textarea"
                        name="professionalSummary"
                        value={professionalSummary}
                        onChange={handleProSummaryChange}
                    />
                </Accordion>

                {/* Skills Accordion */}
                <Accordion
                    title={"Skills"}
                    icon={<Lightbulb/>}
                    isList={true}
                >
                    {
                        skills.map((skill) => {
                            return (
                                <div className="flex justify-between items-center" key={skill}>
                                    <span>{skill}</span>
                                    <div className="flex">
                                        <Button icon={<SquarePen size={20}/>} variant={"ghost"}/>
                                        <Button icon={<Trash2  size={20}/>} variant={"ghost"}/>
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