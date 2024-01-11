import Image from "next/image";
import bg from "../../../public/theatre-pic.jpg";

export default function Landing() {
  return (
    <main
      className="min-h-dvh"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <nav className="p-4">
        <div className="p-4 bg-black bg-opacity-30 w-fit rounded-lg">
          <Image
            src={"/logos/logo-no-background.png"}
            alt="Flix with Friends Logo"
            width={200}
            height={30}
          />
        </div>
      </nav>

      <div className="max-w-4xl mx-auto mt-16 p-10 text-center bg-black bg-opacity-30 w-fit rounded-lg">
        <h1 className="text-6xl font-bold text-white mb-4">
          Flix with Friends
        </h1>

        <p className="text-2xl text-gray-200 mb-8">
          Discover, share, and celebrate your favorite films with friends in
          this immersive movie-loving community.
        </p>

        <div className="flex justify-center space-x-8">
          <a
            href="#"
            className="bg-purple-700 text-white text-xl px-6 py-2 rounded-full hover:bg-blue-600"
          >
            Sign In
          </a>
          <a
            href="#"
            className="bg-red-800 text-white text-xl px-6 py-2 rounded-full hover:bg-gray-900"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
