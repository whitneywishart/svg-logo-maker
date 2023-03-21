// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  // Draw the triangle and fill with the chosen shape color
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200" viewBox="0 0 100 100">
    <polygon points="50 0 100 100 0 100" fill="${this.shapeColor}"/> <text x="50" y="60" text-anchor="middle" font-size="20" dominant-baseline="middle" fill='${this.textColor}'>${this.text}</text></svg>`
  }
}

// Make class object available to other files
// module.exports = Triangle;
module.exports = { Triangle };