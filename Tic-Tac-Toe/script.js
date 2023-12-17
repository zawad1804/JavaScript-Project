const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        checkWinner();
        togglePlayer();
        updateStatus();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function updateStatus() {
    status.textContent = gameActive ? `Player ${currentPlayer}'s turn` : `Player ${currentPlayer} wins!`;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            cells[a].classList.add('winner');
            cells[b].classList.add('winner');
            cells[c].classList.add('winner');
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        status.textContent = 'It\'s a draw!';
    }
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
    updateStatus();
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
    status.textContent = `Player ${currentPlayer}'s turn`;
}

// Event listener for cell clicks
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => makeMove(index));
});

// Event listener for restart button
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        restartGame();
    }
});

// Event listener for reset button
document.addEventListener('keydown', function(event) {
    if (event.key === 't' || event.key === 'T') {
        resetGame();
    }
});
