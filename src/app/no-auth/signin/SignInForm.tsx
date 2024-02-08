"use client";

import signin from "@/actions/auth/signin";
import { Button, Card, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import SignInButton from "./SignInButton";

const SignInForm = () => {
  const initialState = { error: null };
  const [state, dispatch] = useFormState(signin, initialState);
  return (
    <Card>
      <form className="p-6 flex flex-col gap-4" action={dispatch}>
        <label htmlFor="username">Username</label>
        <Input
          type="username"
          autoComplete="username"
          name="username"
          id="username"
          isRequired
        />
        <label htmlFor="password">Password</label>
        <Input
          autoComplete="current-password"
          type="password"
          name="password"
          id="password"
          isRequired
        />
        <br />
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.error ? (
            <p className="mt-2 text-sm text-red-500" key={state.error}>
              {state.error}
            </p>
          ) : (
            <br />
          )}
        </div>
        <SignInButton />
        <p className="text-center">
          Not yet a member?{" "}
          <Link className="text-red-800" href="/no-auth/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </Card>
  );
};

export default SignInForm;
