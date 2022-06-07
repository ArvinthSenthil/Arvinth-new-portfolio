import React from "react";
import ReactTooltip from "react-tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";
import { Hidden } from "@material-ui/core";
import { Tooltip } from "@mui/material";

function SingleProject({
  id,
  name,
  desc,
  tags,
  code,
  backend,
  demo,
  image,
  theme,
}) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2 style={{ color: theme.tertiary }}>{name}</h2>
          <img src={image ? image : placeholder} alt={name} />
          <div className="project--showcaseBtn">
            <Tooltip title="demo">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
              >
                <FaPlay className={classes.icon} />
              </a>
            </Tooltip>
            <Tooltip title="Frontend">
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className={classes.iconBtn}
              >
                <FaCode className={classes.icon} />
              </a>
            </Tooltip>
            {backend ? (
              <Tooltip title="Backend">
                <a
                  href={backend}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.iconBtn}
                >
                  <FaCode className={classes.icon} />
                </a>
              </Tooltip>
            ) : (
              ""
            )}
          </div>
        </div>
        <p
          className="project--desc"
          style={{ background: theme.secondary, color: theme.tertiary }}
        >
          {desc}
        </p>
        <div
          className="project--lang"
          style={{ background: theme.secondary, color: theme.tertiary80 }}
        ></div>
      </div>
    </Fade>
  );
}

export default SingleProject;
