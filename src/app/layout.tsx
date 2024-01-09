import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalState } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flix with Friends",
  description:
    "Where movie magic meets social connection! Discover, share, and celebrate your favorite films with friends in this immersive movie-loving community. From personalized recommendations to lively discussions, dive into a world of cinematic joy with the people who matter most.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>{children}</GlobalState>
      </body>
    </html>
  );
}
