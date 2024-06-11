import P2 from "../images/P2-min.webp";
import P2_2 from "../images/P2-2-min.webp";
import P2_3 from "../images/P2-3-min.webp";
import P3 from "../images/P3-min.webp";
import P3_2 from "../images/P3-2-min.webp";
import P4 from "../images/P4-min.webp";
import P4_2 from "../images/P4-2-min.webp";
import P4_3 from "../images/P4-3-min.webp";
import P5 from "../images/P5-min.webp";
import P5_2 from "../images/P5-2-min.webp";
import P5_3 from "../images/P5-3-min.webp";
import P6 from "../images/P6-min.webp";
import P6_2 from "../images/P6-2-min.webp";
import P6_3 from "../images/P6-3-min.webp";
import P8 from "../images/P8-min.webp";
import P8_2 from "../images/P8-2-min.webp";
import P9 from "../images/P9-min.webp";
import P9_2 from "../images/P9-2-min.webp";
import P11 from "../images/P11-min.webp";
import P11_2 from "../images/P11-2-min.webp";
import P12 from "../images/P12-min.webp";
import P12_2 from "../images/P12-2-min.webp";

const projectsData = [
  {
    id: 2,
    repo: "GVS4/P2",
    name: "First Steps in HTML Language",
    competence1: "Integrate elements on a web page using HTML fundamentals.",
    img1: P2,
    img2: P2_2,
    img3: P2_3,
    publishDate: "Jul 26, 2021",
    description: "This project serves as an introduction to the fundamentals of HTML. It involves updating a webpage for an association by integrating new elements according to provided mockups. The main task is to create a new section on the association's webpage, which includes adding a title and two buttons for downloading schedules. Through this work, participants will learn how to add and structure HTML elements, and how to integrate and adapt existing CSS styles to new content. Additionally, the project provides experience with essential front-end development tools such as Figma for mockups and Visual Studio Code as the development environment, offering a foundational understanding of how HTML and CSS collaborate to build web pages."
  },
  {
    id: 3,
    repo: "GVS4/P3",
    name: "Create the Homepage of a Travel Agency with HTML & CSS",
    competence1: "Implement a responsive interface with HTML and CSS.",
    competence2: "Set up a front-end development environment.",
    competence3: "Integrate content according to a mockup with HTML and CSS.",
    img1: P3,
    img2: P3_2,
    publishDate: "Sep 15, 2021",
    description: "This project involved creating the homepage for a travel agency using HTML and CSS. The primary objective was to integrate a responsive interface that functions seamlessly across mobile, tablet, and desktop devices. Utilizing Figma mockups, images, and project-specific guidelines, the task required the development of custom interface components with HTML and CSS to accurately match the provided designs. Through this project, key skills in responsive design were honed, ensuring that the webpage performs well on all screen sizes. These skills are essential for a career in modern web development, laying the groundwork for becoming a proficient front-end developer by mastering precise mockup integration and efficient development setup."
  },
  {
    id: 4,
    repo: "GVS4/P4",
    name: "Improve a Mobile Site Interface with CSS Animations",
    competence1: "Integrate a mobile-first mockup.",
    competence2: "Implement CSS animations.",
    competence3: "Version control your project with Git and GitHub.",
    img1: P4,
    img2: P4_2,
    img3: P4_3,
    publishDate: "Oct 1, 2021",
    description: "This project focuses on developing a mobile-first interface for a start-up's website. It involves integrating a mockup provided for both mobile and desktop views using Sass, implementing CSS animations, and versioning the project with Git and GitHub. The mobile-first approach emphasizes the importance of designing adaptive and responsive websites. CSS animations are used to enhance the user experience, making the interface more dynamic and engaging. Utilizing Sass, a CSS preprocessor, helps in writing more organized and maintainable styles. Finally, versioning the project with Git and GitHub ensures proper management and collaboration, essential skills for a modern front-end developer."
  },
  {
    id: 5,
    repo: "GVS4/P5",
    name: "First Steps in JavaScript Language",
    competence1: "Program using JavaScript fundamentals.",
    img1: P5,
    img2: P5_2,
    img3: P5_3,
    publishDate: "Nov 20, 2021",
    description: "This project involves enhancing a static printing company's website by adding an interactive carousel using JavaScript. The project is designed to introduce key JavaScript fundamentals essential for creating interactive web elements. Participants will learn to update existing HTML code and integrate a JavaScript carousel, gaining insight into the interaction between JavaScript, HTML, and CSS. The project is developed using Visual Studio Code for coding and GitHub for version control, providing a real-world programming experience. Mastery of these skills is crucial for any web developer, as JavaScript is integral to creating dynamic and responsive websites in the modern web development industry."
  },
  {
    id: 6,
    repo: "GVS4/P6",
    name: "Create a Dynamic Web Page with JavaScript",
    competence1: "Handle user events with JavaScript.",
    competence2: "Manipulate DOM elements with JavaScript.",
    competence3: "Retrieve user data in JavaScript via forms.",
    img1: P6,
    img2: P6_2,
    img3: P6_3,
    publishDate: "Dec 5, 2021",
    description: "This project involves creating a dynamic web page for an interior designer's website using JavaScript and communicating with an API. The focus is on the Front-End development, where you will develop the portfolio presentation page from provided HTML, handle user events, and manipulate DOM elements with JavaScript. Additionally, you will create an admin login page and a modal for uploading new media. These elements are built from scratch, allowing for in-depth practice of JavaScript skills. The project also includes testing functionalities with a back-end code and learning to communicate with an API, essential for modern web applications. Tools used include Figma for mockups, Visual Studio Code for development, and GitHub for version control. This project is crucial for learning to create interactive and functional websites, preparing for more advanced web development projects, and becoming a proficient and sought-after Front-End developer."
  },
  {
    id: 8,
    repo: "GVS4/P8",
    name: "Create a Real Estate Rental Web Application with React",
    competence1: "Develop a web interface with Sass.",
    competence2: "Configure navigation between application pages with React Router.",
    competence3: "Develop web interface elements using React components.",
    competence4: "Implement CSS animations.",
    competence5: "Initialize an application with Create React App.",
    img1: P8,
    img2: P8_2,
    publishDate: "Aug 12, 2021",
    description: "This project involved developing the front-end of an application using React and React Router to create a modern and responsive user experience. The project focused on presenting data and building components with React, a popular JavaScript library for creating user interfaces. React Router was used to manage navigation between different pages, demonstrating effective routing in a modern web application. The development was based on provided mockups and simulated data from a JSON file, emphasizing front-end development exclusively. Starting with Create React App simplified the initial setup, while Node.js was used to execute JavaScript code outside the browser. Mastering React, React Router, and SASS for CSS management, along with implementing CSS animations, are crucial skills for creating dynamic and visually appealing web applications, highly valued in the web development industry."
  },
  {
    id: 9,
    repo: "GVS4/P9",
    name: "Optimize the SEO of a Photographer's Website",
    competence1: "Optimize the performance of a website.",
    img1: P9,
    img2: P9_2,
    publishDate: "Jan 10, 2022",
    description: "This project involved working as a freelance developer to optimize a website's SEO, performance, and accessibility. The primary tasks included identifying loading and SEO issues, recommending improvements for load speed, code structure, and SEO, and implementing these enhancements by modifying the site's code. The goal was to enhance the site's performance and accessibility, thereby improving its search engine ranking. Tools such as Lighthouse and Wave were used for audits. A comprehensive report was created to illustrate the results before and after the modifications, featuring screenshots and explanations of the changes and their impact on the site's SEO and accessibility. These skills are crucial for enhancing a website's visibility and user experience, which are vital for increasing traffic and customer satisfaction."
  },
  {
    id: 11,
    repo: "GVS4/P11",
    name: "Implement the Front-End of a Banking Application with React",
    competence1: "Display back-end data on the interface via API calls.",
    competence2: "Configure API routes for client-server communication.",
    competence3: "Implement data management with Redux to ensure front-end functionality.",
    img1: P11,
    img2: P11_2,
    publishDate: "Feb 15, 2022",
    description: "This project focuses on developing the front-end of a banking application using React and Redux to create a dynamic and responsive user experience. The main objective is to integrate the front-end with the back-end through API calls, ensuring smooth communication between the client and server. The project involves writing REST API calls, building a comprehensive and responsive user dashboard with React, and managing application data with Redux for consistent global state management. Additionally, Swagger is utilized to define API endpoints and model data interactions, providing clear and maintainable API documentation. Node.js is used for server-side JavaScript execution, offering hands-on experience in full-stack application management. Mastery of React and Redux is essential for modern front-end developers, especially those working on complex web applications, and the use of Swagger enhances the clarity and maintainability of the API interface."
  },
  {
    id: 12,
    repo: "GVS4/P12",
    name: "Create and Publish Your Developer Portfolio",
    competence1: "Deploy a static site online.",
    img1: P12,
    img2: P12_2,
    publishDate: "Mar 1, 2022",
    description: "This project guides developers through creating and publishing their own developer portfolio website, showcasing their journey, skills, and projects professionally. The initial step involves building a personal website that includes at least two projects, clearly presenting the developer's background and competencies. The site is then deployed online, ensuring it is accessible to a broad audience. Emphasis is placed on responsive design for optimal user experience across all devices. The project also focuses on debugging, performance optimization, and SEO to ensure the portfolio is functional and well-ranked in search engines. These skills are essential for developers to stand out and secure professional opportunities, demonstrating their ability to deploy, optimize, and design responsive, professional websites."
  }
];

export default projectsData;
