"use client";

import signin from "@/actions/auth/signin";
import Link from "next/link";
import { useFormState } from "react-dom";

const SignInForm = () => {
  const initialState = { error: null };
  const [state, dispatch] = useFormState(signin, initialState);
  return (
    <form
      className="bg-white p-6 flex flex-col gap-4 rounded-md"
      action={dispatch}
    >
      <label htmlFor="username">Username</label>
      <input
        className="border-solid border-2 border-black p-2 rounded-md"
        name="username"
        id="username"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        className="border-solid border-2 border-black p-2 rounded-md"
        type="password"
        name="password"
        id="password"
        required
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
      <button
        type="submit"
        className="bg-indigo-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-indigo-600"
      >
        Sign In
      </button>
      <p className="text-center">
        Not yet a member?{" "}
        <Link className="text-red-800" href="/signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
