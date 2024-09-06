import { login } from "@/actions/actions";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 rounded-xl border border-red-600 bg-neutral-50 p-10">
        <div>
          <h2 className="text-2xl font-bold">Login</h2>
          <p>Identify yourself, curious peasant.</p>
        </div>

        <hr className="w-full border-neutral-900" />

        {/* login form */}
        <form
          className="flex flex-col items-center justify-center gap-3"
          action={login}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded-full bg-neutral-50 px-5 py-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-full bg-neutral-50 px-5 py-3"
          />

          <button className="w-full rounded-full bg-red-600 px-5 py-3 font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
