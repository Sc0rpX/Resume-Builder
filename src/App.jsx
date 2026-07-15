import { useState } from 'react'
import './App.css'
import Editor from './components/Editor.jsx'
import Header from './components/Header.jsx'
import Preview from './components/Preview.jsx'

function App() {
  const [ personalInfo, setPersonalInfo ] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
  })

  const [ professionalSummary, setProfessionalSummary] = useState("")

  const [ skills, setSkills ] = useState(["HTML", "CSS", "JAVASCRIPT"])

  const [ education, setEducation ] = useState([
    {
      degree: "BSc in CSE",
      institute: "BRAC University",
      startYear: "2020",
      endYear: "2024",
    }
  ])

  const [ experience, setexperience ] = useState([
    {
      position: "Front-end Developer",
      company: "Unisoft Ltd", 
      description: "Developed and maintained user-facing features using modern React and Vue frameworks.",
      startYear: "2024",
      endYear: "2026",
    },
  ])

  return (
    <div className='flex flex-col overflow-hidden w-screen h-screen'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Editor />
        <Preview personalInfo={personalInfo} professionalSummary={professionalSummary} skills={skills} education={education} experience={experience} />
      </div>
    </div>
  )
}

export default App
