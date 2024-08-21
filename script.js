document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game');
    const turnElement = document.getElementById('turn');
    let isWhiteTurn = true; // Track whose turn it is
    let selectedPiece = null; // Track the selected piece

    // Initialize the board
    function initializeBoard() {
        // Define pieces' starting positions
        const pieces = [
            // White pieces
            { id: '1_1', type: 'rook', color: 'white' },
            { id: '2_1', type: 'knight', color: 'white' },
            { id: '3_1', type: 'bishop', color: 'white' },
            { id: '4_1', type: 'queen', color: 'white' },
            { id: '5_1', type: 'king', color: 'white' },
            { id: '6_1', type: 'bishop', color: 'white' },
            { id: '7_1', type: 'knight', color: 'white' },
            { id: '8_1', type: 'rook', color: 'white' },
            { id: '1_2', type: 'pawn', color: 'white' },
            { id: '2_2', type: 'pawn', color: 'white' },
            { id: '3_2', type: 'pawn', color: 'white' },
            { id: '4_2', type: 'pawn', color: 'white' },
            { id: '5_2', type: 'pawn', color: 'white' },
            { id: '6_2', type: 'pawn', color: 'white' },
            { id: '7_2', type: 'pawn', color: 'white' },
            { id: '8_2', type: 'pawn', color: 'white' },

            // Black pieces
            { id: '1_8', type: 'rook', color: 'black' },
            { id: '2_8', type: 'knight', color: 'black' },
            { id: '3_8', type: 'bishop', color: 'black' },
            { id: '4_8', type: 'queen', color: 'black' },
            { id: '5_8', type: 'king', color: 'black' },
            { id: '6_8', type: 'bishop', color: 'black' },
            { id: '7_8', type: 'knight', color: 'black' },
            { id: '8_8', type: 'rook', color: 'black' },
            { id: '1_7', type: 'pawn', color: 'black' },
            { id: '2_7', type: 'pawn', color: 'black' },
            { id: '3_7', type: 'pawn', color: 'black' },
            { id: '4_7', type: 'pawn', color: 'black' },
            { id: '5_7', type: 'pawn', color: 'black' },
            { id: '6_7', type: 'pawn', color: 'black' },
            { id: '7_7', type: 'pawn', color: 'black' },
            { id: '8_7', type: 'pawn', color: 'black' }
        ];

        // Add pieces to the board
        pieces.forEach(piece => {
            const cell = document.getElementById(piece.id);
            if (cell) {
                cell.innerHTML = `<div class="piece ${piece.color} ${piece.type}"></div>`;
            }
        });
    }

      // Handle cell clicks
      board.addEventListener('click', (e) => {
        const cell = e.target.closest('.gamecell');
        if (cell) {
            const piece = cell.querySelector('.piece');
            if (selectedPiece) {
                if (cell !== selectedPiece.parentElement) {
                    // Move the selected piece
                    cell.innerHTML = selectedPiece.outerHTML;
                    selectedPiece.parentElement.innerHTML = '';
                    isWhiteTurn = !isWhiteTurn;
                    turnElement.textContent = isWhiteTurn ? "It's White's Turn!" : "It's Black's Turn!";
                }
                selectedPiece = null; // Deselect the piece
            } else if (piece && piece.classList.contains(isWhiteTurn ? 'white' : 'black')) {
                // Select the piece if it is the current player's turn
                selectedPiece = piece;
            }
        }
    });

    // Initialize the board on page load
    initializeBoard();
});