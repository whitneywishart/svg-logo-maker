// Required references
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/circle-class.js');
const { Square } = require('./lib/square-class.js');
const { Triangle } = require('./lib/triangle-class.js');
const { generateText, generateShape } = require('./lib/make-shape');

// Logo properties questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text should be displayed on your logo? Please enter up to 3 characters.',
            name: 'logotext',
        },
        {
            type: 'input',
            message: 'What color text would you like? Please enter a color name or hexadecimal code.',
            name: 'textcolor',
        },
        {
            type: 'checkbox',
            message: 'What shape should your logo be? Please choose circle, triangle or square.',
            name: 'shapechoice',
            choices: ['Circle', 'Triangle', 'Square'],

        },
        {
            type: 'input',
            message: 'What background color would you like for your logo?',
            name: 'shapecolor'
        },
    ])


    .then((res) => {
        console.log(res);
        const svgDestination = './dist/logo.svg';

        fs.writeFile(svgDestination, res, (err) =>
            err ? console.log(err) : console.log('Logo generated')
        );
    });