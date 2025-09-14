"use client";

import { login } from "@/actions/login";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const toastId = toast.loading("Logging in...");

    const formData = new FormData(event.currentTarget);

    if (Array.from(formData.values()).some((value) => !value)) {
      toast.update(toastId, {
        render: "Please fill in all fields.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });

      return;
    }

    const email = formData.get("email") as string;
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email)) {
      toast.update(toastId, {
        render: "Please enter a valid email address.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });

      return;
    }

    try {
      const { success, message } = await login(formData);
      console.error(message);
      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      success && router.push("/admin");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.update(toastId, {
        render: "Error logging in.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex w-fit flex-col items-center justify-center gap-5 rounded-md border border-background-contrast p-10">
      {/* title */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-medium text-primary">Login</h1>
        <p>Identify yourself, curious peasant.</p>
      </div>

      {/* horizontal line */}
      <div className="divider"></div>

      {/* login form */}
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit}
      >
        {/* email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form--input"
        />

        {/* password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form--input"
        />

        {/* submit */}
        <button type="submit" className="button button--solid">
          Login
        </button>
      </form>

      <Link
        href="/"
        className="transition-colors duration-500 hover:text-accent"
      >
        Home
      </Link>
    </div>
  );
}
