<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function ask(Request $request)
    {
        $request->validate([
            'question' => 'required|string|max:1000',
        ]);

        try {
            $response = Http::timeout(60)->post('https://kavindurs8-rag-chatbot.hf.space/ask', [
                'question' => $request->input('question'),
            ]);

            if ($response->successful()) {
                $data = $response->json();
                return response()->json([
                    'answer' => $data['answer'] ?? 'No answer found.',
                ]);
            }

            return response()->json([
                'answer' => 'Sorry, the assistant is temporarily unavailable. Please try again later.',
            ], 503);
        } catch (\Exception $e) {
            return response()->json([
                'answer' => 'Sorry, something went wrong. Please try again.',
            ], 500);
        }
    }
}
