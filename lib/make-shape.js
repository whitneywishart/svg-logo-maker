// Make shape
class MakeShape {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg xmlns='http://www.w3.org/2000/svg' width='300px' height='200px'>
        ${this.text}
        ${this.shape}
        </svg>`;
    }

    generateText(message, color) {
        this.text = `<text x="10" y="10" fill='${color}'>${message}</text>`;
    }

    generateShape(shape) {
        this.shape = shape.render();
    }
}

// Make availble to other files
module.exports = MakeShape;