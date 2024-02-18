import './Projects.css';
import { FaLocationArrow } from "react-icons/fa";
import Project from './project/Project';
import image1 from '../../assets/projects/project1.png'
import image2 from '../../assets/projects/project2.png'
import image3 from '../../assets/projects/project3.png'
import image4 from '../../assets/projects/project4.png'
import image5 from '../../assets/projects/project5.png'
import image6 from '../../assets/projects/project6.png'

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
      id: 3,
      title: 'React Metric App',
      subtitle: 'React-csp-metric-app',
      description: 'In this capstone project, I\'ve created an innovative Stock app offering in-depth numerical insights into the stock data of various active companies. The app features detailed company profiles, including performance metrics such as Market Capitalization and Profit Dividends. These metrics are updated in real-time at intervals of 1 minute, 15 minutes, 30 minutes, 1 hour, and daily stock prices. The app comprises multiple pages to facilitate seamless navigation and exploration of the stock data',
      image: image5,
      live: 'https://cheerful-haupia-208b4f.netlify.app/',
      github: 'https://github.com/AbuTalha3/react-csp-metric-app',
      skills: ['HTML', 'CSS', 'React', 'Redux', 'API'],
    },
    {
      id: 4,
      title: 'Restaurant App',
      subtitle: 'Restaurant',
      description: 'Our Restaurant is a website for the restaurant. With this app , customers can see the meals , they can like and comment on meals. All data is preserved thanks to Involvement API. This website is build by using JavaScript, Webpack and ES6.',
      image: image1,
      live: 'https://abutalha3.github.io/csp-js-module2/',
      github: 'https://github.com/siddghosh108/CapstoneJS',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 5,
      title: 'Space Traveler',
      subtitle: 'Rockets/Mission application - 2022',
      description: 'This project is a web application that consumes an SpaceX API. It provides commercial and scientific space travel services that allows users to book rockets and join selected space missions. Built with React/Redux (Redux ToolKit)',
      image: image3,
      live: 'https://react-group-project-k1iu.vercel.app/',
      github: 'https://github.com/AbuTalha3/react_group_project',
      skills: ['HTML', 'CSS', 'React', 'Redux'],
    },
    {
      id: 6,
      title: 'Awesome Books App',
      subtitle: 'Awesome Books',
      description: 'Awesome Books is a must-have app for book readers, made with Hyper Text Markup Language, Cascading Style Sheets, and JavaScript. You can have your own collection of books that you want to read, or you have read already. You can add books with Author details and can remove them when no more needed. An Awesome books store project, where you can enter the name and author of the books and have it stored, Developed using HTML, CSS, and Javascript',
      image: image6,
      live: 'https://abutalha3.github.io/AwesomeBooksList/',
      github: 'https://github.com/AbuTalha3/AwesomeBooksList',
      skills: ['HTML', 'CSS', 'JavaScript', 'WebPack'],
    },
  ]

    return (
      <section id="projects" className="projects-section-container">
        <div className="projects-flex-column">
          <div className="about-title" data-aos="fade-up">
            <FaLocationArrow className="arrow-icon" />
            <span>Projects</span>
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
  