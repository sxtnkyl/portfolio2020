import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme/muiTheme";
import { Container } from "./theme/themIndex";

import TitleSection from "./components/TitleSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectCards from "./components/ProjectsSection";
import ContactSection from "./components/Contact";

// /https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

//https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d

//https://medium.com/calyx/serverless-contact-forms-with-aws-lambda-79959cd1a6cd
//https://www.freecodecamp.org/news/building-serverless-contact-form-for-static-websites/

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <TitleSection />
        <AboutSection />
        <SkillsSection />
        <ProjectCards />
        <ContactSection />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
