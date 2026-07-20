import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import Editor from './components/editor/Editor.jsx';
import Header from './components/Header.jsx';
import Preview from './components/Preview.jsx';

function App() {
  const componentRef = useRef(null);

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
  })

  const [professionalSummary, setProfessionalSummary] = useState("Summarize your career highlights, key expertise, and professional goals here in 5-6 brief sentences. Focus on how you add value.")

  const [skills, setSkills] = useState(["HTML", "CSS", "JAVASCRIPT"])

  const [education, setEducation] = useState([
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

  const [experience, setExperience] = useState([
    {
      position: "Front-end Developer",
      company: "Unisoft Ltd",
      description: "Developed and maintained user-facing features using modern React and Vue frameworks.",
      startYear: "2024",
      endYear: "2026",
    },
  ])

  const handlePrint = useReactToPrint({ 
    contentRef: componentRef,
    documentTitle: `resume-of-${personalInfo.fullName.replaceAll(" ", "")}`,
    pageStyle: `
      @media print {
        @page {
          size: A4 portrait;
          margin: 0;
        }
      }
    `,
   })

  return (
    <div className='flex flex-col overflow-hidden w-screen h-screen'>
      <Header onPrint={handlePrint} />
      <div className='flex flex-1 overflow-hidden'>
        <Editor 
          personalInfo={personalInfo} 
          setPersonalInfo={setPersonalInfo} 
          professionalSummary={professionalSummary} 
          setProfessionalSummary={setProfessionalSummary}
          skills={skills} 
          setSkills={setSkills}
          education={education}
          setEducation={setEducation} 
          experience={experience} 
          setExperience={setExperience}
        />

        <Preview 
          personalInfo={personalInfo} 
          professionalSummary={professionalSummary} 
          skills={skills} 
          education={education} 
          experience={experience} 
          contentRef={componentRef}
        />
      </div>
    </div>
  )
}

export default App
