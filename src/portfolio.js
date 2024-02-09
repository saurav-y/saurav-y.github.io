/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "S.Y.",
  title: "Hey, I'm Saurav",
  subTitle: "An aspiring Full Stack Software Developer. Graduate Student at Carnegie Mellon University. Former Senior Software Engineer at Nference. Former Software Engineering Specialist at GE Power / Python (Flask, Pandas ..) / Salesforce / Reactjs ."
  ,
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saurav-y",
  linkedin: "https://www.linkedin.com/in/saurav-y/",
  gmail: "sauravyadav3@gmail.com",
  // gitlab: "https://gitlab.com/sauravyadav",
  // facebook: "https://www.facebook.com/saurav.yadav7",
  // medium: "https://medium.com/@sauravyadav",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saurav-yadav",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji("⚡ Backend Development: Python: Flask, Celery, RestAPI"),
    emoji("⚡ Frontend Development: ReactJs, HTML, CSS"),
    emoji("⚡ Databases: SQL, Redis, MongoDb"),
    emoji(
      "⚡ Data Analysis: Pandas, Numpy, Matplotlib, Seaborn, Jupyter Lab"
    ),
    emoji(
      "⚡ Data Science: Scikit-learn, TensorFlow"
    ),
    emoji(
      "⚡ Salesforce Development: Aura and Lightning Web Components"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "microservices",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
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
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "Master of Information Systems Management",
      duration: "May 2023 - May 2024",
      gpa: "3.9/4",
      desc: "Coursework: Distributed Sytems, NoSQL Database Management, Introduction to Machine Learning, Data Intensive Scalable Systems, Data Structures for Application Programmers",
      descBullets: [
        "Research Assistant: Leveraged Pandas to perform Data Analytics on a group of 300+ participants to identify the interdepencies of Drinking Alcohol and Social Demeanor.",
        "Teaching Assistant: Assisted a cohort of 60 students through Doubt Clearing Sessions, Grading Assignments, and Exams.",
        "Exemplar Project: One of 14 projects from a cohort of 150+ student to receive 'exemplar project' callout for implementing a Mobile to Cloud Application, along with the opportunity to demo the working of the application to the class."
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vit2.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2106 - July 2020",
      gpa: "3.77/4",
      desc: "Coursework: Software Engineering, Web Security, Operating Systems, Data Structures and Algorithms, Computer Architechture and Organization, Internet of Things",
      descBullets: [
        "Developed and managed a successful coding platform with 170k+ views and 25.5k+ users.",
        "Implemented an Anti-Bully Twitter bot, policing twitter feeds to safeguard users from inappropriate comments using Tweepy and Machine Learning.",
        "Field Hockey: Captain, Best Promising Player, Best Outgoing Player, Best Midfielder."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend: Python, MongoDB, Redis",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend/Design: Reactjs, HTML, CSS", //Insert stack or technology you have experience in
      progressPercentage: "45%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming: Python, Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Analytics: Pandas, SQL, Excel",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Nference (Mayo Clinic Partner)",
      companylogo: require("./assets/images/nferenceLogo.png"),
      date: "August 2021 – April 2023",
      desc: "Performed Data Anlaytics , Built AI Models, Developed Web Applications; All while contributing to better healthcare.",
      descBullets: [
        "Lead the backend effort of the application layer of a web application to support guideline-directed medical therapy (GDMT) for hospitals. The solution is backed with multiple microservices like the Data Access Layer, Synthesizer, Harmonizer, Orchestrator, Application layer, and a RabbitMQ message broker, all communicating through gRPC calls.",
        "Awarded Bravo Award for time critical delivery of data analytics to a major client."
      ]
    },
    {
      role: "Software Engineering Specialist",
      company: "GE Power",
      companylogo: require("./assets/images/geLogo.png"),
      date: "January 2020 – August 2021",
      desc: "I built tools and workflows to bring transparency to the status and timelines of all delivery and service requests of the company’s turbines and spare parts.",
      descBullets: [
        "Contributed to several community service projects, including supporting the reconstruction of two schools, celebrating festivals with orphaned kids, and organizing a cleanliness campaign at Bangalore’s favorite vacation spot (Nandi Hills)",
        "Recognized with 4 ‘Impact Awards’ for my contribution to company events, software solutions, and volunteering ventures over my 1.5-year tenure"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Cisco",
      companylogo: require("./assets/images/ciscoLogo.png"),
      date: "May 2018 – June 2018",
      desc: "Short but impressionable stint at Cisco: I worked on building a spoof-proof 2-D Face Recognition system, using Python (OpenCV, DLib, Scikit-learn, Matplotlib.)"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my projects",
  projects: [
    {
      image: require("./assets/images/cmuLogo.png"),
      projectName: "Google",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://google.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "Subtitle.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Images",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "sub-title.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "url1",
      title: "title1",
      description:
        "desc."
    },
    {
      url: "link2",
      title: "title2",
      description:
        "desc."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "NIL"
  ),

  talks: [
    {
      title: "Title",
      subtitle: "Sub-Title",
      slides_url: "NIL",
      event_url: "NIL"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "NIL",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Drop in and say hi!",
  number: "+1-4122517654",
  email_address: "sauravy@andrew.cmu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
