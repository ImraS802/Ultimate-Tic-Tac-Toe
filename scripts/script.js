const playerOne = "circle"
const playerTwo = "triangle"
const smallGridCells = document.querySelectorAll(".cell")
let currentPlayer = playerOne

const smallGridStatus = Array(smallGridCells.length) // to track where the symbols are being made on the grid
smallGridStatus.fill(null)  //9 items in array set to null

  // ! Elements

  const win = document.getElementById("win")
  const scoreField = document.getElementById("score-field")
  const scoreDisplay = document.getElementById("score-display")
  const restartButton = document.getElementById("restart")
  restartButton.addEventListener("click", restartGame)

// ! Executions
// add eventListener to each cell
  smallGridCells.forEach((smallGridCell) => smallGridCell.addEventListener("click", smallGridCellClick))
 // defining function smallGridCellClick; checks which cell was clicked; and if score field is appearing
  function smallGridCellClick(event) {
    if (scoreField.classList.contains('appear')) {
      return; // if scorefield is appaearing the function stops here, if not then it continues
    }
    const cell = event.target // tells which cell was clicked
    const cellNum = cell.dataset.index // refers to the data-index in html
    // checking if cell has a value (circle or triangle) already
    if(cell.innerText != "") { // if cell doesn't equal to blank then there must be circle or triangle
      return
    }
// depending on the value a certain player has to play; array from 0 to 8 (9 cells)
    if(currentPlayer === playerOne){
      cell.classList.add(playerOne)
      smallGridStatus[cellNum] = playerOne
      currentPlayer = playerTwo
    } else {
    cell.classList.add(playerTwo)
      smallGridStatus[cellNum] = playerTwo
      currentPlayer = playerOne
    }

    verifyWhoWon()
    }


        // loop through win combinations to look if there is a win 
        function verifyWhoWon() {
      for (const winCombi of winCombis) { // receiving the different win combinations from below 
      const combination = winCombi.combination // extract combination and cssClass from array of winCombis
      const cssClass = winCombi.cssClass 
      const cellContent0 = smallGridStatus[combination[0]] // get values from each cell
      const cellContent1 = smallGridStatus[combination[1]]
      const cellContent2 = smallGridStatus[combination[2]]
// checking if cell content of at least 3 cells equals each other
      if (cellContent0 != null && cellContent0 === cellContent1 && cellContent0 === cellContent2) {
        win.classList.add(cssClass)
        endGameScreen(cellContent0) // when all cells match this will be the winner
        return
      } 
      }

// look if there is a draw
const everyCellTaken = smallGridStatus.every((cell) => cell !== null)
if (everyCellTaken){       // if every cell taken show the endGameScreen
  endGameScreen(null)     //if winnerAnnouncement is null it will show a draw, if it isn't filled with null then it shows either triangle or circle
}

    }

// make the winner announcement on the screen display
    function endGameScreen(winnerAnnouncement){  //cellContent0
      let announcement = "It's a draw."          // is shown by default
      if (winnerAnnouncement != null){
        announcement = `The winner is: ${winnerAnnouncement}`
      }
      scoreField.className = "appear" // "disappear" class is replaced; change DOM
      scoreDisplay.innerText = announcement
    }

// restart buttom
    function restartGame(){
      win.className = "win" //replacing previous class
      scoreField.className = "disappear" 
      smallGridStatus.fill(null)
      smallGridCells.forEach((smallGridCell) => (smallGridCell.innerText = "")) // delete all content in cells to make them empty
      currentPlayer = playerOne
    }

// checking for win combinations via cell combinations and win-classes
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