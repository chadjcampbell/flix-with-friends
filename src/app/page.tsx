import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/no-auth/landing");
  }
  return <main className="min-h-dvh w-dvw bg-black"></main>;
}
