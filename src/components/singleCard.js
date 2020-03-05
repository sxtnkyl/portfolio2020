import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import {
  Card,
  CardActions,
  Typography,
  Divider,
  Button,
  GitHub,
  KeyboardArrowUp,
  makeStyles
} from "../theme/themIndex";
import between2Nums from "../utility/between2";
import RGBopacity from "../utility/RGBopacity";
import mediaToPx from "../utility/mediaToPx";
import theme from "../theme/muiTheme";
import usePrevious from "../utility/usePrevious";
import { CardContent } from "@material-ui/core";

///////card with top left offset media, github/codepen botleft, title at botright w/ expansion
///expansion with details, follow skills style

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    minHeight: "40vh",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: theme.shape.borderRadius,

    background: props =>
      `linear-gradient(${props.deg1}deg, ${RGBopacity(
        theme.palette.primary.light,
        0.25
      )} ${props.x1}%, ${RGBopacity(theme.palette.primary.main, 0.5)} ${
        props.x1
      }%), linear-gradient(${props.deg2}deg, ${RGBopacity(
        theme.palette.primary.light,
        1
      )} ${props.x2}%, ${RGBopacity(theme.palette.primary.main, 1)} ${
        props.x2
      }%)`
  },
  slideText: {
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.7),
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    overflow: "auto"
  },
  arrow: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    fontSize: theme.spacing(5),
    zIndex: "4"
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontFamily: "Alatsi",
    paddingBottom: theme.spacing(0),
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`
  },
  concepts: {
    fontStyle: "italic",
    color: theme.palette.primary.contrastText,
    fontFamily: "Alatsi",
    padding: theme.spacing(2),
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`
  },
  divider: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrastText
  },
  pad: {
    marginLeft: "0px",
    backgroundColor: theme.palette.primary.light
  },
  iconButton: {
    color: theme.palette.secondary.main,
    width: mediaToPx(theme, "h4", "xs"),
    height: mediaToPx(theme, "h4", "xs"),
    [theme.breakpoints.up("sm")]: {
      width: mediaToPx(theme, "h4", "sm"),
      height: mediaToPx(theme, "h4", "sm")
    },
    [theme.breakpoints.up("md")]: {
      width: mediaToPx(theme, "h4", "md"),
      height: mediaToPx(theme, "h4", "md")
    },
    [theme.breakpoints.up("lg")]: {
      width: mediaToPx(theme, "h4", "lg"),
      height: mediaToPx(theme, "h4", "lg")
    }
  }
}));

const SingleCard = props => {
  const {
    name,
    summary,
    description,
    concepts,
    githubUrl,
    codepenUrl
  } = props.proj;

  const { key } = props;

  const [bg, setBackground] = useState({ deg1: 30, x1: 60, deg2: 40, x2: 70 });
  function randomize() {
    setBackground({
      deg1: between2Nums(30, 150),
      deg2: between2Nums(30, 150),
      x1: between2Nums(30, 60),
      x2: between2Nums(30, 60)
    });
  }
  useEffect(() => {
    randomize();
  }, []);
  const prevBg = usePrevious(bg);

  const { deg1, x1, deg2, x2 } = useSpring({
    from: { deg1: 30, x1: 60, deg2: 40, x2: 70 },
    deg1: 60,
    x1: 30,
    deg2: 70,
    x2: 40
  });

  const animateLines = {
    background: (deg1, x1, deg2, x2).interpolate(
      (deg1, x1, deg2, x2) =>
        `linear-gradient(${deg1}deg, ${RGBopacity(
          theme.palette.primary.light,
          0.25
        )} ${x1}%, ${RGBopacity(
          theme.palette.primary.main,
          0.5
        )} ${x1}%), linear-gradient(${deg2}deg, ${RGBopacity(
          theme.palette.primary.light,
          1
        )} ${x2}%, ${RGBopacity(theme.palette.primary.main, 1)} ${x2}%)`
    )
  };

  // const animateLines = {
  //   background: lines.interpolate(
  //     lines =>
  //       `linear-gradient(${lines.deg1}deg, ${RGBopacity(
  //         theme.palette.primary.light,
  //         0.25
  //       )} ${lines.x1}%, ${RGBopacity(theme.palette.primary.main, 0.5)} ${
  //         lines.x1
  //       }%), linear-gradient(${lines.deg2}deg, ${RGBopacity(
  //         theme.palette.primary.light,
  //         1
  //       )} ${lines.x2}%, ${RGBopacity(theme.palette.primary.main, 1)} ${
  //         lines.x2
  //       }%)`
  //   )
  // };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles(bg);

  const slideText = useSpring({
    top: !expanded ? "100%" : "0"
  });
  const rotateArrow = useSpring({
    transform: !expanded ? "rotate(0deg)" : "rotate(180deg)"
  });
  const fadeOut = useSpring({
    opacity: !expanded ? "1" : "0"
  });

  const AnimatedCard = animated(Card);
  const AnimatedContent = animated(CardContent);
  const AnimatedArrow = animated(KeyboardArrowUp);
  const AnimatedTitle = animated(Typography);
  const AnimatedConcepts = animated(Typography);
  const AnimatedDivider = animated(Divider);

  const liveDemo = (
    <Button variant="outlined" target="_blank" href={codepenUrl && codepenUrl}>
      Live Demo
    </Button>
  );

  const gitLink = (
    <Button variant="outlined" target="_blank" href={githubUrl && githubUrl}>
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
        {codepenUrl ? liveDemo : gitLink}
      </CardContent>
    </AnimatedContent>
  );

  return (
    <AnimatedCard
      style={{
        background: (deg1, x1, deg2, x2).interpolate(
          (deg1, x1, deg2, x2) =>
            `linear-gradient(${deg1}deg, ${RGBopacity(
              theme.palette.primary.light,
              0.25
            )} ${x1}%, ${RGBopacity(
              theme.palette.primary.main,
              0.5
            )} ${x1}%), linear-gradient(${deg2}deg, ${RGBopacity(
              theme.palette.primary.light,
              1
            )} ${x2}%, ${RGBopacity(theme.palette.primary.main, 1)} ${x2}%)`
        )
      }}
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
