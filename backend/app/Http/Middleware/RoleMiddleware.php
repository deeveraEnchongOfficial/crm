<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $user = $request->user();

        if (!$user || !$user->isAdmin()) {
            abort(403, 'Unauthorized');
        }

        return $next($request);
    }

    // public function handle($request, Closure $next, ...$roles)
    // {
    //     $user = $request->user();

    //     if ($user) {
    //         if ($user->isAdmin()) {
    //             return redirect()->route('admin.dashboard');
    //         } else {
    //             return redirect()->route('user.dashboard');
    //         }
    //     }

    //     abort(403, 'Unauthorized');
    // }
}
