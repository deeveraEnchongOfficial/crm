<?php

use App\Models\Contact;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->user = User::factory()->create();
    Sanctum::actingAs($this->user);
});

it('can list all contacts', function () {
    Contact::factory()->count(3)->create();

    $response = $this
        ->get(route('contacts.index'));

    $response->assertStatus(200)
        ->assertJsonCount(3, 'data')
        ->assertJsonStructure([
            'current_page',
            'data' => [
                '*' => [
                    'id',
                    'name',
                    'email',
                    'telephone',
                    'mobile',
                    'created_at',
                ],
            ],
            'next_page_url',
            'path',
            'per_page',
            'prev_page_url',
            'to',
            'total',
        ]);
});

it('can create a new contact', function () {
    $contactData = Contact::factory()->make()->toArray();

    $response = $this->post(route('contacts.store'), $contactData);

    $response->assertStatus(201)
        ->assertJsonFragment(['message' => 'Contact created.']);
});

it('can show a single contact', function () {
    $contact = Contact::factory()->create();

    $response = $this->get(route('contacts.show', $contact));

    $response->assertStatus(200)
        ->assertJsonFragment($contact->toArray());
});

it('can update an contact', function () {
    $contact = Contact::factory()->create();
    $updatedData = Contact::factory()->make()->toArray();

    $response = $this->put(route('contacts.update', $contact), $updatedData);

    $response->assertStatus(200)
        ->assertJsonFragment(['message' => 'Contact Updated successfully.']);
});

it('can delete an contact', function () {
    $contact = Contact::factory()->create();

    $response = $this->delete(route('contacts.destroy', $contact));

    $response->assertStatus(200)
        ->assertJsonFragment(['message' => 'Contact Deleted successfully.']);
});
