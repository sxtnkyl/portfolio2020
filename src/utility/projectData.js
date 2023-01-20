// import calculator from "../../images/thumbnails/calculator.png";
// import drumkit from "../../images/thumbnails/drumkit.png";
// import markdown_previewer from "../../images/thumbnails/markdown_previewer.png";
// import pomodoro from "../../images/thumbnails/pomodoro.png";
// import portfolio_page from "../../images/thumbnails/portfolio_page.png";
// import drill from "../../images/thumbnails/drill.jpg";
// import construction from "../../images/thumbnails/construction.PNG";

const projects = [
  //name:item title
  //summary: short desc for small item
  //technicalChallenges: what problems did i tackle?
  //solutions: how I handled technical challenges
  //css: future use
  //concepts: langs/packages/concepts the project uses
  //thumnail: pic for tile
  //demoUrl: deployed project
  //githubUrl: code repo
  {
    name: "Beer Bulletin",
    summary:
      "Full stack application to find and trade beers, keep track of visited breweries, and unlock in app milestones.",
    technicalChallenges:
      "Create a full stack application using the Nextjs framework/Vercel deploy, Sequelize, and MongoDB.",
    solutions:
      "Nextjs will provide smooth server-side rendering, SEO, accessibility, and other necessary features to be an efficient and seamless PWA. Material-UI and Framer Motion provide the UI experience, JWT are used for authentication, and Sequelize with MongoDB provide backend utility.",
    css: "#23d5ab",
    concepts:
      "React, React Hooks, Authentication, JWT, PWA, Middleware, Non-Relational DB's",
    thumbnail: "",
    demoUrl: "",
    githubUrl: "https://github.com/sxtnkyl/beer-bulletin",
  },
  {
    name: "Tail Wag Dog Training",
    summary: "Client landing page for a local canine training business",
    technicalChallenges:
      "A web page can directly influence public perception of a business's product. Therefore, this project's technical focus was on UX/UI experience, Google Lighthouse Metrics, production versioning, and developing client-dev relationship.",
    solutions:
      "Material UI design documentation was applied in order to create professional implementation of Material UI components and an aesthetically pleasing thematic. Framer Motion animation library was chosen to bring a fun and bouncy feel to a bright color palette while CSS properties were made sure to be compatible across as many browsers and screen sizes as possible, in order to increase customer satisfaction. Google Lighthouse Metrics were utilized to critique and improve performance, accessibility, SEO, and best practices. A production branch was kept as version control, while continuous client revision requests were discussed and integrated.",
    css: "blue",
    concepts:
      "React, Framer Motion, Material UI, Node.js, AWS, Route53, Cloudfront, IAM, S3, API Gateway, Lambda, CORS policy",
    thumbnail: "",
    demoUrl: "https://www.tailswagatlanta.com/",
    githubUrl: "https://github.com/sxtnkyl/tailwag",
  },
  {
    name: "Url Shortener 2020",
    summary:
      "Shrink urls into a six-character code with this AWS powered browser tool",
    technicalChallenges:
      "This project was utilized as an exercise in understanding and building complex fullstack architectures with Node.js and AWS. Technical challenges included functional integration of various serverless services, proper security practices with separation of client and API, data routing, and billing monitoring.",
    solutions:
      "Route 53 SSL certificate was chosen to provide a secure connection for Cloudfront to safely handle request routing to either a static website hosted in an S3 bucket or data requests to API Gateway, therefore separating direct frontend http requests to backend data services. CORS is internally implemented across the various Amazon services through utilization of IAM policies, in order to make sure internal access is restricted to only required services. API Gateway data calls are then sent to the proper Lambda handlers which interact with DynamoDB. CloudWatch was fundamental in providing logs for troubleshooting connections between different services, as well as setting alarms for limiting data overload that would lead to unintended billing charges. A traditional rehash of a Express/MongoDB stack is also included with the repo.",
    css: "blue",
    concepts:
      "React, Node.js, AWS, Route53, Cloudfront, IAM, S3, API Gateway, Lambda, DynamoDB, CloudWatch, Express, MongoDB, CORS policy",
    thumbnail: "",
    demoUrl: "https://hiropes.info",
    githubUrl: "https://github.com/sxtnkyl/url2020",
  },
  {
    name: "Pokedex 2020",
    summary:
      "A spin on a classic API. Use this desktop app to search through every Poke",
    technicalChallenges:
      "We must go deeper! This project sought to expand knowledge and application of global context, memo-ized renders, data fetching with external API's, and animating components.",
    solutions:
      "In order to create a controlled global context throughout multiple layers of components, React's useContext was utilized with a Redux structured global state. Updates to the global state were handled with the useReducer hook, defined in the context provider. Axios was used to fetch data, where the issue of limiting user fetch requests was solved by creating a debouncing hook. This solution leverages React's useCallback hook to limit useEffect triggering until a defined dependency updated. Handling a large amount of data became tedious, so Proptype verification was implemented where needed. React Spring was implemented to create complex animations such as the entire PokeDex opening or closing, a revolving carousel, and screen transitions.",
    css: "",
    concepts:
      "React, Global State with useContext, useReducer, useCallback, API data fetching, Proptype Verification, React Spring, Material UI",
    thumbnail: "",
    demoUrl: "https://sxtnkyl.github.io/teambuilder/",
    githubUrl: "https://github.com/sxtnkyl/teambuilder",
  },
  {
    name: "Hand Sampler",
    summary:
      "Survey learning tool for quickly generating geologic soil descriptions in a form submission format",
    technicalChallenges:
      "Forms: the corner'STONE' of production grade React products. This project was an excellent opportunity for learning how to build custom forms from scratch, understanding controlled/uncontrolled components, and to dive into a widely used, React based component library- Material UI.",
    solutions:
      "Material-UI was implemented by integration of a side-nav for quick navigation, appbar header for main calls to action, pagination footer to change questions, and unique card components to display/submit the current question. A form compiler component was employed to receive and conglomerate each controlled components' data. Github Pages was determined to be an appropriate use case for hosting this single-page web app.",
    css: "grey",
    concepts:
      "React, Material-UI, Material-theming, Form Submission, Controlled-Components, Github Pages",
    thumbnail: "drill",
    demoUrl: "https://sxtnkyl.github.io/handsampler/",
    githubUrl: "https://github.com/sxtnkyl/handsampler",
  },
];

