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
      message: "What is your name? (required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("please enter github!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message:
        'Would you like to enter some information about yourself for an "About" section?',
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
      when: ({ confirmAbout }) => confirmAbout,
    },
  ]);
};

const promptProject = (portfolioData) => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  ===========================
       Add a New Project
  ===========================
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please neter your project description!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you this project with (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "JQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "Enter the Github link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("Please enter your github link!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
