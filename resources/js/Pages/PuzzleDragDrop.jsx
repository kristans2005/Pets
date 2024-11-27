// PuzzleDragDrop.jsx
import { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import { useStopwatch } from 'react-timer-hook';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import axios from 'axios';

const PuzzleDragDrop = () => {
  const [completed, setCompleted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const {
    seconds,
    minutes,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });

  const handlePuzzleComplete = () => {
    
    setCompleted(true);
    pause();
  };

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('/score/store', ({

            name: e.target.name.value,
            time: `${minutes}m ${seconds}s`,
        }));

        console.log('Score saved:', response.data);
        setIsStarted(false);
        
    } catch (error) {
        console.error('Error saving score:', error);
        // Add user feedback here if needed
    }
  };

  const handlePuzzleStart = () => {
    if (isStarted) {
        return;
    }
    setIsStarted(true);
    setCompleted(false);
    reset();
    start();
    console.log('Puzzle started');
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-4xl font-mono mb-4 text-green-600 dark:text-green-400">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      
      {completed && (
        <div className="text-2xl text-green-600 font-bold mb-6">
          <div className="mb-4 text-center">Completed in {minutes}m {seconds}s! 🎉</div>
          <form className="flex flex-col sm:flex-row gap-3 items-center justify-center"
            onSubmit={handleNameSubmit}
            >
            <input 
              type="name" 
              name='name'
              placeholder='Ievadi savu vārdu' 
              className="px-4 py-2 border-2 border-green-500 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-green-400 
                placeholder-gray-400 text-lg w-64"
            />
            <button 
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-lg
                text-lg font-semibold hover:bg-green-700 transition-colors
                duration-200 shadow-md hover:shadow-lg"
            >
              Saglabāt
            </button>
          </form>
        </div>
      )}
      
      <div className="relative w-[600px] border-4 border-black dark:border-white rounded"
      onClick={handlePuzzleStart}
      >
        <JigsawPuzzle
          imageSrc="/images/puzzle/puzzle.jpg"
          rows={3}
          columns={5}
          onSolved={handlePuzzleComplete}
          
        />
      </div>
    </div>
  );
};

export default PuzzleDragDrop;