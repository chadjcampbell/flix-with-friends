import Image from "next/image";
import { Navbar, NavbarContent, NavbarBrand, Link } from "@nextui-org/react";

const NoAuthNavbar = () => {
  return (
    <Navbar isBlurred={false} maxWidth="full" className="bg-transparent">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/no-auth/landing" className="m-6">
            <Image
              src={"/logos/logo-white-crop.png"}
              alt="Flix with Friends Logo"
              width={200}
              height={40}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default NoAuthNavbar;
