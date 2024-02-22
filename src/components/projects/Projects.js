import './Projects.css';
import { FaLocationArrow } from "react-icons/fa";
import Project from './project/Project';
// import image1 from '../../assets/projects/project1.png'
import image2 from '../../assets/projects/project2.png'
import image3 from '../../assets/projects/project3.png'
import image4 from '../../assets/projects/project4.png'
// import image5 from '../../assets/projects/project5.png'
// import image6 from '../../assets/projects/project6.png'

const Projects = () => {
  const everyProject = [
    {
      id: 1,
      title: 'Climbing Competition',
      subtitle: 'Climbing Competition - Fixture',
      description: 'Climbing Competition is an interactive website created with HTML, CSS, and JS for a rock-climbing fixture that has different pages Home and About Page only. It is a responsive web page made for mobile, tablet, and desktop screens.',
      image: image4,
      live: 'https://abutalha3.github.io/Rock-Climbing-Competition-Fixture/',
      github: 'https://github.com/AbuTalha3/Rock-Climbing-Competition-Fixture',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 2,
      title: 'Todo list',
      subtitle: 'Todo list - Project',
      description: 'Todo list project where you can add your daily chores and commitments, and remove them as you are done with them. That allows you to edit your tasks. The app is developed using HTML, CSS, and JavaScript. It can work on different screen sizes.You do not have to remember everything that you can have on your finger tips',
      image: image2,
      live: 'https://abutalha3.github.io/Todo-list/dist/',
      github: 'https://github.com/AbuTalha3/Todo-list',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
     {
      id: 5,
      title: 'Space Traveler',
      subtitle: 'Rockets/Mission application - 2022',
      description: 'This project is a web application that consumes an SpaceX API. It provides commercial and scientific space travel services that allows users to book rockets and join selected space missions. Built with React/Redux (Redux ToolKit)',
      image: image3,
      live: 'https://spacetravelershubakhun.netlify.app/',
      github: 'https://github.com/AbuTalha3/react_group_project',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
  ]

    return (
      <section id="projects" className="projects-section-container">
        <div className="projects-flex-column">
          <div className="about-title" data-aos="fade-up">
            <FaLocationArrow className="arrow-icon" />
            <span>PROJECTS</span>
            <p className="microverse-date">GitHub - Pinned Projects</p>
          </div>
          <div className="main-projects">
            {everyProject.map((project) => 
              <Project project={project} />
            )}
          </div>
        </div>
      </section>
    );
  };
  
export default Projects;
  
