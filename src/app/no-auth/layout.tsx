import Image from "next/image";
import bg from "../../../public/netflixbg.jpg";
import NoAuthNavbar from "@/components/NoAuthNavbar";
import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";

export default async function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <main className="min-h-dvh w-dvw flex flex-col items-center bg-gradient-to-b from-black to-transparent">
      <Image
        fill
        src={bg}
        alt="background image"
        className="-z-50 object-cover"
      />
      <NoAuthNavbar />
      {children}
    </main>
  );
}
