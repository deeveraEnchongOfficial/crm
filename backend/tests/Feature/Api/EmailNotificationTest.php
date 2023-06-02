<?php

use App\Models\Inquiry;
use App\Models\User;
use App\Notifications\InquiryResponse;
use App\Notifications\InquiryCatch;


it('can sent email in Inquiry Response', function () {
    Notification::fake();
    $inquiryData = Inquiry::factory()->make()->toArray();
    $user = User::factory()->make(['email' => 'test@gmail.com']);
    Notification::send([$user], new InquiryResponse($inquiryData));
    Notification::assertSentTo($user, InquiryResponse::class); 
});

it('can sent email in Inquiry Catch', function () {
    Notification::fake();
    $inquiryData = Inquiry::factory()->make()->toArray();
    $user = User::factory()->make(['email' => 'test@gmail.com']);
    Notification::send([$user], new InquiryCatch($inquiryData));   
    Notification::assertSentTo($user, InquiryCatch::class); 
 
    // Notification::assertSentTo($user, InquiryCatch::class, function ($notification, $channels) use ($user, $inquiryData) {
    //     $mailData = $notification->toMail($user)->render();
    //     return true;
    // });
});