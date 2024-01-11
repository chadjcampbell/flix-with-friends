import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This protects all routes except landing

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  publicRoutes: ["/landing", "/contact"],
  afterAuth(auth, req, _evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const landing = new URL("/landing", req.url);
      return NextResponse.redirect(landing);
    }
    // If the user is logged in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});
