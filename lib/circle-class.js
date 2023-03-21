// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  // Draw the circle and fill with the chosen shape color
  render() {
    return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill='${this.shapeColor}'/>
    <text x="50" y="50" text-anchor="middle" font-size="30" dominant-baseline="middle" fill='${this.textColor}'>${this.text}</text>
    </svg>`
  }
}

// Make class object available to other files
module.exports = { Circle };
