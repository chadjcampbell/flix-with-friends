import Image from "next/image";
import bg from "../../../public/netflixbg.jpg";
import Link from "next/link";
import signin from "@/actions/auth/signin";

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
        <form
          className="bg-white p-6 flex flex-col gap-4 rounded-md"
          action={signin}
        >
          <label htmlFor="username">Username</label>
          <input
            className="border-solid border-2 border-black p-2 rounded-md"
            name="username"
            id="username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="border-solid border-2 border-black p-2 rounded-md"
            type="password"
            name="password"
            id="password"
            required
          />
          <br />
          <button
            type="submit"
            className="bg-indigo-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-indigo-600"
          >
            Sign In
          </button>
          <p className="text-center">
            Not yet a member?{" "}
            <Link className="text-red-800" href="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
