// Required references
const inquirer = require("inquirer");
const fs = require("fs");
const { generateSvg } = require("./lib/generateSvg");
const { generateShape } = require('./lib/generateShape');

// Logo properties questions
inquirer
    .prompt([
        {
            type: "input",
            message: "What text should be displayed on your logo? Please enter up to 3 characters.",
            name: "logotext",
        },
        {
            type: "input",
            message: "What color text would you like? Please enter a color keyword or hexadecimal code.",
            name: "textcolor",
        },
        {
            type: "checkbox",
            message: "What shape should your logo be? Please choose circle, triangle or square.",
            name: "chosenshape",
            choices: ["Circle", "Triangle", "Square"],

        },
        {
            type: "input",
            message: "What background color would you like for your logo?",
            name: "shapecolor"
        },
    ])

    .then((data) => {
        const svgDestination = "./dist/logo.svg";
        const generatedLogo = generateShape(data);


        // Generate logo
        fs.writeFile(svgDestination, generateSvg(generatedLogo)), (err) =>
            err ? console.log(err) : console.log("Your SVG logo has been generated.")
    })

    .catch((err) => console.error(err));