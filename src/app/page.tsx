import { validateRequest } from "@/actions/auth/validateRequest";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/no-auth/landing");
  } else {
    return redirect("/auth/");
  }
}
