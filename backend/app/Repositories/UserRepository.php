<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function findByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    public function create(array $data)
    {
        return User::create($data);
    }

    public function update(User $user, array $data)
    {
        $user->fill($data);
        $user->save();

        return $user;
    }

    public function delete(User $user)
    {
        $user->delete();
    }

    public function find($id)
    {
        return User::find($id);
    }

    public function revokeTokens(User $user)
    {
        $user->tokens()->delete();
    }
}
