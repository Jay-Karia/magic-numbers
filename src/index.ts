
let x: number, y: number, z: number;
x = y = z = 0;

const expressions = [
  (x*x) + y - z,
  x + (y*y) - z,
]

const conditions = [
  expressions[0] === 144,
  expressions[1] === 169,
]

let sum = x + y + z;

const maxValue = 20
const minValue = 0;

let solutionFound = false;

// Loop through all combinations
while (x <= maxValue) {
  while (y <= maxValue) {
    while (z <= maxValue) {
      console.log(x, y, z);

      expressions[0] = x*x + y - z;
      expressions[1] = x + y*y - z;

      conditions[0] = expressions[0] === 144;
      conditions[1] = expressions[1] === 169;

      // Check if we found a solution
      if (conditions[0] && conditions[1]) {
        sum = x + y + z;
        solutionFound = true;
        console.log("Solution found:", x, y, z);
        console.log("Sum:", sum);
        break;
      }

      if (((x*x) + y - z) > 144 && (x + (y*y) - z) > 169) {
        break;
      }

      z++;
    }

    if (solutionFound) break;
    z = minValue; // Reset z for next iteration
    y++;
  }

  if (solutionFound) break;
  y = minValue; // Reset y for next iteration
  x++;
}

if (!solutionFound) {
  console.log(`No solution found within range [${minValue}, ${maxValue}]`);
}
