import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const prisma =
  global.__prisma ??
  new PrismaClient({
    log: process.env.PRISMA_LOG
      ? ["query", "info", "warn", "error"]
      : ["warn", "error"],
  });

if (process.env.NODE_ENV !== "production") global.__prisma = prisma;
