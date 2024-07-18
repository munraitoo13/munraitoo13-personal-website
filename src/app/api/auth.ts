import { prisma } from "@/app/_lib/prisma";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });

  if (!user || !bcrypt.compareSync(process.env.PASSWORD || "", user.password)) {
    return new Response("Invalid credentials", { status: 404 });
  } else {
    const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
      expiresIn: "1h",
    });

    return new Response(JSON.stringify({ token }), { status: 200 });
  }
}
