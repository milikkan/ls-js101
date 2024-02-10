// What will the following code log to the console and why?

let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

// logs:
// ['red', 'green', 'blue', 'purple', 'pink']

// explanation:
// TODO