// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = '';
  if(license = true){ 
    
  }else{
    
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[License](#license)
  *[Usage](#usage)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Description
   ${data.description}

  ## Install
   ${data.install}

  ## License
   ${data.license}

  ##Usage
   ${data.usage}

  ## Contributing
   ${data.contribute}
  
  ## Test
   ${data.test}

  ## Questions
  Contact me if you have any questions at ${data.email}.
  Feel free to checkout my GitHub at ${data.gitHub}.


`;
}

module.exports = generateMarkdown;
