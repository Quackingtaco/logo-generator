// Define shape and color
class shape {
    constructor(color, text, textColor) {
      this.color = color;
      this.text = text;
      this.textColor = textColor;
    }
  }

// Triangle shape
class triangle extends shape {
  constructor(color, text, textColor) {super(color, text, textColor);}
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }

// Circle shape
class circle extends shape {
  constructor(color, text, textColor) {super(color, text, textColor);}
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }

// Square shape
class square extends shape {
  constructor(color, text, textColor) {super(color, text, textColor);}
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />
      <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }

// Export shapes
module.exports = { triangle, circle, square };