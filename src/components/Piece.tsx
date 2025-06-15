import React from 'react';

// Mapping from FEN piece notation to asset file names (moved here from Game.tsx)
const pieceAssets: { [key: string]: string } = {
  r: 'br',
  n: 'bn',
  b: 'bb',
  q: 'bq',
  k: 'bk',
  p: 'bp',
  R: 'wr',
  N: 'wn',
  B: 'wb',
  Q: 'wq',
  K: 'wk',
  P: 'wp',
};

interface PieceProps {
  pieceType: string; // FEN notation for the piece (e.g., 'p', 'R', 'k')
  position: string; // The square the piece is on (e.g., 'a1', 'e4') - useful for DnD logic
  isDraggable?: boolean; // Whether the piece can be dragged (future DnD)
  onDragStart?: (e: React.DragEvent, pieceType: string, position: string) => void; // DnD handler
}

const Piece: React.FC<PieceProps> = ({ pieceType, position, isDraggable = false, onDragStart }) => {
  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart(e, pieceType, position);
    }
    // Set data for drag operation (e.g., piece type and its starting position)
    e.dataTransfer.setData('text/plain', JSON.stringify({ pieceType, from: position }));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <img
      src={`src/assets/${pieceAssets[pieceType]}.png`} // Path to your piece assets
      alt={pieceAssets[pieceType]}
      className='w-full h-full object-contain select-none' // Prevent text selection on piece
      draggable={isDraggable} // Enable/disable native drag behavior
      onDragStart={handleDragStart}
    />
  );
};

export default Piece;
