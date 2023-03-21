// Required references
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/circle-class.js');
const { Square } = require('./lib/square-class.js');
const { Triangle } = require('./lib/triangle-class.js');

// Limit text chars
const limitChars = function (input) {
    if (input.length > 3) {
        return 'Please do not enter more than 3 characters'
    } else {
        return true;
    }
}

// Logo properties questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text should be displayed on your logo? Please enter up to 3 characters.',
            name: 'logotext',
            validate: limitChars,
        },
        {
            type: 'input',
            message: 'What color text would you like? Please enter a color name or hexadecimal code.',
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'What shape should your logo be? Please choose circle, triangle or square.',
            name: 'shapechoice',
            choices: ['Circle', 'Square', 'Triangle'],

        },
        {
            type: 'input',
            message: 'What background color would you like for your logo?',
            name: 'shapecolor'
        },
    ])

    .then((res) => {
        const svgDestination = './dist/logo.svg';
        console.log(res);

        let shape;
        if (res.shapechoice === 'Circle') {
            shape = new Circle(res.logotext, res.textcolor, res.shapecolor);
        } else if (res.shapechoice === 'Triangle') {
            shape = new Triangle(res.logotext, res.textcolor, res.shapecolor);
        } else if (res.shapechoice === 'Square') {
            shape = new Square(res.logotext, res.textcolor, res.shapecolor);
        }

        fs.writeFile(svgDestination, shape.render(), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
