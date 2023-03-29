// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
    }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

---

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}

## Questions 
If any questions use github via ${data.github} or email me at ${data.email}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;
