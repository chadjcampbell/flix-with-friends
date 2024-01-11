import Image from "next/image";
import bg from "../../../public/theatre-pic.jpg";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main
      className="min-h-dvh p-4"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <nav className="px-4 w-fit bg-black bg-opacity-30 rounded-lg">
        <Link href="/" className="p-4">
          <Image
            src={"/logos/logo-no-background.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={30}
          />
        </Link>
      </nav>

      <div className="flex justify-center items-center mt-12">
        <SignUp signInUrl="/signin" />
      </div>
    </main>
  );
}
