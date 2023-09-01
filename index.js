//add the required libraries
const inquirer = require('inquirer');
const fs = require('fs');

//add the required files with the classes.
const Triangle = require("../lib/triangle.js");
const Square = require("../lib/square.js");
const Circle = require("../lib/circle.js");
const Logo = require("../lib/logo.js");

// initialize app by asking questions to the user.
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "Enter text for the logo.  (Must not be more than 3 characters.)",
        name: 'text',
        validate: function(text) {
            if (text.length <= 3) {
              return true;
            }
            else {
              return "Must enter 3 or less characters.";
            }
          }
      },
      {
        type: 'input',
        message: "Enter a text color",
        name: 'textColor',
      },
      {
        type: 'list',
        message: "Select a shape for the logo",
        choices: [ "circle", "square", "triangle" ],
        name: 'shape',
      },
      {
        type: 'input',
        message: "Enter a shape color",
        name: 'shapeColor',
      },
    ])
    .then((data) => {
      console.log(data);
    });
  }
  
  // Function call to initialize app
  init();
  