// Define shape and color
class shape {
    constructor() {
      this.color = "";
    }

    setColor(colorVar) {
      this.color = colorVar;
    }
  }

// Triangle shape
class triangle extends shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

// Circle shape
class circle extends shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }

// Square shape
class square extends shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }

// Export shapes
module.exports = { triangle, circle, square };