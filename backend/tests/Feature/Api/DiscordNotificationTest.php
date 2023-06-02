<?php

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Notification;

it('discord webhook token is valid', function () {

    $discordNotification = Http::post(config('services.discord.hooks.notification'),[
        'username' => 'cooper',
        'content' => 'test'
    ]);
    if($discordNotification->getstatusCode() === 204){
        $this->assertTrue(true);
    }else{
        $this->assertTrue(false);
    }
});

it('discord invalid webhook token', function () {

    //Invalid Webhook Token
    $discordNotification = Http::post(config('services.discord.hooks.error_token'));
    //Unauthorized
    if($discordNotification->getstatusCode() === 401){
        $this->assertTrue(true);
    }else{
        $this->assertTrue(false);
    }
});

it('discord send successfully', function () {
    $inquiryData = Inquiry::factory()->make()->toArray();

    $message = <<<EOT
    Name: {$inquiryData['name']}
    Email: {$inquiryData['email']}
    Subject: {$inquiryData['subject']}
    Body: {$inquiryData['description']}
    EOT;

    $discordNotification = Http::post(config('services.discord.hooks.notification'),[
        'username' => 'cooper',
        'content' => $message
    ]);
    $data = $discordNotification->getBody();
    if($data){
        $this->assertTrue(true);
    }else{
        $this->assertTrue(false);
    }
});

it('discord no content', function () {
    $discordNotification = Http::post(config('services.discord.hooks.notification'),[
        'username' => 'copper',
        'content' => '** **'
    ]);

    //No Content 
    if($discordNotification->getstatusCode() === 204){
        $this->assertTrue(true);
    }else{
        $this->assertTrue(false);
    }
});