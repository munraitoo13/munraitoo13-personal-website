import { verifyToken } from "@/utils/tokenUtils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const redirectToLogin = () => {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("token");
    return response;
  };

  const redirectToAdmin = NextResponse.redirect(new URL("/admin", req.url));

  try {
    const token = req.cookies.get("token")?.value;

    if (req.nextUrl.pathname === "/login") {
      if (token) {
        const payload = await verifyToken(token);
        if (payload) return redirectToAdmin;

        const response = NextResponse.next();
        response.cookies.delete("token");
        return response;
      }

      return NextResponse.next();
    }

    if (!token) return redirectToLogin();

    const payload = await verifyToken(token);
    if (!payload) return redirectToLogin();

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return redirectToLogin();
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
