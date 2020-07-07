import React, { useState, useRef } from "react";

import { useSpring, animated, config } from "react-spring";

import {
  Grid,
  Divider,
  Avatar,
  Typography,
  Switch,
  FormControlLabel,
  makeStyles,
} from "../theme/themIndex";

import useInView from "../utility/inViewHook";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

import ProfessionalPic from "../theme/profilePicProfessional.jpg";
import CasualPic from "../theme/profilePic.jpeg";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "80vh",
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    "& .MuiFormControlLabel-root": {
      padding: theme.spacing(0),
      marginLeft: theme.spacing(0),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        paddingBottom: theme.spacing(2),
      },
    },
    "& .MuiDivider-root": {
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(2),
      },
    },
  },
  grid: {
    minHeight: "inherit",
  },
  avatar: {
    height: "auto",
    width: "60%",
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
  },
  toggle: {
    color: theme.palette.primary.contrastText,
    fontFamily: "Rubik",
    fontStyle: "italic",
  },
  text: {
    color: theme.palette.primary.contrastText,
    fontFamily: "Rubik",
    padding: theme.spacing(2),
    "& .MuiFormControlLabel-label": {
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      padding: theme.spacing(0),
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const About = () => {
  const classes = useStyles();

  //true = professional, false = casual
  const [about, setAbout] = useState(true);

  const ref = useRef();
  const onScreen = useInView(ref, 1);
  const sectionTitle = useSectionTitleSlide("About", onScreen, ref);

  const professionalInfo = (
    <>
      <p>
        Hey, I'm Kyle, a driven young professional looking to enter the world of
        full stack web design & development. I've spent the last two years
        honing my skills in top web technologies including Nodejs, Reactjs,
        SCSS, Material-UI, VS Code, Git, AWS Services, and PostgresQL. At my
        last job, I worked within a large team of other environmental
        consultants, multiple managers, and clients to remediate environmental
        liabilities with technical solutions. I gained a lot of valuable
        experience pertaining to communication, teamwork, meeting the varied
        expectations of multiple people, and achieving goals on a deadline.
      </p>
      <p>
        I'm hardworking, receptive and unrelenting when it comes to doing the
        very best that I can. This is demonstrated by my independent software
        development study, culminating in a the ability to produce modern day
        web applications within one year. If all of this sounds good to you, I'm
        ready to work, preferably full-time. I'm open to either local (Atlanta,
        GA) or remote work.
      </p>
    </>
  );

  const casualInfo = (
    <p>
      Outside of work hours my non-professional passions include over a decade
      of rock climbing and beach volleyball. My love for these sports can be
      summarized in that both require an analytical approach, and require one to
      be flexible with on-the-fly adjustments in competitive settings. Not to
      mention they take place in some amazing sceneries around the globe.
    </p>
  );

  const AnimatedItem = animated(Grid);
  const ref1 = useRef();
  const ref2 = useRef();
  const spring1 = useSpring({
    opacity: about ? "1" : "0",
    transform: about ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
    config: config.gentle,
  });
  const spring2 = useSpring({
    opacity: about ? "0" : "1",
    transform: about ? "translate3d(-40px, 0, 0)" : "translate3d(0, 0, 0)",
    config: config.gentle,
  });

  const professionalGrid = (
    <AnimatedItem
      container
      className={classes.grid}
      alignItems="center"
      ref={ref1}
      style={spring1}
    >
      <Grid xs={12} lg={6} item className={classes.center}>
        <Avatar src={ProfessionalPic} className={classes.avatar} />
      </Grid>
      <Grid xs={12} lg={6} item className={classes.center}>
        <Typography variant="h6" className={classes.text}>
          {professionalInfo}
        </Typography>
      </Grid>
    </AnimatedItem>
  );

  const casualGrid = (
    <AnimatedItem
      container
      className={classes.grid}
      alignItems="center"
      ref={ref2}
      style={spring2}
    >
      <Grid xs={12} lg={6} item className={classes.center}>
        <Avatar src={CasualPic} className={classes.avatar} />
      </Grid>
      <Grid xs={12} lg={6} item className={classes.center}>
        <Typography variant="h6" className={classes.text}>
          {casualInfo}
        </Typography>
      </Grid>
    </AnimatedItem>
  );

  return (
    <Grid item xs={12} className={classes.section} id="about">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <FormControlLabel
        control={<Switch onChange={() => setAbout(!about)} edge="start" />}
        labelPlacement="start"
        label="Info Type"
        className={classes.text}
      />
      {about ? professionalGrid : casualGrid}
    </Grid>
  );
};

export default About;
