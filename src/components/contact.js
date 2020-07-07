import React, { useState, useEffect, useRef } from "react";
import deepSea from "../theme/deepSea3.jpg";
import RGBopacity from "../utility/RGBopacity";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Divider,
  DoneOutline,
  makeStyles,
} from "../theme/themIndex";
import useInView from "../utility/inViewHook";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

//https://www.freecodecamp.org/news/building-serverless-contact-form-for-static-websites/
//https://getform.io/

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    minHeight: "100vh",
    // backgroundAttachment: "fixed",
    // backgroundImage: `url(${deepSea})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // WebkitBackgroundSize: "cover",
    // MozBackgroundSize: "cover",
    background: `url(${deepSea}) no-repeat center center fixed`,
    backgroundSize: "cover",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
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
      paddingRight: "10vw",
    },
  },
  subTitle: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    textShadow: theme.palette.textShadow,
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
  },
  grid: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
  },
  sentCheck: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, [open]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    let url = "https://p7ysgxdxv6.execute-api.us-east-1.amazonaws.com/beta";
    const data = { name: name, email: email, message: message };

    //add check for empty string data later
    //add 'sent' confirmation and keep in view
    //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://sxtnkyl.github.io/portfolio2020:443",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setOpen(true);
      })
      .catch((error) => {
        console.error("frontend Error:", error);
      });
  };

  const ref = useRef();
  const onScreen = useInView(ref, 1);
  const sectionTitle = useSectionTitleSlide("Contact", onScreen, ref);

  return (
    <Grid item xs={12} className={classes.section} id="contact">
      <div className={classes.filter}>
        {sectionTitle}
        <Divider variant="fullWidth" />
        <Typography className={classes.subTitle} variant="h4">
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
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline={true}
              rows={4}
              value={message}
              onChange={handleMessageChange}
            />
          </Grid>
          <Grid item xs={4} lg={4}>
            <Button variant="outlined" fullWidth onClick={handleSubmit}>
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          className={classes.grid}
        >
          {open && (
            <Grid item xs={3} lg={4}>
              <Button
                variant="text"
                disabled
                fullWidth
                onClick={() => setOpen(false)}
              >
                <DoneOutline className={classes.sentCheck} /> Email Sent
              </Button>
            </Grid>
          )}
        </Grid>
      </div>
    </Grid>
  );
};

export default Contact;
