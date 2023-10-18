const inquirer = require("inquirer");
const {triangle, circle, square} = require("./lib/shapes");
const fs = require("fs");



const questions = [
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "Text color: Enter a color keyword/hexadecimal number:",
    },
    {
        type: "input",
        name: "color",
        message: "Shape color: Enter a color keyword/hexadecimal number:",
    },
    {
        type: "list",
        name: "image",
        message: "Choose which image to use",
        choices: ["triangle", "circle", "square"],
    },
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        generateLogo(answers);
    });
}

function generateLogo(answers) { 
    if (answers.image === "triangle") {
        const shape = new triangle(answers.color, answers.text, answers.textColor);
        writeToFile(shape);
    } else if (answers.image === "circle") {
        const shape = new circle(answers.color, answers.text, answers.textColor);
        writeToFile(shape);
    } else {
        const shape = new square(answers.color, answers.text, answers.textColor);
        writeToFile(shape);
    }
    
}

function writeToFile(shape) {
    const svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
    fs.writeFile("./dist/logo.svg", svgCode, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg");
        }
        
    });
}

init();
