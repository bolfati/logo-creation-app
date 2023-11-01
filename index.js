const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require("inquirer");
const fs = require("fs");

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please type logo message between 1-3 characters.",
        name: "name",
        validate: function (input) {
          if (input.length >= 1 && input.length <= 3) {
            return true;
          } else {
            return "Please restart, the logo must be between 1-3 characters.";
          }
        }
      },
      {
        type: "input",
        message: "Please choose your logo text color! Enter a color name, or a Hexidecimal value (#000000 ex.)",
        name: "textColor",
      },
      {
        type: "list",
        message: "Please choose a logo shape: ",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"],
      },
      {
        type: "input",
        message: "What color would you like your Logo Background to be?",
        name: "color",
      },
    ])
    .then((response) => writeToFile(response));
}

function writeToFile(response) { 
generateSVG(300, 200, response.name, response.textColor, response.color, response.shape);
}

function generateSVG(width, height, text, textColor, bgColor, shape) {
    let shapeSvg = '';
    let textX = 0;
    let textY = 0;
  
    switch (shape) {
      case "Circle":
        const circle = new Circle(width / 2, height / 2, 50, bgColor);
        shapeSvg = circle.render();
        textX = width / 2;
        textY = height / 2;
        break;
      case "Triangle":
        const triangle = new Triangle("50,0 100,100 0,100", bgColor);
        shapeSvg = triangle.render();
        textX = width / 2 - 100;
        textY = height / 2 - 50;
        break;
      case "Square":
        const square = new Square(100, 100, bgColor);
        shapeSvg = square.render();
        textX = width / 2 - 100;
        textY = height / 2;
        break;
      default:
        break;
    }
  
    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="white" />
      <g transform="translate(${width / 2 - 50},${height / 2 - 50})">
        ${shapeSvg}
        <text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </g>
    </svg>`;
  
    fs.writeFileSync("./examples/logo.svg", svg);
  }
  
  init();