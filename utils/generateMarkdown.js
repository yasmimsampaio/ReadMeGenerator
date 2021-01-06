// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License
[![GPLv3 License](https://img.shields.io/badge/License-${data.license}%20v3-yellow.svg)](https://opensource.org/licenses/)
  ## Description: ${data.description}
  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#Question)
## Installation: ${data.installation}
## Usage: ${data.usage}
## License: ${data.license}
## Questions: 
  * GitHub Username: ${data.gitHubUsername}
  * Email: ${data.email}
## Contribution: ${data.contribution}
## Test: ${data.test}
  

`;
}

module.exports = generateMarkdown;
