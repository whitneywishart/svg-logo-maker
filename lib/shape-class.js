// A shape class to manage shared shape properties
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Make class object available to other files
module.exports = Shape;

