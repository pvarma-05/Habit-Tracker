import { NextResponse, NextRequest } from "next/server";

export async function middleware(request = NextRequest) {
    const path = request.nextUrl.pathname;
    console.log(path)
    const isPublicPath = path === '/login' || path === '/register' || path === '/'
    const token = request.cookies.get('token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

export const config = {
    matcher: [
        "/",
        "/login",
        "/register",
        "/dashboard",
        "/habits",
        "/progress",
        "/notifications",
        "/profile",
        "/profile/update-1",
        "/profile/update-3",
        "/help",
    ],
};
