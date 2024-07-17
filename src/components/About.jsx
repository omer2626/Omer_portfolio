import java from '../assets/java.png';
import python from '../assets/python.png';
import html5 from '../assets/html-5 (1).png';
import reactImg from '../assets/react.png';
import css3 from '../assets/css3.png';
import sass from '../assets/sass.png';
import git from '../assets/git.png';
import figma from '../assets/figma.png';
import ai from '../assets/AI.png';
import web from '../assets/Web.png'
import Graphic from '../assets/Graphic.png'
import frontend from '../assets/frontend.png'
import ux from '../assets/ux.png'
import mongo from '../assets/mongodb1.png'

// import resume from '../assets/omer_resume.pdf'

const About = () => {
    return (
        <>
            <div class="heading" id="aboutmehead">
                <h1 class="underline"> About Me </h1>
            </div>
            <div class="paragraph">
                <p>Hello, I'm Abdul Omer Farooq, an AI Engineer with a robust background in Artificial Intelligence,
                    Machine Learning, and Computer Vision. I thrive on transforming complex data into actionable
                    insights and intelligent solutions. My technical expertise extends beyond AI, including frontend
                    development with React, backend development, and a solid grasp of design tools like Figma and
                    database management with MongoDB.!</p>
            </div>
            <div class="button1">
            <a href='https://drive.google.com/file/d/1wM2uDyN3ivYhSy7JP3UaIgSWwuaxl2SM/view?usp=sharing' download>
                <button>Download Resume</button>
            </a>
            </div>
            
            <div class="heading2">
                <h2>What I do..!</h2>
            </div>
            <div class="skills-container">
                <div class="skill-block" id="box">
                    <img src={web} alt="AI" />
                    <h3>Artificial Intelligence</h3>
                    <p>Expertise in building intelligent systems that can mimic human behavior and decision-making
                        processes.</p>
                </div>
                <div class="skill-block" id="box">
                    <img src={frontend} alt="ML" />
                    <h3>Machine Learning</h3>
                    <p>Proficient in designing and implementing algorithms that enable machines to learn and adapt
                        from data.</p>
                </div>
                <div class="skill-block">
                    <img src={Graphic} alt="Frontend" />
                    <h3>Frontend Development</h3>
                    <p>Skilled in creating responsive and interactive user interfaces using React and modern web
                        technologies.</p>
                </div>
                <div class="skill-block">
                    <img src={ux} alt="Backend" />
                    <h3>Backend Development</h3>
                    <p>Experience in developing robust backend systems and APIs to support complex applications.</p>
                </div>
            </div>
            <div class="heading3">
                <h2> Skills </h2>
            </div>
            <div class="skills-row">
                <div class="image-row">
                    <img src={java} alt="Image 1" />
                    <img src={python} alt="Image 2" />
                    <img src={html5} alt="Image 3" />
                    <img src={reactImg} alt="Image 4" />
                    <img src={css3} alt="Image 5" />
                    <img src={sass} alt="Image 6" />
                   < img src={mongo} alt="Image 9" />
                    <img src={git} alt="Image 7" />
                    <img src={figma} alt="Image 8" />
                    <img src={ai} alt="Image 9" />
                    {/* <img src={mongo} alt="Image 9" /> */}
                    {/* <!-- <img src="./ML.png" alt="Image 10"> --> */}
                </div>
            </div>
        </>
    )
}
export default About;