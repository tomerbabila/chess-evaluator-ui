import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Chess } from '@/components';

const Analyze: React.FC = () => {
  const [movesHistory, setMovesHistory] = useState<string[]>([]); // chosenPiece state removed

  // Placeholder functions for button actions, defined within the component
  const handleBestMove = () => {
    console.log('Action: Get Best Move');
  };

  const handleAnalyzeForPiece = () => {
    // This function will need to be re-evaluated as the piece selection is removed.
    // For now, it will just log a generic message.
    console.log(`Action: Analyze for a piece (selection removed, piece will come from board)`);
  };

  const handleAnalyzeSituation = () => {
    console.log('Action: Analyze Situation (Custom Name)');
  };

  const handleSave = () => {
    console.log('Action: Save Current State');
  };

  const handleUndo = () => {
    console.log('Action: Undo Last Move');
  };

  const handleRedo = () => {
    console.log('Action: Redo Last Move');
  };

  const handleDelete = () => {
    console.log('Action: Delete Current Game/Analysis');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-foreground mb-8 text-center'>Analyze Your Chess Position</h1>

      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Left Column: Chess Board and Analysis Buttons (as a Card) */}
        <Card className='flex-1 flex flex-col items-center p-4'>
          {/* CardHeader removed */}
          <CardContent className='w-full flex flex-col items-center gap-4'>
            <Chess />

            {/* Analysis Buttons */}
            <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 w-full max-w-md'>
              <Button onClick={handleBestMove} className='flex-1 min-w-[150px]'>
                Get Best Move
              </Button>

              {/* Removed piece selection select and its button group */}
              <Button onClick={handleAnalyzeForPiece} className='flex-1 min-w-[180px]'>
                Analyze for Piece
              </Button>

              <Button onClick={handleAnalyzeSituation} className='flex-1 min-w-[180px]'>
                Analyze Situation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Moves History and Control Buttons (as a Card) */}
        <Card className='w-full lg:w-1/3 flex flex-col p-4'>
          {/* CardHeader removed */}
          <CardContent className='flex-grow flex flex-col gap-4'>
            {/* Moves History */}
            <h2 className='text-xl font-semibold text-foreground mb-3'>Moves History</h2>
            <div className='flex-grow bg-muted border border-border rounded-md p-3 overflow-y-auto max-h-96'>
              {movesHistory.length === 0 ? (
                <p className='text-muted-foreground italic'>No moves recorded yet.</p>
              ) : (
                <ul className='list-disc list-inside text-muted-foreground'>
                  {movesHistory.map((move, index) => (
                    <li key={index}>{move}</li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
          <CardFooter className='grid grid-cols-2 gap-3 pt-6'>
            <Button variant='outline' onClick={handleSave}>
              Save
            </Button>
            <Button variant='outline' onClick={handleUndo}>
              Undo
            </Button>
            <Button variant='outline' onClick={handleRedo}>
              Redo
            </Button>
            <Button variant='destructive' onClick={handleDelete}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Analyze;
