const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./markdown.js")
let email;
let pic;
let username;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github user name?",
      name: "username"
    }


  ]).then(function(answers){
    console.log(answers)
    return axios.get("https://api.github.com/users/" + answers.username)
  }).then(function(res) {
    console.log(res.data);
    username = res.data.login;
    email = res.data.email;
    pic = res.data.avatar_url;
    return inquirer.prompt([
      {
        type: "input",
        message: "what languages did you use?",
        name: "language"
      },
      {
        type: "input",
        message: "what your the website called?",
        name: "webName"
      },
      {
        type: "input",
        message: "What is the usage?",
        name: "usage"
      },
      {
        type: "input",
        message: "why did you make it?",
        name: "why"
      },
  
    ])
  }).then(function(answers){
      answers.email = email;
      answers.avatar_url = pic;
      answers.username = username;
      console.log(answers)
   
      fs.writeFile("./readme.md", generateMarkdown(answers), function(err) {
        if (err) {
          return console.log(err);
        }
      })
  }).catch(function(err){
    if (err) throw err;
})