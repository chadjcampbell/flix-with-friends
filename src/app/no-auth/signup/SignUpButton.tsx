import { Button, Spinner } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

const SignUpButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isDisabled={pending}
      isLoading={pending}
      className="bg-red-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-red-600"
    >
      Sign Up
    </Button>
  );
};
export default SignUpButton;
