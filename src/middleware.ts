import { verifyToken } from "@/utils/tokenUtils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const loginUrl = new URL("/login", req.url);
  const redirectToLogin = NextResponse.redirect(loginUrl);

  const adminUrl = new URL("/admin", req.url);
  const redirectToAdmin = NextResponse.redirect(adminUrl);

  try {
    const token = req.cookies.get("token")?.value;

    if (req.nextUrl.pathname === "/login") {
      if (token) {
        const payload = await verifyToken(token);
        if (payload) return redirectToAdmin;
      }

      return NextResponse.next();
    }

    if (!token) return redirectToLogin;

    const payload = await verifyToken(token);
    if (!payload) {
      req.cookies.delete("token");
      return redirectToLogin;
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return redirectToLogin;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
