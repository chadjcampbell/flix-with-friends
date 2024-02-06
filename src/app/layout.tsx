import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flix with Friends",
  description:
    "Where movie magic meets social connection! Discover, share, and celebrate your favorite films with friends in this immersive movie-loving community. From personalized recommendations to lively discussions, dive into a world of cinematic joy with the people who matter most.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/no-auth/landing");
  }
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="min-h-dvh w-dvw bg-black">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
