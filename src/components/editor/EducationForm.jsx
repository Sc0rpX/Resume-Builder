import { SquarePen, Trash2, Plus, X, Save } from "lucide-react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import { useState } from "react";

export default function EducationForm({ education, setEducation }) {
    const [ isAddingEducation, setIsAddingEducation ] = useState(false);
    const [ newEducation, setNewEducation ] = useState({
        degree: "",
        institute: "",
        startYear: "",
        endYear: "",
    })

    function handleFormInputChange(e) {
        const { name, value } = e.target;

        setNewEducation({
            ...newEducation,
            [name]: value
        })
    }

    function handleCancel() {
        setNewEducation({
            degree: "",
            institute: "",
            startYear: "",
            endYear: "",
        })
        setIsAddingEducation(false);
    }

    function handleSave() {
        setEducation([
            ...education,
            newEducation
        ])
        setNewEducation({
            degree: "",
            institute: "",
            startYear: "",
            endYear: "",
        })
        setIsAddingEducation(false);
    }

    function handleDelete(indexToDelete) {
        setEducation(education.filter((_, index) => index !== indexToDelete))
    }

    return (
        <>
            {
                education.map((degree, index) => {
                    return (
                        <div className="flex justify-between items-center" key={index}>
                            <span>{degree.degree}</span>
                            <div className="flex">
                                <Button icon={<SquarePen size={20}/>} variant={"ghost"} onClick={() => handleEditSkill(index, degree)}/>
                                <Button icon={<Trash2  size={20}/>} variant={"ghost"} onClick={() => handleDelete(index)}/>
                            </div>
                        </div>
                    )
                })
            }

            {
                isAddingEducation ? (
                    <div className="flex flex-col gap-3">
                        <div className="font-bold text-center">Add New Education: </div>
                        <FormInput 
                            label={"Degree:"}
                            name={"degree"}
                            value={newEducation.degree}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"Institute:"}
                            name={"institute"}
                            value={newEducation.institute}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"Start year:"}
                            name={"startYear"}
                            value={newEducation.startYear}
                            onChange={handleFormInputChange}
                        />
                        <FormInput 
                            label={"End year:"}
                            name={"endYear"}
                            value={newEducation.endYear}
                            onChange={handleFormInputChange}
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <Button text={"Cancel"} icon={<X size={18}/>} variant={"secondary"} onClick={handleCancel} />
                            <Button text={"Save"} icon={<Save size={18}/>} variant={"primary"} onClick={handleSave} />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-end mt-4">
                        <Button text={"Add Education"} icon={<Plus/>} variant={"primary"} onClick={() => setIsAddingEducation(true)}/>
                    </div>
                )
            }
        </>
    )
}