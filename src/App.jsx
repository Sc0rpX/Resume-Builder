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

  const [ professionalSummary, setProfessionalSummary] = useState("Dedicated and results-driven Fullstack Web Developer with a passion for creating seamless user experiences and robust back-end systems. Proven ability to deliver high-quality web applications using modern frameworks and best practices. Seeking to leverage my technical expertise to drive innovation in a dynamic team environment.")

  const [ skills, setSkills ] = useState(["HTML", "CSS", "JAVASCRIPT"])

  const [ education, setEducation ] = useState([
    {
      degree: "Diploma in Engineering",
      institute: "Munshiganj Polytechnic Institute",
      startYear: "2023",
      endYear: "2027",
    },
    {
      degree: "Diploma in Engineering",
      institute: "Munshiganj Polytechnic Institute",
      startYear: "2023",
      endYear: "2027",
    }
  ])

  const [ experience, setexperience ] = useState([
    {
      position: "Front-end Developer",
      company: "Unisoft Ltd", 
      description: "Developed and maintained user-facing features using modern React and Vue frameworks.",
      startYear: "2020",
      endYear: "2023",
    },
    {
      position: "Front-end Developer",
      company: "Unisoft Ltd", 
      description: "Developed and maintained user-facing features using modern React and Vue frameworks.",
      startYear: "2020",
      endYear: "2023",
    }
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
