import { login } from "@/actions/login";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25">
      {/* title */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
          Login
        </h2>
        <p>Identify yourself, curious peasant.</p>
      </div>

      {/* horizontal line */}
      <hr className="w-full border-neutral-100 dark:border-neutral-900/25" />

      {/* login form */}
      <form
        className="flex flex-col items-center justify-center gap-3"
        action={login}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-full bg-neutral-100 px-5 py-3 dark:bg-neutral-900/25"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-full bg-neutral-100 px-5 py-3 dark:bg-neutral-900/25"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-red-600 px-5 py-3 text-white"
        >
          Login
        </button>
      </form>

      <div>
        <a href="/" className="hover:text-red-600">
          Home
        </a>
      </div>
    </div>
  );
}
