import React, { useState, useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import Skills from "./skills";
import {
  Grid,
  Button,
  Typography,
  Divider,
  GitHub,
  LinkedIn,
  Twitter,
  Info,
  makeStyles,
  Popover
} from "../theme/themIndex";
import espontas from "../theme/espontas.jpeg";
import useInView from "../utility/inViewHook";
import RGBopacity from "../utility/RGBopacity";
import mediaToPx from "../utility/mediaToPx";
import ProjectCards from "./projectCards";
import Contact from "./contact";

const useStyles = makeStyles(theme => ({
  section: {
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${espontas})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover"
  },
  filter: {
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.4),
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    }
  },
  name: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: "0px",
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`
  },
  title: {
    color: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    minWidth: theme.spacing(2),
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.4),
    borderRadius: theme.shape.borderRadius,
    width: mediaToPx(theme, "h2", "xs"),
    height: mediaToPx(theme, "h2", "xs"),
    [theme.breakpoints.up("sm")]: {
      width: mediaToPx(theme, "h2", "sm"),
      height: mediaToPx(theme, "h2", "sm")
    },
    [theme.breakpoints.up("md")]: {
      width: mediaToPx(theme, "h2", "md"),
      height: mediaToPx(theme, "h2", "md")
    },
    [theme.breakpoints.up("lg")]: {
      width: mediaToPx(theme, "h2", "lg"),
      height: mediaToPx(theme, "h2", "lg")
    }
  },
  icon: {
    padding: "0px",
    height: "100%",
    width: "100%"
  },
  info: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    padding: theme.spacing(1),
    minWidth: theme.spacing(2),
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.4),
    borderRadius: theme.shape.borderRadius
  }
}));

const Main = () => {
  const classes = useStyles();
  console.log();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const titleRef = useRef();
  const onScreen = useInView(titleRef, 0.7);

  const tslide = useSpring({
    opacity: !onScreen ? "0" : "1",
    transform: !onScreen ? "translate3d(0, -40px, 0)" : "translate3d(0, 0, 0)",
    config: config.slow
  });

  const AnimatedTitle = animated(Typography);

  const text = (
    <AnimatedTitle
      variant="h1"
      className={classes.name}
      ref={titleRef}
      style={tslide}
    >
      Kyle Sexton
    </AnimatedTitle>
  );

  return (
    <Grid container>
      <Grid item xs={12} className={classes.section}>
        <div className={classes.filter}>
          {text}
          <Divider variant="middle" />
          <Typography variant="h3" className={classes.title}>
            Full Stack Dev
          </Typography>
          <Button
            className={classes.iconButton}
            target="_blank"
            href="https://github.com/sxtnkyl"
          >
            <GitHub className={classes.icon} />
          </Button>
          <Button
            className={classes.iconButton}
            target="_blank"
            href="https://www.linkedin.com/in/kyle-sexton-52b30468/"
          >
            <LinkedIn className={classes.icon} />
          </Button>
          <Button
            className={classes.iconButton}
            target="_blank"
            href="https://twitter.com/ksexton_exe"
          >
            <Twitter className={classes.icon} />
          </Button>
          <Button className={classes.info} onClick={handleClick}>
            <Info />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
          >
            Image: Es Pontas, Mallorca, Spain
          </Popover>
        </div>
      </Grid>
      <Skills />
      <ProjectCards />
      <Contact />
    </Grid>
  );
};

export default Main;
