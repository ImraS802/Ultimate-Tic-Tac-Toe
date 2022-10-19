const playerOne = "circle"
const playerTwo = "triangle"
const smallGridCells = document.querySelectorAll(".cell")
let currentPlayer = playerOne

const smallGridStatus = Array(smallGridCells.length)
smallGridStatus.fill(null)



  // ! Elements

  const win = document.getElementById("win")
  const scoreField = document.getElementById("score-field")
  const scoreText = document.getElementById("score-display")
  const startButton = document.getElementById("start")

// ! Executions

  smallGridCells.forEach((cell) => cell.addEventListener("click", cellClick)
  )
 // checks if score field is appearing
  function cellClick(event) {
    if (scoreField.classList.contains("appear")) {
      return; // function stops here
    }

    // tells which cell was clicked
    const cell = event.target
    const cellNum = cell.dataset.index
    // checking if cell has a value (circle or triangle) already
    if(cell.innerText !="") {
      return
    }
// depending on value a certain player has to play; array from 0 until 8 (9 cells)
    cell.innerText = currentPlayer
    if(currentPlayer === playerOne){
      smallGridStatus[cellNum] = playerOne
      currentPlayer = playerTwo
    } else {
    smallGridStatus[cellNum] = playerTwo 
      currentPlayer = playerOne
    }

    verifyWhoWon()
    }

    // loop through win combinations to look if there is a winner 
    function verifyWhoWon() {
      for (const winCombi of winCombis) {
      const combination = winCombi.combination
      const cssClass = winCombi.cssClass 
      const cellContent0 = smallGridStatus[combination[0]]
      const cellContent1 = smallGridStatus[combination[1]]
      const cellContent2 = smallGridStatus[combination[2]]

      if (cellContent0 != null && cellContent0 === cellContent1 && cellContent0 === cellContent2) {
        win.classList.add(cssClass)
        endGameScreen(cellContent0)
      }
      }
      // look if there is a draw
const everyCellTaken = smallGridStatus.every((cell) => cell !== null)
if (everyCellTaken){
  endGameScreen(null)
}
    }

    function endGameScreen(winnerAnnouncement){
      let announcement = "It's a draw."
      if (winnerAnnouncement !== null){
        announcement = `The winner is ${winnerAnnouncement}`
      }
      endGameScreen.className = "appear"
      endGameText.innerText = announcement
    }

    // checking win combinations via cell combinations and win-classes
const winCombis = [
{combination: [0, 1, 2], cssClass: "win-rowOne"}, // rows
{combination: [3, 4, 5], cssClass: "win-rowTwo"},
{combination: [6, 7, 8], cssClass: "win-rowThree"},
{combination: [0, 3, 6], cssClass: "win-columnOne"}, // columns
{combination: [1, 4, 7], cssClass: "win-columnTwo"},
{combination: [2, 5, 8], cssClass: "win-columnThree"},
{combination: [0, 4, 8], cssClass: "win-diagonalOne"}, // diagonals
{combination: [2, 4, 6], cssClass: "win-diagonalTwo"}
]
  

  

/* function grid(item) {
    arrays with numerical values to reperesent condition of cells, function checks values of cell
  }

  function
loop through winConstellation
Checking for cell values (0, 1, 2) with mathematical operators
Write victory condition to let grid object know that small grid is won
Memorize win by setting winConstellation to player value
call function each time a cell is chosen to check if grid is won (true or false) -> alert which player has won on website
print in DOM

function isChosen() if else, returns true if this grid can be used for cell choosing
if nextGrid has been won the following player can play in a grid he chooses by himself, 
set nextGrid to null to indicate free grids 


  function draw() {
    end game in small grid with a draw via a for loop -> alert in message it's a draw
  }

  function endGame() to end game if all grids have been won, check via if else return true or false

  function finalWinner () for player who has won the most grids
if score of player 1 is higher than player 2 he wins
else player two wins
 */
// ! Events
/*
  smallGridOne.addEventListener('click', handleClick)
  all 9 grids
  */
//}

//document.addEventListener('DOMContentLoaded', init)
