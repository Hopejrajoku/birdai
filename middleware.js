import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)" // Match all routes starting with /dashboard
]);

export default clerkMiddleware( async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const {redirectToSignIn} = await auth();

    return redirectToSignIn();
  }
});



export const config = {
  matcher: [
    "/dashboard(.*)",       // (Optional) protect other routes
    "/((?!_next|favicon.ico|.*\\.(?:css|js|json|png|jpg|jpeg|svg|woff2?|ttf|eot)).*)", // Skip static files
  ],
};
