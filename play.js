const { connect } = require('./client');

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === 'u\0003') {
    stdout.write("Exited Snek Game, bye bye now. \n");
    process.exit();
  }
}

setupInput();
handleUserInput();