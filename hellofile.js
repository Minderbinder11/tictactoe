//hellofile.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//  // rl.close();
// });

var player1 = '';
var player2 = '';

console.log('What is the name of Player 1: ');
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  player1 = input;
});


console.log('What is the name of Player 2: ');
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  player2 = input;
});

function printBoard(board) {

  console.log('-----------------');
  for (var i = 0; i < 3; i ++ ) {
      console.log(board[i][0] + ' | ' + board[i][1] + ' | ' + board[i][2]);
      console.log('-----------------');
  }
}


  var board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  printBoard(board);


var playing = true;
var playerAPlaying = true;
var playerBPlaying = true;

while (playing) {


  while (playerAPlaying) {
    console.log(player1 + ' please enter a number to place you X');
    
    rl.on('line', (input) => {

      row = Math.floor((input - 1 ) / 3);
      column = (input - 1 ) % 3 ;


      if (typeof board[row][column] === 'number') {
        board[row][column] = 'X';
        // check for tic tac tow
        playerAPlaying = false;
      } else {
        console.log('That is not a valid move, try again');
      }

    });
  }

  while (playerBPlaying) {
    console.log(player2 + ' please enter a number to place you X');
    
    rl.on('line', (input) => {

      row = Math.floor((input - 1 ) / 3);
      column = (input - 1 ) % 3 ;


      if (typeof board[row][column] === 'number') {
        board[row][column] = 'O';
        // check for tick tac toe
        playerBPlaying = false;
      } else {
        console.log('That is not a valid move, try again');
      }

    });
  }
}


function checkForTicTacToe (player) {

  //check for horizontals

  for ( var i = 0; i < 3; i ++ ) {
    
  }


}





