# Challenge9-Professional-Readme
## Description

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This Readme Generator is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the README.md in output folder of this repo as an example.

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To generate your own README, git clone the repo down to your local so you have the Node project on your local.

Run npm install in order to install the following npm package dependencies as specified in the package.json and inquirer will prompt you for your inputs from the command line.

## Usage

[Link to My Video](https://drive.google.com/file/d/1tpVu-pTVM8OyOTdiEfMBPlmj1qKV6EHG/view)



When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts.
Finally, fs.writeToFile is used to generate your project's README.md file. Check out the README.md in the output folder this repo as an example on the final output.

## License

MIT License
