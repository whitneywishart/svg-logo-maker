// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    // Draw the square and fill with the chosen shape color
    render() {
        return `<svg viewBox="0 0 300px 200px" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

// Make class object available to other files
module.exports = { Square };