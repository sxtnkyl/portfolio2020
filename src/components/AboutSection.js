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

import useSectionTitleSlide from "../utility/sectionTitleSlide";

import ProfessionalPic from "../theme/smProfPic.jpg";
import CasualPic from "../theme/profilePic.jpeg";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "80vh",
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
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
    border: `2px solid ${theme.palette.primary.light}`,
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

const AboutSection = () => {
  const classes = useStyles();

  const [isProfessionalView, setIsProfessionalView] = useState(true);

  const sectionTitle = useSectionTitleSlide("About", 0.5, "h2");

  const professionalInfo = (
    <>
      <p>
        Hey! My name is Kyle Sexton! I've been a Frontend Engineer since 2021. I
        work with React and Typscript to build scalable, maintainable, and
        intellible applications. On the side, I enjoy leveraging Nextjs,
        Material-UI, and AWS services to create practical and seamless
        applications.
      </p>
      <p>
        As a former Geologist I have 5 years engineering consulting experience
        where I worked as a geophysicist and environmental consultant, applying
        geophysical methods for subsurface investigations to remediate
        underground environmental hazards.
      </p>
      <p>
        If all of this sounds good to you, reach out with the contact section
        below. Let's collaborate!
      </p>
    </>
  );

  const casualInfo = (
    <p>
      Outside of work hours my non-professional passions include over a decade
      of rock climbing and beach volleyball. My love for these sports can be
      summarized in that both require an analytical approach, and require one to
      be flexible with on-the-fly adjustments in competitive settings. Not to
      mention they require sandy beaches or scenic mountains. Not bad!
    </p>
  );

  const AnimatedItem = animated(Grid);
  const ref1 = useRef();
  const ref2 = useRef();
  const spring1 = useSpring({
    opacity: isProfessionalView ? "1" : "0",
    transform: isProfessionalView
      ? "translate3d(0, 0, 0)"
      : "translate3d(-40px, 0, 0)",
    config: config.gentle,
  });
  const spring2 = useSpring({
    opacity: isProfessionalView ? "0" : "1",
    transform: isProfessionalView
      ? "translate3d(-40px, 0, 0)"
      : "translate3d(0, 0, 0)",
    config: config.gentle,
  });

  const professionalGrid = (
    <AnimatedItem
      container
      className={classes.grid}
      alignItems="center"
      ref={ref1}
      style={spring1}>
      <Grid xs={12} lg={6} item className={classes.center}>
        <Avatar
          src={ProfessionalPic}
          className={classes.avatar}
          alt="professional picture"
        />
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
      style={spring2}>
      <Grid xs={12} lg={6} item className={classes.center}>
        <Avatar
          src={CasualPic}
          className={classes.avatar}
          alt="casual picture"
        />
      </Grid>
      <Grid xs={12} lg={6} item className={classes.center}>
        <Typography variant="h6" className={classes.text}>
          {casualInfo}
        </Typography>
      </Grid>
    </AnimatedItem>
  );

  return (
    <section className={classes.section} id="about">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <FormControlLabel
        control={
          <Switch
            onChange={() => setIsProfessionalView(!isProfessionalView)}
            edge="start"
          />
        }
        labelPlacement="start"
        label="Career / Casual"
        className={classes.text}
      />
      {isProfessionalView ? professionalGrid : casualGrid}
    </section>
  );
};

export default AboutSection;
