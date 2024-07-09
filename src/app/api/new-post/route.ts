import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = await req.json();

  await prisma.post.create({
    data: {
      posted: res.posted,
      lang: res.lang,
      cathegory: res.cathegory,
      title: res.title,
      desc: res.desc,
      post: res.post,
    },
  });

  return NextResponse.json({ data: res });
}
