// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
      case "MIT":
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache":
          return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GPL":
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "BSD":
          return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      default:
          return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
        return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Apache":
        return "[Apache License](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
        return "[GPL License](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
        return "[BSD License](https://opensource.org/licenses/BSD-3-Clause)";
    default:
        return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License

This project is licensed under the ${license}. See the [${license}](${renderLicenseLink(license)}) for more information.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## Description

${data.description}


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License
${renderLicenseSection(data.license)}

## Tests

${data.test}

## Questions
  <ul>
    <li> <a href='mailto:/${data.email}?subject="contact me"&body="Hello"> Email me </a> </li>
    <li> <a href='https://github.com/${data.username}"> My Github Profile </a> </li>
  <ul>


`;
}

module.exports = generateMarkdown;
