import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = await req.json();

  await prisma.post.create({
    data: {
      published: res.posted,
      language: res.lang,
      title: res.title,
      description: res.desc,
      content: res.post,
      author: res.author,
    },
  });

  return NextResponse.json({ data: res });
}
