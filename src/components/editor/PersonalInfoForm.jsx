import FormInput from "../ui/FormInput";

export default function PersonalInfoForm({ personalInfo, setPersonalInfo}) {
    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;

        setPersonalInfo({
            ...personalInfo, 
            [name]: value
        })
    }

    return (
        <>
            <FormInput 
                label="Full Name" 
                name="fullName"
                value={personalInfo.fullName}
                onChange={handlePersonalInfoChange}
            />
            <FormInput 
                label="Job Title" 
                name="jobTitle"
                value={personalInfo.jobTitle}
                onChange={handlePersonalInfoChange}
            />
            <FormInput 
                type="email"
                label="Email" 
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
            />
            <FormInput 
                type="tel"
                label="Phone" 
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
            />
            <FormInput 
                type="url"
                label="Website URL" 
                name="website"
                value={personalInfo.website}
                onChange={handlePersonalInfoChange}
            />
        </>
    )
}