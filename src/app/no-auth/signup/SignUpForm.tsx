"use client";

import signup from "@/actions/auth/signup";
import Link from "next/link";
import { useFormState } from "react-dom";

const SignUpForm = () => {
  const initialState = { error: null };
  const [state, dispatch] = useFormState(signup, initialState);
  return (
    <form
      className="bg-white p-6 flex flex-col gap-4 rounded-md"
      action={dispatch}
    >
      <label htmlFor="username">Username</label>
      <input
        required
        className="border-solid border-2 border-black p-2 rounded-md"
        name="username"
        id="username"
      />
      <label htmlFor="password">Password</label>
      <input
        required
        className="border-solid border-2 border-black p-2 rounded-md"
        type="password"
        name="password"
        id="password"
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        required
        className="border-solid border-2 border-black p-2 rounded-md"
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
      <button
        type="submit"
        className="bg-red-800 text-white text-xl px-6 py-2 rounded-lg hover:bg-red-600"
      >
        Sign Up
      </button>
      <p className="text-center">
        Already a member?{" "}
        <Link className="text-indigo-800" href="/no-auth/signin">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
