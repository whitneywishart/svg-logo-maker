// Jest unit test for generating a triangle shape
const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill='${this.shapeColor}'/>
<text x="50" y="50" text-anchor="middle" font-size="30" dominant-baseline="middle" fill='${this.textColor}'>${this.text}</text>
</svg>`);