// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  // Draw the circle and fill with the chosen shape color
  render() {
    return `<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill='${this.shapeColor}'/><text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill='${this.textColor}'>${this.text}</text></svg>`
  }
}

// Make class object available to other files
module.exports = { Circle };
