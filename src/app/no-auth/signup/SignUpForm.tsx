"use client";

import signup from "@/actions/auth/signup";
import { Button, Card, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

const SignUpForm = () => {
  const initialState = { error: null };
  const [state, dispatch] = useFormState(signup, initialState);
  return (
    <Card>
      <form className="p-6 flex flex-col gap-4" action={dispatch}>
        <label htmlFor="username">Username</label>
        <Input
          type="username"
          autoComplete="username"
          isRequired
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <Input
          autoComplete="new-password"
          isRequired
          type="password"
          name="password"
          id="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input
          autoComplete="new-password"
          isRequired
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
        {state.error ? (
          <p className="mt-2 text-sm text-red-500" key={state.error}>
            {state.error}
          </p>
        ) : (
          <br />
        )}
        <Button
          type="submit"
          className="bg-red-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Sign Up
        </Button>
        <p className="text-center">
          Already a member?{" "}
          <Link className="text-indigo-800" href="/no-auth/signin">
            Sign In
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default SignUpForm;
