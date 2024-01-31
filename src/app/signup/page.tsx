import Image from "next/image";
import bg from "../../../public/netflixbg.jpg";
import Link from "next/link";
import signup from "@/actions/auth/signup";

export default function SignUpPage() {
  return (
    <main className="min-h-dvh w-dvw flex flex-col items-center bg-gradient-to-b from-black to-transparent">
      <Image
        layout="fill"
        objectFit="cover"
        src={bg}
        alt="background image"
        className="-z-50"
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
        {" "}
        <form action={signup}>
          <label htmlFor="username">Username</label>
          <input name="username" id="username" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <br />
          <button>Continue</button>
        </form>
      </div>
    </main>
  );
}
