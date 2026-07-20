import { Download } from "lucide-react";
import Button from "./ui/Button";

function Header({ onPrint }) {
    return (
        <nav className="px-6 py-4 flex justify-between bg-gray-100 shadow-md shrink-0">
            <h1 className="font-heading font-bold text-2xl text-blue-800">ResumeBuilder</h1>
            <Button text={"Export to PDF"} icon={<Download/>} variant={"primary"} onClick={onPrint} />
        </nav>
    )
}

export default Header;