// const otherProjects = [
// {
//   name: "Pomodoro",
//   summary: "A Pomodoro timer for tracking session and break intervals",
//   technicalChallenges:
//     "Need to learn React somehow! One of my first coding exercises. Needed to obtain a grasp on general coding practices, React app structure, and basic html/css.",
//   solutions:
//     "React hooks was applied to accept minute values for session and break intervals, display the realtime countdown, repeat the intervals, and track the number of cycles completed. Making a smooth background gradient and progress bar provided solid practice with conditional styling.",
//   css: "#23d5ab",
//   concepts:
//     "HTML, CSS, Javascript, React, React Hooks, UseEffect Cleanup, CSS trainsitions",
//   thumbnail: "pomodoro",
//   demoUrl: "https://codepen.io/sxtnkyl/pen/KLqLPX",
//   githubUrl: "https://codepen.io/sxtnkyl/pen/KLqLPX",
// },
// {
//   name: "Calculator",
//   summary: "A React calculator with some additional functionality",
//   technicalChallenges: "Need to learn React somehow!",
//   solutions:
//     "This React calculator accepts mouse click or keypress to perform basic arithmetic. Multiple values and numbers can be stored or removed while entry errors return error messages. React concepts include event listeners for keypress/click, lifecycle methods, and resetting initial state.",
//   css: "teal",
//   concepts:
//     "React, Event Listeners, React Lifecycle, Initial-State Callback, Error-responsiveness",
//   thumbnail: "calculator",
//   demoUrl: "https://codepen.io/sxtnkyl/pen/eowRGx",
//   githubUrl: "https://github.com/sxtnkyl/fcc-calculator",
// },
// {
//   name: "Drumkit",
//   summary: "Beat machine straight from the 80's.",
//   technicalChallenges: "Need to learn React somehow!",
//   solutions:
//     "A beat pad triggered with click or keypress, complete with audio display, volume control and power button. Implements audio fetching, conditional styling, and timout control.",
//   css: "grey",
//   concepts: "React, Conditional-rendering/styling, Audio Integration",
//   thumbnail: "drumkit",
//   demoUrl: "https://codepen.io/sxtnkyl/pen/WmKodW",
//   githubUrl: "https://github.com/sxtnkyl/drumkit",
// },
//   {
//     name: "Markdown Previewer",
//     summary: "A Markdown editor with realtime preview",
//     description:
//       "A simple Markdown previewer. Input the Markdown language in the editor side and have it converted and displayed on the previewer side.",
//     css: "#292b2c",
//     concepts: "React, Markdown, Bootstrap",
//     thumbnail: "markdown_previewer",
//     codepenUrl: "https://codepen.io/sxtnkyl/pen/KEMqPb",
//     githubUrl: "https://github.com/sxtnkyl/react-markdown-fcc",
//   },
// {
//   name: "Portfolio Page",
//   summary: "My first portfolio page!",
//   description:
//     "A front-end project to showcase my React skills, made from scratch.",
//   css: "yellow",
//   concepts:
//     "React, React-spring, Custom-hooks, Ref handling, Styled-components, JS Canvas",
//   thumbnail: "portfolio_page",
//   codepenUrl: "",
//   githubUrl: "https://github.com/sxtnkyl/portfolio_page",
// },
// ];

export default projects;
