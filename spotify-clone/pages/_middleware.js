import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  // token will exist if user logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  const { pathname } = req.nextUrl
  // allow the requests if the following is true
  // if token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next()
  }
  // if not token then redirect them to login
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login")
  }
}
