import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const afterAuth = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const { pathname } = request.nextUrl;

  const USER_AUTH = cookieStore.get("user_auth");

  if (!USER_AUTH && pathname.includes("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (USER_AUTH && afterAuth.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// export const config = {
//   matcher: "/dashboard/:path*",
// };
