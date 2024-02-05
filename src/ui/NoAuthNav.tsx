import Image from "next/image";
import Link from "next/link";

const NoAuthNav = () => {
  return (
    <nav className="flex w-full">
      <Link href="/no-auth/landing" className="m-6">
        <Image
          src={"/logos/logo-no-background.png"}
          alt="Flix with Friends Logo"
          width={200}
          height={30}
        />
      </Link>
    </nav>
  );
};

export default NoAuthNav;
