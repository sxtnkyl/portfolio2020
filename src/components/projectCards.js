import React from "react";
import { Grid, Divider, makeStyles } from "../theme/themIndex";
import SingleCard from "./SingleCard";
import projects from "../utility/projectData";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
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
}));

const ProjectCards = () => {
  const classes = useStyles();

  const sectionTitle = useSectionTitleSlide("Projects", 0.5, "h2");

  return (
    <section className={classes.section} id="project-cards">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <Grid
        container
        justify="space-around"
        spacing={6}
        className={classes.grid}>
        {projects.map((proj, index) => (
          <Grid item xs={12} md={5} lg={6} key={index} className={classes.item}>
            <SingleCard proj={proj} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ProjectCards;
