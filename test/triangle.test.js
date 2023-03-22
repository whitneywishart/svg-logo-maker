// Require reference
const { Triangle } = require('../lib/triangle-class.js');

// Jest triangle test
describe('Triangle', () => {
    it('should render the expected triangle', () => {
        const shape = new Triangle('TTT', 'black', 'wheat');
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200" viewBox="0 0 100 100">
    <polygon points="50 0 100 100 0 100" fill="${shape.shapeColor}"/> <text x="50" y="60" text-anchor="middle" font-size="20" dominant-baseline="middle" fill='${shape.textColor}'>${shape.text}</text></svg>`);
    });
});
