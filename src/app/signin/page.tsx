import Image from "next/image";
import bg from "../../../public/netflixbg.jpg";
import Link from "next/link";
import SignInForm from "./SignInForm";

export default function SignInPage() {
  return (
    <main className="min-h-dvh w-dvw flex flex-col items-center bg-gradient-to-b from-black to-transparent">
      <Image
        fill
        src={bg}
        alt="background image"
        className="-z-50 object-cover"
      />
      <nav className="flex w-full">
        <Link href="/" className="m-6">
          <Image
            src={"/logos/logo-no-background.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={30}
          />
        </Link>
      </nav>
      <div className="my-auto">
        <SignInForm />
      </div>
    </main>
  );
}
