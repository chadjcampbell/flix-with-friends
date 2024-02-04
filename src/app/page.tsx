import Link from "next/link";
import Image from "next/image";
import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";
import ProfileMenu from "@/ui/ProfileMenu";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/landing");
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
        <ProfileMenu />
      </nav>
    </main>
  );
}
