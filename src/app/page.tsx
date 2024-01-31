import Link from "next/link";
import Image from "next/image";
import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/signin");
  }
  return (
    <main className="min-h-dvh w-dvw bg-black">
      <nav className="flex w-full items-center justify-between ">
        <Link href="/" className="m-6">
          <Image
            src={"/logos/logo-no-background.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={30}
          />
        </Link>
        <div className="mr-6 border-solid border-4 border-purple-800 rounded-full">
          {/* user button component here */}
        </div>
      </nav>
    </main>
  );
}
