
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

