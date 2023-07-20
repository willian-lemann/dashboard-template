import { authMiddleware } from "@clerk/nextjs";

const apiRoutes = ["/api/:path*"];
const clientRoutes = [
  "/",
  "/login/[[...index]]",
  "/signup/[[...index]]",
  "/termos",
  "/ajuda",
  "/privacidade",
  "/api/checkup-verification",
  "/sobre",
];

export default function middleware() {}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
