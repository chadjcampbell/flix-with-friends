import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      isDisabled={pending}
      isLoading={pending}
      type="submit"
      className="bg-purple-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-purple-600"
    >
      Sign In
    </Button>
  );
};
export default SignInButton;
