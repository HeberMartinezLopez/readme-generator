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
  
  # ${data.description}
  # ${data.install}
  # ${data.license}
  # ${data.email}
  # ${data.gitHub}
  # ${data.test}
  # ${data.contribute}


`;
}

module.exports = generateMarkdown;
