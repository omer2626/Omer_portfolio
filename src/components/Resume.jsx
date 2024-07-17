import React from 'react'
import './resume.css'

const Resume = () => {
    return (
        <>
            <div className="heading" id="aboutmehead">
                <h1 className="underline"> Resume </h1>
            </div>
            <div className='heading1'>
                <h2>Experience</h2>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2>SDE - Brane Enterprises Pvt Ltd</h2>
                        <div className="heading3">
                            <h3>June 2023 - Present</h3>
                        </div>
                        <p>As a Software Development Engineer (SDE), I play a pivotal role in crafting software solutions,specializing in both frontend and backend development.
                            I develop and maintain robust frontend applications, design and implement backend services and APIs, and integrate and deploy AI models to enhance software functionalities.
                        </p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Data Science Intern - Ecore Data</h2>
                        <div className="heading3">
                            <h3>Sept 2022 - Feb 2023 </h3>
                        </div>
                        <p>Developed and implemented an end-to-end healthcare application as part of a data science internship, leveraging machine learning techniques to improve patient care and operational efficiency.
                            Conducted extensive data analysis and preprocessing to ensure high-quality input for model training, utilizing Python and popular libraries such as Pandas and NumPy.
                        </p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>Technical Intern - Hexart.In</h2>
                        <div className="heading3">
                            <h3>July 2022 - January 2023</h3>
                        </div>
                        <p>I actively spearheaded various technical projects, actively immersing myself in a dynamic and fast-paced environment.
                            I closely collaborated with the engineering team, I cultivated a strong skill set in technical problem-solving, streamlined project management, and state-of-the-art software development practices
                        </p>
                    </div>
                </div>
            </div>

            <div className='heading1'>
                <h2>Education</h2>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2>Vidya Jyothi Institute of Technology</h2>
                        <div className="heading3">
                            <h3>B.Tech in Artificial Intelligence- 8.94 CGPA</h3>
                            <h3>2020 - 2024</h3>
                        </div>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Sri Chaitanya Junior College</h2>
                        <div className="heading3">
                            <h3>Intermediate - 85.9% </h3>
                            <h3>2018 - 2020</h3>
                        </div>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>St. Augustine High School, Hyderabad</h2>
                        <div className="heading3">
                            <h3>Highschool - 8.7 CGPA</h3>
                            <h3>2013 - 2018</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='heading1'>
                <h2>Certifications</h2>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2>Certificate of Merit</h2>
                        <div className="heading3">
                            <p>Secured 5th place out of 800 Teams in the T-Hub MATHACK, the biggest AI hackathon organized by <br></br>T-Hub.</p>
                            <h3> May - 2024</h3>
                        </div>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>Certificate of Merit</h2>
                        <div className="heading3">
                            <p>Achieved first prize for the best project in project expo 2k24 conducted by VJIT.</p>
                            <h3>February - 2024</h3>
                        </div>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>Certificate of Merit</h2>
                        <div className="heading3">
                            <p>Achieved first prize in Ideathon conducted by Google Developers Student Club.</p>
                            <p>Achieved first prize in DreamTech-Startup event conducted by VJIT</p>
                            <h3>2023 - 2024</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Resume;
