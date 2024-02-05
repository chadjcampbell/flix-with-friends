import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <Link href="/" className="m-100">
        <Image
          src={"/logos/logo-no-background.png"}
          alt="Flix with Friends Logo"
          width={200}
          height={30}
        />
      </Link>
      <ProfileMenu />
    </nav>
  );
};

export default Navbar;
