// Require reference
const { Square } = require('../lib/square-class.js');

// Jest square test
describe('Square', () => {
  it('should render the expected square', () => {
    const shape = new Square('SSS', 'black', 'wheat');
    expect(shape.render()).toEqual(`<svg viewBox="0 0 300px 200px" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="200" height="200" fill="${shape.shapeColor}"/>
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${shape.textColor}">${shape.text}</text></svg>`);
  });
});
