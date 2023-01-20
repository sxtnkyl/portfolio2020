import React, { useState, useEffect } from "react";
import deepSea from "../theme/newContact.jpg";

import {
  Grid,
  Button,
  TextField,
  Typography,
  Divider,
  DoneOutline,
  makeStyles,
} from "../theme/themIndex";

import RGBopacity from "../utility/RGBopacity";
import useAsync from "../utility/useAsync";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

//https://www.freecodecamp.org/news/building-serverless-contact-form-for-static-websites/
//https://getform.io/

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    minHeight: "100vh",
    background: `url(${deepSea}) no-repeat center center fixed`,
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
    right: "0",
    top: "0",
    zIndex: 2,
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
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
  sentNotice: {
    background: "white",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  sentCheck: {
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(2),
  },
}));

const ContactSection = () => {
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

  const { execute, status } = useAsync(handleSubmit, false);

  const sectionTitle = useSectionTitleSlide("Contact", 0.5, "h2");

  return (
    <section className={classes.section} id="contact">
      <div className={classes.filter}>
        {sectionTitle}
        <Divider variant="fullWidth" />
        <Typography className={classes.subTitle} variant="h4">
          Leave a message, let's collaborate!
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          className={classes.grid}>
          <Grid item xs={12} lg={6}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline={true}
              rows={4}
              value={message}
              onChange={handleMessageChange}
            />
          </Grid>
          <Grid item xs={4} lg={4}>
            {!open ? (
              <Button
                variant="outlined"
                disabled={status === "pending"}
                fullWidth
                onClick={execute}>
                Send
              </Button>
            ) : (
              <Button
                variant="outlined"
                className={classes.sentNotice}
                disabled
                fullWidth
                onClick={() => setOpen(false)}>
                <DoneOutline className={classes.sentCheck} /> Email Sent
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ContactSection;
