import React from "react";

import {
  Button,
  Typography,
  Divider,
  GitHub,
  LinkedIn,
  Twitter,
  Info,
  makeStyles,
  Tooltip,
} from "../theme/themIndex";

import espontas from "../theme/espontas.jpeg";
import useSectionTitleSlide from "../utility/sectionTitleSlide";
import RGBopacity from "../utility/RGBopacity";
import mediaToPx from "../utility/mediaToPx";

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    minHeight: "100vh",
    //https://css-tricks.com/perfect-full-page-background-image/
    background: `url(${espontas}) no-repeat center center fixed`,
    backgroundSize: "cover",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
  },
  filter: {
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.4),
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
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
      height: mediaToPx(theme, "h2", "sm"),
    },
    [theme.breakpoints.up("md")]: {
      width: mediaToPx(theme, "h2", "md"),
      height: mediaToPx(theme, "h2", "md"),
    },
    [theme.breakpoints.up("lg")]: {
      width: mediaToPx(theme, "h2", "lg"),
      height: mediaToPx(theme, "h2", "lg"),
    },
  },
  icon: {
    padding: "0px",
    height: "100%",
    width: "100%",
  },
  info: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    padding: theme.spacing(1),
    minWidth: theme.spacing(2),
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.4),
    borderRadius: theme.shape.borderRadius,
  },
}));

const Title = () => {
  const classes = useStyles();

  const sectionTitle = useSectionTitleSlide("Kyle Sexton", 0.01, "h1");

  return (
    <section className={classes.section}>
      <div className={classes.filter}>
        {sectionTitle}
        <Divider variant="middle" />
        <Typography variant="h3">Full Stack Dev</Typography>
        <Button
          rel="noopener noreferrer"
          aria-label="link to github"
          className={classes.iconButton}
          target="_blank"
          href="https://github.com/sxtnkyl">
          <GitHub className={classes.icon} />
        </Button>
        <Button
          rel="noopener noreferrer"
          aria-label="link to linkedin"
          className={classes.iconButton}
          target="_blank"
          href="https://www.linkedin.com/in/kyle-sexton-52b30468/">
          <LinkedIn className={classes.icon} />
        </Button>
        <Button
          rel="noopener noreferrer"
          aria-label="link to twitter"
          className={classes.iconButton}
          target="_blank"
          href="https://twitter.com/ksexton_exe">
          <Twitter className={classes.icon} />
        </Button>
        <Tooltip
          rel="noopener noreferrer"
          placement="left-start"
          enterTouchDelay={0}
          leaveTouchDelay={5000}
          title="Image: Es Pontas, Spain">
          <Button className={classes.info}>
            <Info />
          </Button>
        </Tooltip>
      </div>
    </section>
  );
};

export default Title;
