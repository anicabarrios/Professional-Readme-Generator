// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inqurer=require("inquirer")
const fs=require("fs")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Provide installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide usage information:",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "Provide contribution guidelines:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide test instructions:",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content=generateMarkdown(data)
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error("An error occurred while writing the file:", err);
        } else {
            console.log("README.md file generated successfully!");
        }
        

    })
}

// TODO: Create a function to initialize app
function init() {
    inqurer
    .prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)
    })
    .catch(error => {
        console.error("An error occurred while prompting questions:", error);
    });
}

// Function call to initialize app
init();
