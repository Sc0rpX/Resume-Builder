import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({title, icon, children}) {
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