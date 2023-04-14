/*
  Warnings:

  - You are about to drop the column `Status` on the `occurrences` table. All the data in the column will be lost.
  - Added the required column `status` to the `occurrences` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_occurrences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_occurrences" ("created_at", "id", "name", "origin", "updated_at") SELECT "created_at", "id", "name", "origin", "updated_at" FROM "occurrences";
DROP TABLE "occurrences";
ALTER TABLE "new_occurrences" RENAME TO "occurrences";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
