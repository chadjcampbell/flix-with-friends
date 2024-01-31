CREATE TABLE "user" (
  "id" TEXT PRIMARY KEY,
  "username" TEXT,
  "hashed_password" TEXT
);

CREATE TABLE "session" (
  "id" TEXT PRIMARY KEY,
  "user_id" TEXT NOT NULL REFERENCES "user" ("id"),
  "expires_at" TIMESTAMPTZ NOT NULL
);