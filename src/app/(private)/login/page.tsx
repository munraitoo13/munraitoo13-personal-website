import { login } from "@/actions/login";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 rounded-xl bg-neutral-50/50 p-10 shadow-md dark:bg-neutral-900/25">
      {/* title */}
      <div className="flex flex-col">
        <h1 className="h1">Login</h1>
        <p>Identify yourself, curious peasant.</p>
      </div>

      {/* horizontal line */}
      <div className="divider w-full"></div>

      {/* login form */}
      <form
        className="flex flex-col items-center justify-center gap-3"
        action={login}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input !rounded-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input !rounded-full"
        />

        <button type="submit" className="button">
          Login
        </button>
      </form>

      <div>
        <a href="/" className="hover:text-red-500">
          Home
        </a>
      </div>
    </div>
  );
}
