

export function getRandomHexColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if(r+g+b > 500) {
      return `rgb(204, 8, 127)`;
    } 
    return `rgb(${r}, ${g}, ${b})`;
  }
     