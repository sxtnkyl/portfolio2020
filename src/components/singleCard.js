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
  slidingText: {
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
    paddingBottom: theme.spacing(0),
    textShadow: theme.palette.textShadow,
  },
  summary: {
    fontStyle: "italic",
    fontFamily: "Alatsi",
    padding: theme.spacing(2),
    textShadow: theme.palette.textShadow,
  },
  innerHeader: {
    fontStyle: "italic",
    fontFamily: "Alatsi",
    color: theme.palette.secondary.main,
    paddingBottom: theme.spacing(1),
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
  const { key } = props;
  const {
    name,
    summary,
    technicalChallenges,
    solutions,
    concepts,
    demoUrl,
    githubUrl,
  } = props.proj;

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

  const springCardLines = {
    background: abcd.to(
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
  const AnimatedCard = animated(Card);
  const AnimatedContent = animated(CardContent);
  const AnimatedArrow = animated(KeyboardArrowUp);
  const AnimatedTitle = animated(Typography);
  const AnimatedConcepts = animated(Typography);
  const AnimatedDivider = animated(Divider);

  const slidingText = useSpring({
    top: !expanded ? "100%" : "0%",
  });
  const rotateArrow = useSpring({
    transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
  });
  const fadeOut = useSpring({
    opacity: !expanded ? "1" : "0",
  });

  const slidingInfo = (
    <AnimatedContent style={slidingText} className={classes.slidingText}>
      <CardActions>
        <Typography variant="h5">{name}</Typography>
      </CardActions>
      <CardContent>
        <Typography variant="body1" className={classes.innerHeader}>
          Technical Challenges:
        </Typography>
        <Typography variant="body1">{technicalChallenges}</Typography>
        <Divider className={classes.pad} variant="middle" />
        <Typography variant="body1" className={classes.innerHeader}>
          Solutions:
        </Typography>
        <Typography variant="body1">{solutions}</Typography>
        <Divider className={classes.pad} variant="middle" />
        <Typography variant="body1" className={classes.innerHeader}>
          Concepts:
        </Typography>
        <Typography variant="body1">{concepts}</Typography>
        <Divider className={classes.pad} variant="middle" />
        {demoUrl && (
          <Button
            aria-label="link to live demo"
            variant="outlined"
            target="_blank"
            rel="noopener noreferrer"
            href={demoUrl}
            style={{ marginRight: "16px" }}>
            <span className={classes.demoButton}>Live Demo</span>
          </Button>
        )}
        {githubUrl && (
          <Button
            aria-label="link to code repo"
            variant="outlined"
            target="_blank"
            rel="noopener noreferrer"
            href={githubUrl}>
            <GitHub className={classes.iconButton} />
          </Button>
        )}
      </CardContent>
    </AnimatedContent>
  );

  return (
    <AnimatedCard
      style={springCardLines}
      className={classes.card}
      key={key}
      onClick={randomize}>
      <AnimatedTitle variant="h4" style={fadeOut} className={classes.title}>
        {name}
      </AnimatedTitle>
      <AnimatedDivider
        className={classes.divider}
        style={fadeOut}
        variant="middle"
      />
      <AnimatedConcepts
        className={classes.summary}
        style={fadeOut}
        variant="body1">
        {summary}
      </AnimatedConcepts>
      <AnimatedArrow
        style={rotateArrow}
        className={classes.arrow}
        onClick={handleExpandClick}
      />
      {slidingInfo}
    </AnimatedCard>
  );
};

export default SingleCard;
