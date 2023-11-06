import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/dashboard/:path*",
};

export function middleware(request: NextRequest) {
  // const auth = sessionStorage.getItem("student");
  // if (!auth) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}
