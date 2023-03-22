// Require reference
const { Circle } = require('../lib/circle-class.js');

// Jest circle test
describe('Circle', () => {
    it('should render the expected circle', () => {
        const shape = new Circle('CCC', 'black', 'wheat');
        expect(shape.render()).toEqual(`<svg viewBox="0 0 300 200" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill='${shape.shapeColor}'/><text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill='${shape.textColor}'>${shape.text}</text></svg>`);
    });
});
