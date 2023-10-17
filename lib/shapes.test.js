// Import shapes
const { triangle, circle, square } = require("./shapes.js");

// Triangle test
describe('triangle', () => {
    test('renders correctly', () => {
      const shape = new triangle('red', 'ABC', 'black');
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="red">
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">ABC</text>`);
    });
  });

// Circle test
describe('circle', () => {
    test('renders correctly', () => {
      const shape = new circle('blue', 'ABC', 'black');
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue">
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">ABC</text>`);
    });
  });

// Square test
describe('square', () => {
    test('renders correctly', () => {
      const shape = new square('green', 'ABC', 'black');
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="green">
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">ABC</text>`);
    });
  });