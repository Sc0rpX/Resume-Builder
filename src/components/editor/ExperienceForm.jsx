import { SquarePen, Trash2, Plus, X, Save } from "lucide-react"
import Button from "../ui/Button"
import FormInput from "../ui/FormInput"
import { useState } from "react"

export default function ExperienceForm({ experience, setExperience }) {
    const [ isAddingExp, setIsAddingExp ] = useState(false)
    const [ newExp, setNewExp ] = useState({
        position: "",
        company: "",
        description: "",
        startYear: "",
        endYear: "",
    })

    function handleFormInputChange(e) {
        const { name, value } = e.target;

        setNewExp({
            ...newExp,
            [name]: value
        })
    }

    function handleSave() {
        setExperience([
            ...experience,
            newExp
        ])
        setNewExp({
            position: "",
            company: "",
            description: "",
            startYear: "",
            endYear: "",
        })
        setIsAddingExp(false)
    }

    function handleCancel() {
        setNewExp({
            position: "",
            company: "",
            description: "",
            startYear: "",
            endYear: "",
        })
        setIsAddingExp(false)
    }

    return (
        <>
            {
                experience.map((exp, index) => {
                    return (
                        <div className="flex justify-between items-center" key={index}>
                            <span>{exp.position}</span>
                            <div className="flex">
                                <Button icon={<SquarePen size={20}/>} variant={"ghost"} onClick={() => handleEdit(degree, index)}/>
                                <Button icon={<Trash2  size={20}/>} variant={"ghost"} onClick={() => handleDelete(index)}/>
                            </div>
                        </div>
                    )
                })
            }

            {
                isAddingExp ? (
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-center">Add New Experience: </div>
                        <FormInput 
                            label={"Position: "}
                            name={"position"}
                            value={newExp.position}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"Company:"}
                            name={"company"}
                            value={newExp.company}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"Description:"}
                            name={"description"}
                            value={newExp.description}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"Start Year: "}
                            name={"startYear"}
                            value={newExp.startYear}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"End Year: "}
                            name={"endYear"}
                            value={newExp.endYear}
                            onChange={handleFormInputChange}
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <Button text={"Cancel"} icon={<X size={18}/>} variant={"secondary"} onClick={handleCancel} />
                            <Button text={"Save"} icon={<Save size={18}/>} variant={"primary"} onClick={handleSave}/>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-end mt-4">
                        <Button text={"Add Education"} icon={<Plus/>} variant={"primary"} onClick={() => setIsAddingExp(true)}/>
                    </div>
                )
            }
        </>
    )
}