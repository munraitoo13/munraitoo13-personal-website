"use client";

import { login } from "@/actions/login";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create formdata
    const formData = new FormData(event.currentTarget);

    // check if all fields are filled
    if (Array.from(formData.values()).some((value) => value === "")) {
      toast.error("Please fill all fields.");
      return;
    }

    // login
    try {
      toast.loading("Logging in...");
      const loginResult = await login(formData);
      toast.dismiss();

      loginResult?.error
        ? toast.error(loginResult.error)
        : toast.success("Logged in.");
    } catch (error) {
      toast.error("Error logging in.");
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
