// ----------------------- code reference from 9.1 starts---------------------------//
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
// ----------------------- code reference from 9.1 ends---------------------------//
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");
//...

// const pageHTML = feneratePage(portfolioData);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
const inquirer = require("inquirer");

// const [name, github] = profileDataArgs;

// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;
//   console.log("Portfolio complete! Check out index.html to the output!");
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

promptUser().then((answers) => console.log(answers));
