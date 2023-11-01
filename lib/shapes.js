class Circle {
    constructor(cx, cy, r, fill) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.fill = fill;
    }
  
    render() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
  }
  
  class Triangle {
    constructor(points, fill) {
      this.points = points;
      this.fill = fill;
    }
  
    render() {
      return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
  }
  
  class Square {
    constructor(width, height, fill) {
      this.width = width;
      this.height = height;
      this.fill = fill;
    }
  
    render() {
      return `<rect width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };