import { useState } from "react";
import { Download, User, Contact, FileText, Lightbulb, GraduationCap, BriefcaseBusiness, RotateCw, Newspaper } from "lucide-react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Accordion from "../ui/Accordion";
import PersonalInfoForm from "./PersonalInfoForm";
import ProSummaryForm from "./ProSummaryForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function Editor({ personalInfo, setPersonalInfo, professionalSummary, setProfessionalSummary, skills, setSkills, education, setEducation, experience, setExperience }) {
    function handleReset() {
        setPersonalInfo({
            fullName: "",
            jobTitle: "",
            email: "",
            phone: "",
            website: "",
        })

        setProfessionalSummary("Summarize your career highlights, key expertise, and professional goals here in 5-6 brief sentences. Focus on how you add value.")

        setSkills(["HTML", "CSS", "JAVASCRIPT"])

        setEducation([
            {
            degree: "BSc in CSE",
            institute: "BRAC University",
            startYear: "2020",
            endYear: "2024",
            },
            {
            degree: "Higher School Certificate",
            institute: "Notre Dame",
            startYear: "2021",
            endYear: "2023"
            }
        ])

        setExperience([
            {
            position: "Front-end Developer",
            company: "Unisoft Ltd",
            description: "Developed and maintained user-facing features using modern React and Vue frameworks.",
            startYear: "2024",
            endYear: "2026",
            },
        ])
    }

    return (
        <div className="h-full w-1/4 flex flex-col">
            <div className="h-full overflow-y-auto p-8 flex flex-col gap-8">
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
                    >
                        <SkillsForm
                            skills={skills}
                            setSkills={setSkills}
                        />
                    </Accordion>
                    {/* Education Accordion */}
                    <Accordion
                        title={"Education"}
                        icon={<GraduationCap/>}
                    >
                        <EducationForm
                            education={education}
                            setEducation={setEducation}
                        />
                    </Accordion>
                    {/* Experience Accordion */}
                    <Accordion
                        title={"Experience"}
                        icon={<BriefcaseBusiness/>}
                    >
                        <ExperienceForm
                            experience={experience}
                            setExperience={setExperience}
                        />
                    </Accordion>
                </div>
            </div>
            <div className="bg-gray-50 p-6 border-t border-t-gray-300 flex gap-4 shadow-2xl">
                <Button text={"Reset"} icon={<RotateCw size={18}/>} variant={"danger"} extraStyle={"w-full"} onClick={handleReset}/>
            </div>
        </div>
    )
}

export default Editor;