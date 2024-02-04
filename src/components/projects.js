import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';//

const projectsData = [
    {
        "id": 1,
        "name": "Student Dashboard",
        "image": "dashborad.png",
        "technologies": ["HTML,", "CSS,", "JavaScript,","React Js"],
        "button": "Visit here",
        "link":"https://naveen027.github.io/dashboard/",
    },
    {
        "id": 2,
        "name": "Weather-app",
        "image": "weather.png",
        "technologies": ["HTML,", "CSS,", "React Js"],
        "button": "Visit here",
        "link":"https://naveen027.github.io/my-weather-app/",
    },
    {
        "id": 3,
        "name": "Boat Home-page",
        "image": "boat.png",
        "technologies": ["HTML,","CSS,","Bootsrap"],
        "button": "Visit here",
        "link":"https://naveen027.github.io/boatstylee/",
    },
    {
        "id": 4,
        "name": "For more projects",
        "image": "github.webp",
        "technologies": ["My github repository"],
        "button": "Visit here",
        "link":"https://github.com/Naveen027",
    }
];



function Projects() {
    return (
        <div className="container-fluid">
            <div class="col-lg-12" id='heading'>
                <div class="proj">
                    <h4>Projects</h4>
                </div>

            </div>
            <div className='projects'>
                {projectsData.map((project) => (

                    <div key={project.id} className="box">
                        <div className="image">
                            <img src={project.image} alt={`Project ${project.id}`} />
                        </div>
                        <div>
                        <a href={project.link}>
                            <button>{project.button}</button>
                            </a>
                        </div>
                        <div className='details'>
                            <h4>{project.name}</h4>
                            <p>Technologies: {project.technologies}</p>
                        </div>
                    </div>
                )
                )
                }
            </div>
        </div>
    )
}

export default Projects;
