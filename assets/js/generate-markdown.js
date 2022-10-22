function renderLicenseBadge(license) {
    switch (license) {
      case 'BSD 3':
        return `![BSD 3 License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg "BSD badge")`
      case 'APACHE 2.0':
        return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg "Apache 2.0 badge")`
      case 'MIT':
        return `![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg "MIT badge")`
      default:
        return '';
    }
  }


// get license section content for license
function renderLicenseSection(license) {
    if (license === 'none') {
        return 'N/A';
    }
    else {
        return `This application uses the ${license}`;
    }
}

 // markdown for README
function generateMarkdown(
    // destructure argument
    {
      title,
      description,
      install,
      usage,
      contribute,
      tests,
      license,
      email,
      github
    }
  ) {
    return `# ${title}

    ${renderLicenseBadge(license)}

  ## Description

    ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

    ${install}

  ## Usage

    ${usage}

  ## License

    ${renderLicenseSection(license)}

  ## Contribute

    ${contribute}

  ## Tests

    ${tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact directly at ${email}. You can find more of my work at https://github.com/${github}.
  `;
  }

  module.exports = generateMarkdown;

