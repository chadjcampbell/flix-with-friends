"use server";

import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateId } from "lucia";
import { db, user } from "@/lib/db";
import { eq } from "drizzle-orm";

export default async function signup(
  formData: FormData
): Promise<ActionResult> {
  const username = formData.get("username");
  // username must be between 4 ~ 31 characters, and only consists of letters, 0-9, -, and _
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-zA-Z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match",
    };
  }
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: "Invalid password",
    };
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  // check if username is already used
  const userExists = await db
    .select()
    .from(user)
    .where(eq(user.username, username));
  if (userExists.length > 0) {
    return {
      error: "Username already taken",
    };
  }

  await db.insert(user).values({
    id: userId,
    username: username,
    hashed_password: hashedPassword,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}

interface ActionResult {
  error: string;
}
