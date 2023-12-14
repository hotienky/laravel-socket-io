<?php

use App\Http\Controllers\Games\FishingGameController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ChatsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/chat/{room?}',  [ChatsController::class, 'renderChat'])->name('chat');
    Route::post('/message', [ChatsController::class, 'sendMessage'])->name('message');
    Route::get('/lottery', [ChatsController::class, 'renderLottery'])->name('lottery');
    Route::post('/spin', [ChatsController::class, 'lottery'])->name('spin');
    Route::get('/games', [ChatsController::class, 'renderGames'])->name('games');

});

Route::get('/fishing',  [FishingGameController::class, 'index'])->name('fishing');


require __DIR__ . '/auth.php';
