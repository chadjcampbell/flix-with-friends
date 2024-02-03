import Image from "next/image";
import bg from "../../../public/netflixbg.jpg";
import Link from "next/link";
import signup from "@/actions/auth/signup";

export default function SignUpPage() {
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
        {" "}
        <form
          className="bg-white p-6 flex flex-col gap-4 rounded-md"
          action={signup}
        >
          <label htmlFor="username">Username</label>
          <input
            className="border-solid border-2 border-black p-2 rounded-md"
            name="username"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            className="border-solid border-2 border-black p-2 rounded-md"
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="border-solid border-2 border-black p-2 rounded-md"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
          <br />
          <button
            type="submit"
            className="bg-red-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already a member?{" "}
            <Link className="text-indigo-800" href="/signin">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
