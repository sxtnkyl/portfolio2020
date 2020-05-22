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
  //description: expanded description on Selecteditem
  //css: future use
  //concepts: langs/packages/concepts the project uses
  //thumnail: pic for tile
  //urls
  {
    name: "Pokedex2020",
    summary:
      "A spin on a classic API. Use this desktop app to search pokes and build a team.",
    description:
      "This dynamically fetching front end desktop application has the ability to search each generation of pokemon and display their important data. A sleek user interface allows for transition into future back end based services including user profile login, building and saving of teams, and team-typing data analytics of saved teams.",
    css: "",
    concepts:
      "React, Global Context, Axios API fetching, React Spring, React Router, Material UI, Proptype Verification",
    thumbnail: "",
    codepenUrl: "https://sxtnkyl.github.io/teambuilder/",
    githubUrl: "https://github.com/sxtnkyl/teambuilder",
  },
  {
    name: "Hand Sampler",
    summary:
      "A survey/learning tool for quickly generating geologic soil descriptions.",
    description:
      "An exercise in exploring various Material-UI components and form construction. Progress through a series of questions with different submission methods and layouts to generate a soil sample name. Can be applied for field use or a learning tool",
    css: "grey",
    concepts:
      "React, Material-UI, Material-theming, Form Submission, Controlled-Components",
    thumbnail: "drill",
    codepenUrl: "https://sxtnkyl.github.io/handsampler/",
    githubUrl: "https://github.com/sxtnkyl/handsampler",
  },
  {
    name: "Pomodoro",
    summary: "A Pomodoro timer for tracking session and break intervals",
    description:
      "This Pomodoro timer uses React hooks to accept minute values for session and break intervals, display the realtime countdown, repeat the intervals, and track the number of cycles completed.",
    css: "#23d5ab",
    concepts: "React Hooks, UseEffect Cleanup",
    thumbnail: "pomodoro",
    codepenUrl: "https://codepen.io/sxtnkyl/pen/KLqLPX",
    githubUrl: "",
  },
  {
    name: "Portfolio Page",
    summary: "My first portfolio page!",
    description:
      "A front-end project to showcase my React skills, made from scratch.",
    css: "yellow",
    concepts:
      "React, React-spring, Custom-hooks, Ref handling, Styled-components, JS Canvas",
    thumbnail: "portfolio_page",
    codepenUrl: "",
    githubUrl: "https://github.com/sxtnkyl/portfolio_page",
  },
  {
    name: "Url Shortener",
    summary:
      "Simple Url shortener to convert any http url into a six character code",
    description:
      "A full-stack project utilizing front-end React, Express API, and postgreSQL for back-end database. The user submits a url, where the API checks the database for a match to an existing entry. If the submitted url is new, a six character code is generated using the first and last three characters of a sha256 hashing result.",
    css: "blue",
    concepts: "CORS, Dotenv, Express, Nodemon, Hashing, PostgreSQL, React",
    thumbnail: "construction",
    codepenUrl: "",
    githubUrl: "https://github.com/sxtnkyl/urlAPI",
  },
  {
    name: "Calculator",
    summary: "A React calculator with some additional functionality",
    description:
      "This React calculator accepts mouse click or keypress to perform basic arithmetic. Multiple values and numbers can be stored or removed while entry errors return error messages. React concepts include event listeners for keypress/click, lifecycle methods, and resetting initial state.",
    css: "teal",
    concepts:
      "React, Event Listeners, React Lifecycle, Initial-State Callback, Error-responsiveness",
    thumbnail: "calculator",
    codepenUrl: "https://codepen.io/sxtnkyl/pen/eowRGx",
    githubUrl: "https://github.com/sxtnkyl/fcc-calculator",
  },
  {
    name: "Drumkit",
    summary: "Beat machine straight from the 80's.",
    description:
      "A beat pad triggered with click or keypress, complete with audio display, volume control and power button. Implements audio fetching, conditional styling, and timout control.",
    css: "grey",
    concepts: "React, Conditional-rendering/styling, Audio Integration",
    thumbnail: "drumkit",
    codepenUrl: "https://codepen.io/sxtnkyl/pen/WmKodW",
    githubUrl: "https://github.com/sxtnkyl/drumkit",
  },
];

// const otherProjects = [
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
// ];

export default projects;
