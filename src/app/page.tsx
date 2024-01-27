import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
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
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-14 w-auto",
              },
            }}
            afterSignOutUrl="/landing"
          />
        </div>
      </nav>
    </main>
  );
}
