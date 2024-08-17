import { login } from "@/app/lib/auth/auth";
import { redirect } from "next/navigation";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-1/2 min-h-64 flex-col items-center justify-center rounded-xl border border-red-600 bg-neutral-950 px-10">
        <h2 className="text-2xl font-bold">Login</h2>

        {/* login form */}
        <form
          className="mt-5 flex flex-col items-center justify-center gap-3"
          action={async (formData) => {
            "use server";
            await login(formData);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-full px-5 py-2 text-center"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-full px-5 py-2 text-center"
          />

          <button className="rounded-full bg-red-600 px-5 py-2 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
