// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { getToken } from '../utils/auth';
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {

//     const token = getToken();
//     if (token) {
//             // Respond with JSON indicating an error message
//             console.log("testing");
//             // return NextResponse.redirect(new URL('/', request.url))
//         } else {
//           // return NextResponse.redirect(new URL('/login', request.url))
//         }
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/:path*',
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
 
  return response
}

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from '../utils/auth';

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   // console.log(request.nextUrl.pathname);
//   // if (request.nextUrl.pathname !== '/:path*') {
//   //   const token = getToken();
//   //   if (!token) {
//   //     // return NextResponse.redirect('/auth/login');
//   //     return NextResponse.redirect(new URL('/auth/login', request.url))
//   //   }
//   // }
//   const excludedPathsRegex = /^\/(?!auth\/login(?:\/|$))/; // Regex to exclude the "/auth/login" path and its subpaths
//   console.log(excludedPathsRegex.test(request.nextUrl.pathname));
//   if (excludedPathsRegex.test(request.nextUrl.pathname)) {
//     // console.log("true");
//     const token = getToken();
//     if (!token) {
//       return NextResponse.redirect(new URL('/auth/login', request.url))
//     }
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/:path*',
// };
