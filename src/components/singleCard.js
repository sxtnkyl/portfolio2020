import React, { useState, useEffect } from "react";
import { animated, useSpring, config } from "react-spring";
import {
  Card,
  CardActions,
  Typography,
  Divider,
  Button,
  GitHub,
  KeyboardArrowUp,
  makeStyles,
} from "../theme/themIndex";
import between2Nums from "../utility/between2";
import RGBopacity from "../utility/RGBopacity";
import mediaToPx from "../utility/mediaToPx";
import theme from "../theme/muiTheme";
import usePrevious from "../utility/usePrevious";
import { CardContent } from "@material-ui/core";

///////card with top left offset media, github/codepen botleft, title at botright w/ expansion
///expansion with details, follow skills style

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    minHeight: "40vh",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
  },
  slideText: {
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.7),
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: theme.spacing(1),
      opacity: "0.5",
    },
    "&::-webkit-scrollbar-track": {
      width: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.shape.borderRadius,
    },
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    fontSize: theme.spacing(5),
    zIndex: "4",
  },
  title: {
    fontFamily: "Alatsi",
    paddingBottom: theme.spacing(0),
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`,
  },
  concepts: {
    fontStyle: "italic",
    fontFamily: "Alatsi",
    padding: theme.spacing(2),
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`,
  },
  divider: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrastText,
  },
  pad: {
    marginLeft: "0px",
    backgroundColor: theme.palette.primary.light,
  },
  iconButton: {
    color: theme.palette.secondary.main,
    width: mediaToPx(theme, "h4", "xs"),
    height: mediaToPx(theme, "h4", "xs"),
    [theme.breakpoints.up("sm")]: {
      width: mediaToPx(theme, "h4", "sm"),
      height: mediaToPx(theme, "h4", "sm"),
    },
    [theme.breakpoints.up("md")]: {
      width: mediaToPx(theme, "h4", "md"),
      height: mediaToPx(theme, "h4", "md"),
    },
    [theme.breakpoints.up("lg")]: {
      width: mediaToPx(theme, "h4", "lg"),
      height: mediaToPx(theme, "h4", "lg"),
    },
  },
  demoButton: {
    color: theme.palette.secondary.main,
    padding: "4px",
    [theme.breakpoints.up("sm")]: {
      padding: "2px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4px",
    },
  },
}));

const SingleCard = (props) => {
  const {
    name,
    summary,
    description,
    concepts,
    githubUrl,
    codepenUrl,
  } = props.proj;

  const { key } = props;

  const [bg, setBackground] = useState([30, 60, 40, 70]);
  function randomize() {
    setBackground([
      between2Nums(30, 150),
      between2Nums(30, 60),
      between2Nums(30, 150),
      between2Nums(30, 60),
    ]);
  }
  useEffect(() => {
    randomize();
  }, []);

  const { abcd } = useSpring({
    from: { abcd: bg },
    abcd:
      bg === [30, 60, 40, 70]
        ? [100, 30, 60, 30]
        : [
            between2Nums(30, 150),
            between2Nums(30, 60),
            between2Nums(30, 150),
            between2Nums(30, 60),
          ],
    config: config.slow,
  });

  const animateLines = {
    background: abcd.interpolate(
      (a, b, c, d) =>
        `linear-gradient(${a}deg, ${RGBopacity(
          theme.palette.primary.light,
          0.25
        )} ${b}%, ${RGBopacity(theme.palette.primary.main, 0.5)} ${b}%), 
         linear-gradient(${c}deg, ${RGBopacity(
          theme.palette.primary.light,
          1
        )} ${d}%, ${RGBopacity(theme.palette.primary.main, 1)} ${d}%)`
    ),
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles(bg);

  const slideText = useSpring({
    top: !expanded ? "100%" : "0",
  });
  const rotateArrow = useSpring({
    transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
  });
  const fadeOut = useSpring({
    opacity: !expanded ? "1" : "0",
  });

  const AnimatedCard = animated(Card);
  const AnimatedContent = animated(CardContent);
  const AnimatedArrow = animated(KeyboardArrowUp);
  const AnimatedTitle = animated(Typography);
  const AnimatedConcepts = animated(Typography);
  const AnimatedDivider = animated(Divider);

  const liveDemo = codepenUrl && (
    <Button
      variant="outlined"
      target="_blank"
      rel="noopener noreferrer"
      href={codepenUrl}
      style={{ marginRight: "16px" }}
    >
      <span className={classes.demoButton}>Live Demo</span>
    </Button>
  );

  const gitLink = githubUrl && (
    <Button
      variant="outlined"
      target="_blank"
      rel="noopener noreferrer"
      href={githubUrl}
    >
      <GitHub className={classes.iconButton} />
    </Button>
  );

  const slideInfo = (
    <AnimatedContent style={slideText} className={classes.slideText}>
      <CardActions>
        <Typography variant="h5">{name}</Typography>
      </CardActions>
      <CardContent>
        <Typography variant="body1">{summary}</Typography>

        <Divider className={classes.pad} variant="middle" />
        <Typography variant="body1">{description}</Typography>
        <Divider className={classes.pad} variant="middle" />
        {liveDemo}
        {gitLink}
      </CardContent>
    </AnimatedContent>
  );

  return (
    <AnimatedCard
      style={animateLines}
      className={classes.card}
      key={key}
      onClick={randomize}
    >
      <AnimatedTitle variant="h4" style={fadeOut} className={classes.title}>
        {name}
      </AnimatedTitle>
      <AnimatedDivider
        className={classes.divider}
        style={fadeOut}
        variant="middle"
      />
      <AnimatedConcepts
        className={classes.concepts}
        style={fadeOut}
        variant="body1"
      >
        {concepts}
      </AnimatedConcepts>
      <AnimatedArrow
        style={rotateArrow}
        className={classes.arrow}
        onClick={handleExpandClick}
      />
      {slideInfo}
    </AnimatedCard>
  );
};

export default SingleCard;
