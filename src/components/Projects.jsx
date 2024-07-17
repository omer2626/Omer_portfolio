import React from 'react'
import './Projects.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project6 from '../assets/project6.png'

const Projects = () => {
  return (
    <>
      <div className="heading">
        <h1 className="underline"> Projects </h1>
      </div>


      <section class="portfolio" id="portfolio">

        <div class="portfolio-container">
          <div class="portfolio-box">
            <img src={project1}></img>
            <div class="portfolio-layer">

              <h4>G3n.AI</h4>
              <a href="https://github.com/omer2626/GenAi_version1"><i class='bx bx-link-external'></i></a>

            </div>
          </div>
          <div class="portfolio-box">
            <img src={project2}></img>
            <div class="portfolio-layer">
              <h4>Agrovista.AI</h4>
              <a href="https://github.com/omer2626/Agrovista.AI"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div class="portfolio-box">
            <img src={project6}></img>
            <div class="portfolio-layer">
              <h4>Pawnitor.AI</h4>
              <a href="https://github.com/omer2626/Pawnitor"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div class="portfolio-box">
            <div>
              <img src={project3}></img>
            </div>
            <div class="portfolio-layer">
              <h4>Task Buddy</h4>
              <a href="https://github.com/omer2626/TODO_MERN"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
