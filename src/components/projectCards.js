import React, { useRef } from "react";
import { Grid, Divider, makeStyles } from "../theme/themIndex";
import SingleCard from "./singleCard";
import projects from "../utility/projectData";
import useInView from "../utility/inViewHook";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
    },
  },
}));

const ProjectCards = () => {
  const classes = useStyles();

  const ref = useRef();
  const onScreen = useInView(ref, 1);
  const sectionTitle = useSectionTitleSlide("Projects", onScreen, ref);

  return (
    <Grid item xs={12} className={classes.section} id="project-cards">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <Grid
        container
        justify="space-around"
        spacing={6}
        className={classes.grid}
      >
        {projects.map((proj, index) => (
          <Grid item xs={12} md={5} lg={6} key={index} className={classes.item}>
            <SingleCard proj={proj} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProjectCards;
