// What will the following code log to the console and why?

let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

// logs:
// ['red', 'green', 'blue', 'yellow']

// explanation:
// TODO
