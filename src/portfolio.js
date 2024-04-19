/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/coding.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Xiaohan Fei",
  title: "Hi all, I'm Fei",
  subTitle: "Hello everyone, I'm Fei 👋! As a passionate Full-Stack Developer, I'm on a quest to bring ideas to life through the power of technology. With a strong foundation in JavaScript, React, Node.js, and React Native, I'm eager to face new challenges and make a mark in the role of a vibrant Software Developer!",
  resumeLink:
    "https://drive.google.com/file/d/1q7yFY3LUr0MjMm18YAHOooHdUTRCl9D2/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/XiaohanFei",
  linkedin: "https://www.linkedin.com/in/xiaohan-fei",
  gmail: "xfei22@wisc.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Heroku/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Wisconsin - Madison",
      logo: require("./assets/images/uwm.png"),
      subHeader: "Master of Science in Information Science",
      duration: "September 2023 - Present",
      desc: "Relevant Coursework: Information Systems Analysis, Managing Information Systems Projects, Applied Data Science,Information Visualization, Data Mining, Data Administration Concepts & Database Management",
    },
    {
      schoolName: "University of Arizona",
      logo: require("./assets/images/uofa.png"),
      subHeader: "Bachelor of Science Major in Information Science, Minor in Computer Science",
      duration: "September 2018 - April 2022",
      desc: "Relevant Coursework: Web Programming, Applied Data Science, Could Computing, Computer Algorithms,Data Visualization, Machine Learning",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Documentation",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Yinshuo Software Technology Co.",
      companylogo: require("./assets/images/usb.png"),
      date: "April 2022 - July 2022",
      desc: "Developed a hardware-based security solution, the Bank Security key, designed to enhance user accessibility and security through seamless integration with the Chrome browser. This initiative involved extensive research of open-source documentation to devise innovative implementation strategies. I spearheaded the development process, authored comprehensive documentation, significantly boosting their digital security infrastructure."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  projects: [
    {
      image: require("./assets/images/secondhand.png"),
      projectName: "Campus Second Hand Website Capstone Project ",
      projectDesc: "This project is a comprehensive web application featuring a Vue.js-based dynamic and responsive frontend, PHP-powered scalable backend with sophisticated business logic, and a well-structured MySQL database, all fortified with advanced security measures to ensure data security and user privacy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://xiaohanfei.github.io/showcase.github.io/secondhand.html"
          
        },
        //  you can add extra buttons here.
        {
          name: "github link",
          url: "https://github.com/XiaohanFei/Second-Hand-Capstone-Application.git"
          
        }
      ]
    },
    {
      image: require("./assets/images/yelplike.png"),
      projectName: "Yelp-Like Application",
      projectDesc: "This project leverages the React framework for a responsive frontend, Node.js and Express.js for an efficient and secure backend, and utilizes PostgreSQL on Heroku for a scalable database, enabling smooth user interactions with features for posting, locating, and reviewing restaurants.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://xiaohanfei.github.io/showcase.github.io/"
        },
        {
          name: "github link",
          url: "https://github.com/XiaohanFei/Yelp-like-application.git/"
          
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// Blogs Section

const blogSection = {
};

// Talks Sections

const talkSection = {
};

// Podcast Section

const podcastSection = {
};

const contactInfo = {
};

// Twitter Section

const twitterDetails = {
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
const openSource={}
const achievementSection={}
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
