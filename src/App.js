import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme/muiTheme";
import { Container } from "./theme/themIndex";

import Main from "./components/main";

//keep content 5vh from top/bottom
//main: backdropped img with name, staticnav on scroll, skill list, project cards, contact
//routes: about me-nonprofessional
//screenWidth > 900 (md breakpoint) add left/right padding to sections, skills horizontal, project cards, two per row

// /https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
//https://medium.com/calyx/serverless-contact-forms-with-aws-lambda-79959cd1a6cd
//https://www.freecodecamp.org/news/building-serverless-contact-form-for-static-websites/

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Main />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
