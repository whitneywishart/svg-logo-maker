// Required references
const inquirer = require("inquirer");
const fs = require("fs");
const { text } = require("stream/consumers");


inquirer
    .prompt([{
        type: "input",
        message: "What text should be displayed on your logo? Please enter up to 3 characters.",
        name: "text",
        validation: textInputCheck => {
            if (textInputCheck > 3) {
                return;
            } else {
                console.log("Please enter up to three characters.")
                
            }
        }
    },
    {
        type: "input",
        message: "What color text would you like? Please enter a color keyword or hexadecimal code.",
        name: "textcolor",
    },
    {
        type: "checkbox",
        message: "What shape should your logo be? Please choose circle, triangle or square.",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"],

    },
    {
        type: "input",
        message: "What background color would you like for your logo?",
        name: "shapecolor"
    },
    ])
    .then