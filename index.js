//add the required libraries
const inquirer = require('inquirer');
const fs = require('fs');

//add the required files with the classes.
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");
const Circle = require("./lib/circle.js");
const Logo = require("./lib/logo.js");

// initialize app by asking questions to the user.
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "Enter text for the logo.  (Must not be more than 3 characters.)",
        name: 'text',
        validate: function(text) {
            //went to https://stackoverflow.com/questions/16048148/regex-to-check-if-whitespace-present to figure out how to check for spaces
            //in regualr expressions.
            var space = /\s/;
            if (text.length <= 3 && !space.test(text)) {
              return true;
            }
            else if (space.test(text)) {
                return "Must not have any spaces."
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
        //create the shape of the logo.
        var completeShape;
        var textLocation;
        if(data.shape === "circle"){
            completeShape = new Circle(data.shapeColor);
            textLocation = '<text x="60" y="75" font-size="40"';
        }
        else if (data.shape === "square") {
            completeShape = new Square(data.shapeColor);
            textLocation = '<text x="60" y="70" font-size="40"';
        }
        else {
            completeShape = new Triangle(data.shapeColor);
            textLocation = '<text x="60" y="90" font-size="40"';
        }

        //create the logo.
        var logo = new Logo(data.text, data.textColor, completeShape);

        //get the markup for the svg file.
        var fileText = logo.createFileText(textLocation);
        
        //create a file if not already created and add the svg markup to it.
        fs.writeFile(`./examples/${logo.text.toLowerCase()}Logo.svg`, fileText, (err) =>
            test = err ? console.error(err) : console.log(`Generated ${logo.text.toLowerCase()}Logo.svg file!`)
        );
    });
  }
  
  // Function call to initialize app
  init();
  