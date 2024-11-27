import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Leaderboard() {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get('/scores');
                // Fix: access the scores array from response data
                setScores(response.data.scores || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching scores:', error);
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (!scores || scores.length === 0) {
        return <p className="text-center">No scores available</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-yellow-600 dark:text-yellow-400 drop-shadow-lg">
                🏆 Leaderboard 🏆
            </h2>
            <div className="space-y-3">
                {scores.map((score, index) => (
                    <div 
                        key={index} 
                        className={`
                            relative flex items-center p-4 border-2 
                            ${index < 3 ? 'border-yellow-500 dark:border-yellow-500' : 'border-gray-200 dark:border-gray-500'}
                            bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800
                            transform hover:-translate-y-0.5 transition-all duration-200
                            rounded-lg shadow-md hover:shadow-lg
                        `}
                    >
                        <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mr-4 shadow-sm
                            ${index === 0 ? 'bg-yellow-400 dark:bg-yellow-500 text-black' : ''}
                            ${index === 1 ? 'bg-gray-200 dark:bg-gray-400 text-gray-700' : ''}
                            ${index === 2 ? 'bg-amber-600 dark:bg-amber-800 text-white' : ''}
                            ${index > 2 ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white' : ''}
                        `}>
                            {index === 0 && "👑"}
                            {index > 0 && (index + 1)}
                        </div>

                        <div className="flex-1 flex justify-between items-center">
                            <span className="text-gray-800 dark:text-white text-xl font-bold">
                                {score.name}
                            </span>
                            <span className="text-green-600 dark:text-green-400 font-mono font-medium">
                                {score.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}