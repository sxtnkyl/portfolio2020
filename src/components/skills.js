import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpandMore,
  Typography,
  makeStyles
} from "../theme/themIndex";
import skillData from "../utility/skillsData";
import useInView from "../utility/inViewHook";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

const useStyles = makeStyles(theme => ({
  section: {
    minHeight: "70vh",
    padding: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw"
    }
  },
  dash: {
    color: theme.palette.primary.light
  },
  skill: {
    fontStyle: "italic"
  },
  stretch: {
    width: "100%"
  },
  active: {
    color: theme.palette.secondary.main
  }
}));

const Skills = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const skills = skillData.map(s => {
    let { category, skills } = s;
    skills.sort();

    const gridStyle = (
      <Grid container spacing={6}>
        {skills.map(s => (
          <Grid item xs={12} sm={6} md={4} key={s}>
            <Typography variant="subtitle1">
              <span className={classes.dash}>- </span> {s}
            </Typography>
          </Grid>
        ))}
      </Grid>
    );

    return (
      <Grid item xs={12} className={classes.item} key={category}>
        <ExpansionPanel
          expanded={expanded === category}
          onChange={handleChange(category)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls={category}
            id="panel1bh-header"
          >
            <Typography
              variant="h4"
              className={expanded === category ? classes.active : ""}
            >
              {category}
            </Typography>
          </ExpansionPanelSummary>
          <Divider variant="middle" />
          <ExpansionPanelDetails>{gridStyle}</ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    );
  });

  const ref = useRef();
  const onScreen = useInView(ref, 1);
  const sectionTitle = useSectionTitleSlide("Skills", onScreen, ref);

  return (
    <Grid item xs={12} className={classes.section} id="skills">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <Grid container spacing={4} className={classes.grid}>
        {skills}
      </Grid>
    </Grid>
  );
};

export default Skills;
