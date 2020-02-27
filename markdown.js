//Markdown Info
const generateMarkdown = function(readMeData) {
    return `
  # ${readMeData.username}
  ![Avatar for Github User](${readMeData.avatar_url}) \n
  ## Info
  Email: [${readMeData.email}](mailto:${readMeData.email}) \n
  ## what languages did you use
  ${readMeData.language} \n
  ##  whats your website name
  ${readMeData.webName} \n
  ## what is the usage
  ${readMeData.usage} \n
  ## why it was made
  ${readMeData.why} \n
  `;
};
module.exports = generateMarkdown;