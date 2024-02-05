import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-b from-black to-transparent">
      <nav className="flex w-full items-center ">
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
    </header>
  );
};

export default Navbar;
