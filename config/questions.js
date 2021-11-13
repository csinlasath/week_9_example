const licenseChoices = require("./licenses");

const questions = [
  {
    name: "username",
    type: "input",
    message: "What is your username for GitHub?",
  },
  {
    name: "tableOfContents",
    type: "input",
    message: "What text do you need for your Table of Contents?",
  },
  {
    name: "installation",
    type: "input",
    message: "What steps are required for installation?",
  },
  {
    name: "usage",
    type: "input",
    message: "What is the usage of the application?",
  },
  {
    name: "license",
    type: "rawlist",
    message: "What licence is associated with this project",
    choices: licenseChoices,
  },
];

module.exports = questions;
