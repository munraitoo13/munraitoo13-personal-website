import { NextRequest, NextResponse } from "next/server";
import { getToken, verifyToken } from "@/utils/tokenUtils";

export async function middleware(req: NextRequest, res: NextResponse) {
  try {
    const token = getToken();
    await verifyToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
