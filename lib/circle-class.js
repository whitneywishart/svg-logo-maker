// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    // Draw the circle and fill with the chosen shape color
    render() {
        return `<circle cx="25" cy="75" r="20" fill='${this.shapeColor}'/>`
    }
}

// Make class object available to other files
module.exports = Circle;