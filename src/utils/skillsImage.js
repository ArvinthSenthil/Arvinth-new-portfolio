import html from "../assets/svg/skills/html.svg";

import css from "../assets/svg/skills/css.svg";

import javascript from "../assets/svg/skills/javascript.svg";

import react from "../assets/svg/skills/react.svg";

import bootstrap from "../assets/svg/skills/bootstrap.svg";

import mongoDB from "../assets/svg/skills/mongoDB.svg";

import aws from "../assets/svg/skills/aws.svg";

import git from "../assets/svg/skills/git.svg";

import materialui from "../assets/svg/skills/materialui.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "aws":
      return aws;
    case "git":
      return git;
    case "materialui":
      return materialui;

    default:
      break;
  }
};
