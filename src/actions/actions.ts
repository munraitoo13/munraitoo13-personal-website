"use server";

import { prisma } from "@/lib/prisma";
import { options, transporter } from "@/lib/nodemailer";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import { encrypt } from "@/lib/encrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// create post
export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        language: formData.get("language") as string,
        published: formData.get("published") === "on",
        title: formData.get("title") as string,
        tags: {
          connect: formData
            .getAll("tags")
            .map((tag) => ({ id: tag as string })),
        },
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        author: {
          connect: {
            id: "3ed9caae-6490-486a-92db-c1805ae5edf6",
          },
        },
      },
    });

    console.log("Post created successfully");
  } catch (error) {
    console.error("Error creating post", error);
  }
}

// delete post
export async function deletePost(formData: FormData) {
  try {
    // delete post
    await prisma.post.delete({
      where: {
        id: formData.get("id") as string,
      },
    });

    console.log("Post deleted successfully");
  } catch (error) {
    console.error("Error deleting post", error);
  }
}

// update post
export async function updatePost(formatData: FormData) {
  try {
    await prisma.post.update({
      where: {
        id: formatData.get("id") as string,
      },

      data: {
        language: formatData.get("language") as string,
        published: formatData.get("published") === "on",
        title: formatData.get("title") as string,
        tags: {
          connect: formatData
            .getAll("tags")
            .map((tag) => ({ id: tag as string })),
        },
        description: formatData.get("description") as string,
        content: formatData.get("content") as string,
      },
    });
  } catch (error) {
    console.error("Error updating post", error);
  }
}

// send mail
export async function sendMail(formData: FormData) {
  try {
    await transporter.sendMail({
      ...options,
      subject: formData.get("subject") as string,
      html: `<p>Reply to: ${formData.get("email")}</p> <br> <h2>Mensagem enviada por ${formData.get("name")}</h2> <p>${formData.get("message")}</p>`,
    });
  } catch (error) {
    console.error("Error sending email", error);
  }
}

// login
export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!email || !password) {
    console.log("Email and password are required");
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    console.log("User not found");
    return;
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    console.log("Invalid password");
    return;
  } else {
    const { id, name } = user!;
    const token = await encrypt({ name, id });
    cookies().set("token", token);
    redirect("/admin");
  }
}
