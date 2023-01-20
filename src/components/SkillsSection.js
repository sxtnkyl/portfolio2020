import React, { useState } from "react";
import {
  Grid,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpandMore,
  Typography,
  Link,
  makeStyles,
} from "../theme/themIndex";
import Kyle_Sexton_fullstack from "../utility/Kyle_Sexton_Resume_Jan2023.pdf";
import skillData from "../utility/skillsData";
import useSectionTitleSlide from "../utility/sectionTitleSlide";

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "70vh",
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
  active: {
    color: theme.palette.secondary.main,
  },
  pdf: {
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: `all 0.25s ${theme.transitions.easing.easeIn}`,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const SkillsSection = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const sectionTitle = useSectionTitleSlide("Skills", 0.5, "h2");

  const skillsCategories = skillData.map((s) => {
    let { category, skills } = s;
    skills.sort();

    const gridStyle = (
      <Grid container spacing={6}>
        {skills.map((s) => (
          <Grid item xs={12} sm={6} md={4} key={s}>
            <Typography variant="subtitle1">
              <span className={classes.dash}>- </span> {s}
            </Typography>
          </Grid>
        ))}
        {category === "Back End" && (
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              <span className={classes.dash}>- </span>AWS Route53 / CloudFront /
              S3 / Lambda / IAM / API Gateway / DynamoDB / SES / Cloud Watch
            </Typography>
          </Grid>
        )}
      </Grid>
    );

    return (
      <Grid item xs={12} className={classes.item} key={category}>
        <ExpansionPanel
          id={category}
          expanded={expanded === category}
          onChange={handleChange(category)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore aria-label="expand panel" />}
            aria-controls={category}
            id={category}>
            <Typography
              variant="h4"
              className={expanded === category ? classes.active : ""}>
              {category}
            </Typography>
          </ExpansionPanelSummary>
          <Divider variant="middle" />
          <ExpansionPanelDetails>{gridStyle}</ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    );
  });

  const resumeLink = (
    <Typography variant="subtitle1" style={{ marginTop: "32px" }}>
      <Link
        className={classes.pdf}
        href={Kyle_Sexton_fullstack}
        target="_blank"
        rel="noopener noreferrer"
        alt="resume link">
        <span style={{ color: "white" }}>* </span>Download Kyle's Formal Resume
      </Link>
    </Typography>
  );

  return (
    <section className={classes.section} id="skills">
      {sectionTitle}
      <Divider variant="fullWidth" />
      <Grid container spacing={4}>
        {skillsCategories}
      </Grid>
      {resumeLink}
    </section>
  );
};

export default SkillsSection;
