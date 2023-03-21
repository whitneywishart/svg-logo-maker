// Require the parent shape class file to pull in shared shape properties
const Shape = require('./shape-class.js');

// Inherit expected properties from Shape class file
class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    // Draw the square and fill with the chosen shape color
    render() {
        return `<rect x="10" y="10" width="30" height="30"/><rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill='${this.shapeColor}'/>`
    }
}

// Make class object available to other files
// module.exports = Square;
module.exports = { Square };