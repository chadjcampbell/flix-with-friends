import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";
import Navbar from "@/ui/Navbar";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/landing");
  }
  return (
    <main className="min-h-dvh w-dvw bg-black">
      <Navbar />
    </main>
  );
}
