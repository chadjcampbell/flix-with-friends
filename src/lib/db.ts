import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { sql } from "@vercel/postgres";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const db = drizzle(sql);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  username: text("username"),
  hashed_password: text("hashed_password"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const adapter = new DrizzlePostgreSQLAdapter(db, session, user);
