const circle = require("./circle");
const triangle = require("./triangle");
const square = require("./square");

const generateShape = (data) => {
    const { chosenshape } = data;
    switch (chosenshape) {
        case "circle":
            const generateCircle = new circle(data);
            return generateCircle;
            break;

        case "triangle":
            const generateTriangle = new triangle(data);
            return generateTriangle;
            break;

        case "circle":
            const generateSquare = new square(data);
            return generateSquare;
            break;

    }
}

module.exports = { generateShape };