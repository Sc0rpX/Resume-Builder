import { SquarePen, Trash2 } from "lucide-react"
import Button from "../ui/Button"

export default function ExperienceForm({ experience, setExperience }) {
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
        </>
    )
}