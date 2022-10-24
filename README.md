# Ultimate-Tic-Tac-Toe - GA Project One - 5 Days
# Description
The game is a 3x3 board.
The game starts with the player who has the circle as a symbol (player one who always starts the game). The other player has a triangle as a symbol (player two).
The goal of the game is to have three of their own symbols displayed in the grid in a row or column or diagonal.
The player who won should be displayed at the end of the game.
# Deployment link
https://imras802.github.io/Ultimate-Tic-Tac-Toe/

# Getting Started/Code Installation
At first the reader would need to have a look at the html to see which elements will be displayed on the website. Then the reader should take a look at the JavaScript file to understand all the functions and the names of the variables. The code should be read from top to bottom since this is how the functions were implemented and it also gives the reader an overview of the most important to the less important functions since this is also shown by the order of the functions in the code.

# Timeframe & Working Team (Solo/Pair/Group)
I worked independently, it was a solo project. The game was coded within 5 days.

# Technologies Used
Wireframe
CSS
HTML
JavaScript

# Brief
Ultimate Tic Tac Toe is a variation on the classic children's game. In this version, each cell of the Tic Tac Toe board is a game of Tic Tac Toe. Winning a smaller game, places that player's token (X or O) in the larger game's cell.
 
The first player can choose any of the smaller boards to start on. Whichever cell they choose will determine the board that the opponent will play on. If the board is completed, the opponent can choose any board to play on.
 
The aim is to win the larger Tic Tac Toe game.
 
##Resources
 
* [Ultimate Tic-Tac-Toe: The Rules - Youtube](https://www.youtube.com/watch?v=37PC0bGMiTI)
* [Ultimate tic-tac-toe - Wikipedia](https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe)
 
##Requirements
 
* The game should be playable for two players on the same computer, taking turns to make their moves
* The winner should be displayed when the game is over
 
##Suggested enhancements
 
* Responsive design
* Single player mode with the computer attempting reasonable moves
 
##Challenges
 
The first challenge is to make a standard Tic Tac Toe game with win condition. Once this has been achieved the larger game also needs to be implemented. A good use of Object Oriented Programming (read constructor functions), can be very helpful here.
 
##Tips
 
* Make sure you spend plenty of time planning _before_ you start coding
* Make sure you understand all of the rules of the game
* Make a checklist of all the features you want to add to the game
* Keep It Stupid Simple
* Refactor your code as you go
* Make sure you have a good idea of what your MVP is and only add extra features once you have achieved it
* Do just enough styling to get started, then once you have your MVP polish up the styling before moving on

# Planning
The first draft was made by drawing it in a wireframe. Initially I planned to make one big grid consisting of 9 small grids. However, with the limited time (5 days instead of 7) I needed to limit the game to the classic Tic-Tac-Toe game. The functionality stayed the same though.
The next step was writing some pseudocode i.e. the elements, functions etc. as comments in VS Code in the appropriate files in order to get a structure.

# Build/Code Process
At first I was coding the most important elements of the game to see if the functionalities are working in the next steps.

The second step was coding the variables which I knew I would be using right from the start and  the functions which are linked to the grid. Each cell had to show the symbol of the player who was playing and restricting the moves of the player only to cells which are not already taken. It also takes into account if the score field is appearing, if it hasn't appeared it lets the player continue to play.

The third major step was defining the possibilities to win the game. Therefore each cell had to be numbered to define the win combinations. In order to achieve this, I used a data-index in the html doc to number the cells and to link it as arrays in JavaScript. The function is looping through the cell combinations to check if there is a win combination of three cells either in a row, a column or a diagonal. I used CSS to show the win combinations and named the matching cell combinations therefore “cssClass”.

# Challenges
Some of the technical challenges I came across were linking the cells to the win options since only particular cells are eligible for that. This required some thinking ahead to figure it out. Also giving the strike throughs the right direction when one player wins was a challenge since in the beginning the wrong combinations were shown as a win. Later on I had to figure out that only the right sides are being shown since there was a bug which declared always the opposite side inside the grid as a win. Using the console and console.logging the arrays out helped in solving the problem.

# Wins
Making the win options visible by a strike through.
Thinking of the all win possibilities and how to code them while also including the possibility of a draw.
At first I wanted to work with winner and draw alerts but after researching I found that there are more elegant solutions like using appearing and disappearing elements on the page.
Using Object oriented programming.

# Key Learnings/Takeaways
I learned about project management from the start to the end of a project and how long the planning phase can be. I also got comfortable with Standups to report the progress of the project in each stage. I learned using the DOM and the console more and also checking the code by using console.logs. I also familiarized myself with the data-index which was a completely new approach to me. 
Even though I had a draft how the game should look like and what functions/ elements I wanted to use - during the process of building it it was constantly changing so I couldn't stick to my initial draft completely. This seems to be a normal process when working on a project.

# Bugs
The restart button got a bit shaky after I applied two special effects in CSS. When moving the pointer near the restart button the whole website seems to shake although it is working perfectly.

# Future Improvements
The game could be expanded to the Ultimate Tic Tac Toe game. Also some special effects like a clicking or winning sound could be implemented.
