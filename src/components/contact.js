import React, { useState, useRef } from "react";
import deepSea from "../theme/deepSea3.jpg";
import RGBopacity from "../utility/RGBopacity";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Divider,
  withStyles,
  makeStyles
} from "../theme/themIndex";
import useInView from "../utility/inViewHook";
import useSectionTitleSlide from "../utility/sectionTitleSlide";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(theme => ({
  section: {
    position: "relative",
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${deepSea})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  filter: {
    backgroundColor: RGBopacity(theme.palette.primary.main, 0.7),
    width: "100%",
    height: "100%",
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: 2,
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    }
  },
  title: {
    paddingBottom: theme.spacing(2),
    textAlign: "center",
    textShadow: `${theme.palette.primary.light} 0px 2px 10px,
    ${theme.palette.primary.light} 2px 0px 10px,
    ${theme.palette.primary.light} 0px -2px 10px,
    ${theme.palette.primary.light} -2px 0px 10px`,
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6)
    }
  },
  grid: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    }
  }
}));

const CssTextField = withStyles(theme => ({
  root: {
    transition: theme.transitions.create(["background-color", "border"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      backgroundColor: fade(
        theme.palette.text.primary,
        theme.palette.action.hoverOpacity
      )
    },
    "& label.Mui-focused": {
      color: theme.palette.secondary.main
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.primary.contrastText,
      "& fieldset": {
        borderColor: theme.palette.primary.light
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.contrastText,
        borderWidth: "1px"
      }
    }
  }
}))(TextField);

const Contact = () => {
  const [name, setName] = useState("Composed TextField");
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
  };

  const ref = useRef();
  const onScreen = useInView(ref, 1);
  const sectionTitle = useSectionTitleSlide("Contact", onScreen, ref);

  return (
    <Grid item xs={12} className={classes.section} id="contact">
      <div className={classes.filter}>
        {sectionTitle}
        <Divider variant="fullWidth" />
        <Typography className={classes.title} variant="h6">
          Get in touch, I'd love to hear from you!
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          className={classes.grid}
        >
          <Grid item xs={12} lg={6}>
            <CssTextField
              className={classes.label}
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CssTextField
              className={classes.label}
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <CssTextField
              label="Message"
              variant="outlined"
              multiline={true}
              rows={4}
            />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Button variant="outlined" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Contact;
