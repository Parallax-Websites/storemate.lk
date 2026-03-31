<?php

use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('welcome');

Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/partner-program', function () {
    return Inertia::render('PartnerProgram');
})->name('partner.program');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact.us');

Route::get('/inquiry', function () {
    return Inertia::render('Inquiry');
})->name('inquiry');

Route::get('/sales-management', function () {
    return Inertia::render('SalesManagement');
})->name('sales.management');

Route::get('/shipping-packing', function () {
    return Inertia::render('ShippingPacking');
})->name('shipping.packing');

Route::get('/user-contact-product', function () {
    return Inertia::render('UserContactProduct');
})->name('user.contact.product');

Route::get('/sinhala-tamil-translation', function () {
    return Inertia::render('SinhalaTranslation');
})->name('sinhala.translation');

Route::get('/free-course', function () {
    return Inertia::render('FreeCourse');
})->name('free.course');

Route::get('/free-waybill-generator', function () {
    return Inertia::render('FreeWaybillGenerator');
})->name('free.waybill.generator');

Route::get('/module-1', function () {
    return Inertia::render('Module1');
})->name('module.1');

Route::get('/module-2', function () {
    return Inertia::render('Module2');
})->name('module.2');

Route::get('/module-3', function () {
    return Inertia::render('Module3');
})->name('module.3');

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy.policy');

Route::get('/call-campaign', function () {
    return Inertia::render('CallCampaign');
})->name('call.campaign');

Route::get('/lead-campaign', function () {
    return Inertia::render('LeadCampaign');
})->name('lead.campaign');

Route::redirect('/blog', '/storemate-blog', 301);
Route::redirect('/blog/', '/storemate-blog', 301);

Route::get('/storemate-blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Chatbot API
Route::post('/api/chatbot/ask', [ChatbotController::class, 'ask'])->name('chatbot.ask');
