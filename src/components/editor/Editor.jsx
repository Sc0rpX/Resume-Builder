import { useState } from "react";
import { Download, User, Contact, FileText, Lightbulb, GraduationCap, BriefcaseBusiness } from "lucide-react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import Accordion from "../ui/Accordion";
import PersonalInfoForm from "./PersonalInfoForm";
import ProSummaryForm from "./ProSummaryForm";
import SkillsForm from "./SkillsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function Editor({ personalInfo, setPersonalInfo, professionalSummary, setProfessionalSummary, skills, setSkills, education, setEducation, experience, setExperience }) {

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
            <div className="flex gap-4">
                <Button text={"Reset"} icon={<Download size={18}/>} variant={"danger"}/>
                <Button text={"Download"} icon={<Download size={18}/>} variant={"secondary"}/>
            </div>
        </div>
    )
}

export default Editor;