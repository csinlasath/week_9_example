const inquirerQuestions = require("./config/questions");
const inquirer = require("inquirer");

function main() {
  console.log("Application has started...");
  inquirer
    .prompt(inquirerQuestions)
    .then(({ username, tableOfContents, installation, usage, license }) => {
      console.log("username", username);
      console.log(tableOfContents);
      console.log(installation);
    });
}

main();
