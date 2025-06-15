import React from 'react';
import Piece from './Piece'; // Import the Piece component

// Define the colors for the chess board squares
const LIGHT_SQUARE_COLOR = '#eedc97'; // Light squares
const DARK_SQUARE_COLOR = '#964d22'; // Dark squares

// Helper to convert file index (0-7) to character ('a'-'h')
const getFileChar = (fileIdx: number) => String.fromCharCode(97 + fileIdx);
// Helper to convert rank index (0-7) to number (8-1)
const getRankNum = (rankIdx: number) => 8 - rankIdx;

// Function to convert FEN string to a 2D array representation of the board
// For this skeleton, we'll use a simplified parser focusing only on piece placement.
const fenToBoard = (fen: string) => {
  const board: (string | null)[][] = Array(8)
    .fill(null)
    .map(() => Array(8).fill(null));
  const [piecePlacement] = fen.split(' ');
  const ranks = piecePlacement.split('/');

  ranks.forEach((rank, rIdx) => {
    let fileIdx = 0;
    for (let i = 0; i < rank.length; i++) {
      const char = rank[i];
      if (/\d/.test(char)) {
        // If it's a number, skip empty squares
        fileIdx += parseInt(char, 10);
      } else {
        // It's a piece
        board[rIdx][fileIdx] = char;
        fileIdx++;
      }
    }
  });
  return board;
};

// Initial FEN string for the starting position of a chess game
const INITIAL_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const Game: React.FC = () => {
  // Parse the initial FEN to get the board state
  const boardState = fenToBoard(INITIAL_FEN);

  // Helper to determine square color
  const getSquareColor = (row: number, col: number) => {
    return (row + col) % 2 === 0 ? LIGHT_SQUARE_COLOR : DARK_SQUARE_COLOR;
  };

  // Placeholder for drag start logic (will be passed to Piece component)
  const handlePieceDragStart = (e: React.DragEvent, pieceType: string, position: string) => {
    console.log(`Dragging ${pieceType} from ${position}`);
    // You would typically store the dragged piece's info in a state or context here
  };

  return (
    <div className='flex flex-col w-full max-w-md aspect-square select-none overflow-hidden'>
      {boardState.map((row, rIdx) => (
        <div key={rIdx} className='flex flex-1'>
          {row.map((piece, cIdx) => {
            const squareName = `${getFileChar(cIdx)}${getRankNum(rIdx)}`; // e.g., 'a1', 'h8'
            const isDraggable = piece !== null; // For now, all pieces are draggable

            return (
              <div
                key={`${rIdx}-${cIdx}`}
                className='flex-1 flex items-center justify-center relative' // Added relative for piece positioning if needed
                style={{ backgroundColor: getSquareColor(rIdx, cIdx) }}
                // Add onDrop, onDragOver handlers here for DnD board logic later
                // onDrop={handleSquareDrop}
                // onDragOver={handleDragOver}
              >
                {/* Optional: Display square names for debugging/development */}
                {/* <span className="absolute top-0 left-0 text-xs text-black/20 p-1">
                  {squareName}
                </span> */}

                {piece && (
                  <Piece
                    pieceType={piece}
                    position={squareName}
                    isDraggable={isDraggable}
                    onDragStart={handlePieceDragStart}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Game;
