import { PrismaClient } from "@prisma/client";

// prevent multiple instances of prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// create a new prisma client instance
export const prisma = global.prisma || new PrismaClient();

// if in development, assign prisma to global object
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
