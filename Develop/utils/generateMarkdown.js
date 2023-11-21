// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badge = '';
  if(license !== 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }else{
    
    // If there is no license, return an empty string
    return badge;
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  const link = '';
  if(license !== 'None'){ 
    return `[License](#license)`;
  }else{
    
    // If there is no license, return an empty string
    return link;
  }
}

//function that returns the license section of README
function renderLicenseSection(license) {
  const section = '';
  if(license !== 'None'){ 
    return `
## License

Licensed under ${license} license.`;
  }else{
    
    // If there is no license, return an empty string
    return section;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

${renderLicenseLink(data.license)}

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}
${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions contact me at:

* Email: [${data.email}](${data.email}).

* GitHub: <https://github.com/${data.GitHub}>.
`;
}

module.exports = generateMarkdown;
