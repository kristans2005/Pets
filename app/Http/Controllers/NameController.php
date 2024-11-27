<?php

namespace App\Http\Controllers;

use App\Models\Score;
use Illuminate\Http\Request;

class NameController extends Controller
{

    public function index()
    {

        $scores = Score::all()
            ->sortBy(function ($score) {
                // Convert "Xm Ys" format to seconds for sorting
                preg_match('/(\d+)m\s+(\d+)s/', $score->time, $matches);
                $minutes = (int) $matches[1];
                $seconds = (int) $matches[2];
                return ($minutes * 60) + $seconds;
            })
            ->values() // Reset array keys after sorting
            ->take(10); // Optional: limit to top 10

        return response()->json([
            'scores' => $scores
        ], 200);
    }

    public function store(Request $request)
    {
        $score = Score::create([
            'name' => $request->name,
            'time' => $request->time
        ]);

        return response()->json([
            'message' => 'Score saved successfully',
            'score' => $score
        ], 201);
    }

}
