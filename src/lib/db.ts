import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { sql } from "@vercel/postgres";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(sql);

const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  username: text("username"),
  hashed_password: text("hashed_password"),
});

const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const adapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionTable,
  userTable
);
