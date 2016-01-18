// This function call shows that function hoisting works because the invocation
// occurs before the square function is defined

console.log(square(2)); // Logs 4 to the console

function square(x) {
  return x * x;
}

// Commented out this invocation because the variable cube has not been
// assigned the function definition yet and as such will trigger a runtime error

// Uncomment the line below to see the runtime error that results
//console.log(cube(4));

var cube = function(x) {
  return x * x * x;
}

// The invocation of the cube function after the cube variable will work
// as intended

console.log(cube(4)); // Logs 64 to the console


