import { Mail, Phone, Globe } from 'lucide-react';

function Section({ name, children }) {
    return (
        <section>
            <h3 className='text-lg font-bold text-blue-800 uppercase tracking-wide border-b-2 border-blue-800 mb-4'>
                {name}
            </h3>
            {children}
        </section>
    )
}

function Preview({ personalInfo, professionalSummary, skills, education, experience, contentRef }) {
    return (
        <section className="flex-1 bg-gray-200 overflow-y-auto p-10 flex justify-center">

            {/*--- A4 Paper ---*/}
            <div 
                ref={contentRef}
                className="bg-white w-full max-w-198.5 min-h-280.75 shadow-2xl p-16 border border-gray-200 flex flex-col gap-8"
            >

                {/*--- Header Section ---*/}
                <section className="flex flex-col items-center mb-4">
                    <h2 className="text-center text-3xl font-bold uppercase tracking-wide">
                        {personalInfo.fullName || "Your Full Name"}
                    </h2>
                    <span className="text-lg font-semibold mb-3">{personalInfo.jobTitle || "Your Job Title"}</span>
                    <div className="flex justify-center gap-x-4 flex-wrap">
                        <span className='flex items-center gap-1'>
                            <Mail size={20} />
                            <span>{personalInfo.email || "demo@example.com"}</span>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Phone size={20} />
                            <span>{personalInfo.phone || "+880 1911-11111"}</span>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Globe size={20} />
                            <span>{personalInfo.website || "username.com"}</span>
                        </span>
                    </div>
                </section>

                {/* --- Professional summury section --- */}
                <Section name={"professional summary"}>
                    <p className='text-base/relaxed'>{professionalSummary}</p>
                </Section>

                {/* --- Skills Section --- */}
                <Section name={"skills"}>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            skills.map((title, index) => {
                                return (
                                    <span key={index} className='px-4 py-1.5 bg-gray-300'>
                                        {title}
                                    </span>
                                )
                            })
                        }
                    </div>
                </Section>

                {/* Education Section */}
                <Section name={"Education"}>
                        <div className='flex flex-col gap-5'>
                            {
                                education.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-xl font-bold'>{item.degree}</span>
                                                <span>{`${item.startYear} - ${item.endYear}`}</span>
                                            </div>
                                            <div className='text-lg text-gray-700'>{item.institute}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </Section>

                {/* --- Experience ---  */}
                <Section name={"Experience"}>
                            <div className='flex flex-col gap-5'>
                            {
                                experience.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex justify-between items-center'>
                                                <span className='text-xl font-bold'>{item.position}</span>
                                                <span>{`${item.startYear} - ${item.endYear}`}</span>
                                            </div>
                                            <div className='text-lg text-blue-800 font-medium'>{item.company}</div>
                                            <div className='pl-4 mt-2'>{item.description}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </Section>
            </div>

        </section>
    )
}

export default Preview;