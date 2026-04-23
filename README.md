🎮 Tic Tac Toe

A simple Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring an interactive interface and win detection logic.

🚀 Features
✅ Player vs Player mode
⚠️ Player vs AI (in development)
✅ Automatic win detection
✅ Simple and responsive interface
✅ Turn indicator (X or O)
🔄 Restart button
🌐 Live Demo

You can play the game here:
👉 https://glowstone91.github.io/jogo_da_velha/

🧠 Game Logic

The game uses a 3x3 matrix to represent the board:

let table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

Where:

0 = empty
1 = X
2 = O

Win detection is based on:

Rows
Columns
Diagonals
🎯 How to Play
Open the index.html file or access the live demo
Click on Player vs Player
Click on any cell on the board
Players alternate between X and O
The game ends when someone wins
🗂️ Project Structure
Tic Tac Toe/
│
├── index.html   # Main menu
├── jdv.html     # Game screen
├── style.css    # Styles
└── script.js    # Game logic
💾 Storage

The game mode is stored using localStorage:

localStorage.setItem('p', 1); // PvP
localStorage.setItem('p', 0); // PvAI
⚠️ Future Improvements
🤖 Implement a smarter AI
🤝 Improve UX (animations, visual feedback)
🏁 Add draw detection
📱 Improve mobile responsiveness
🎨 Enhance overall design
🧑‍💻 Author

Developed by Pedro Sousa ✌️
