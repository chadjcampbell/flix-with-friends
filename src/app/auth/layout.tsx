import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/no-auth/landing");
  }
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
