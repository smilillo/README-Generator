
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Code provided in Slack group message by instructor.
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Instructor said link wasn't neccessary
// function renderLicenseLink(license) {
//   if (license !== 'None') {
//     return `(https://img.shields.io/badge/license-${license}-blue.svg)`
//   }
//   return '';
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license !== 'None') {
//     return `${renderLicenseBadge(license)}
//     ${renderLicenseLink(license)}`
//   }
//   return '';
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Project Description 
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ### GitHub URL:
  ${data.deployed}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributing} 
  
  ## License
  This project is licensed under the ${data.license} license.
 
  ## Questions
  If you have any questions, please contact ${data.email}. For more work from this user, visit their GitHub profile: [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
