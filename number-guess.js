const readline = require('readline');
const terminal = readline.createInterface(process.stdin, process.stdout);
let number = new RegExp(/^[0-9]+$/);
let totalGuessCount = 0;
let randomNumber = Math.floor(Math.random() * 10);

terminal.setPrompt('Guess the number! (0-100): ');
terminal.prompt();
terminal.on('line', function (guess) {
  let enteredNum = parseInt(guess);
  totalGuessCount++;
  // returns first int
  if (enteredNum > randomNumber) {
    console.log('Too high! Guess again.');

  }
  if (enteredNum < randomNumber) {
    console.log('Too low! Guess again.')
  }
  if (enteredNum === randomNumber) {
    console.log('W I N N E R!!!');
    console.log(`It took you ${totalGuessCount} guesses.`);
    process.exit(0);
  }
  else if (!(number.test(enteredNum)) ) {
    console.log('That was not a number I recognise. Please enter a number.');
  }
})