import { login } from "@/actions/login";

export default function Login() {
  return (
    <div className="bg-neutral-50 flex flex-col items-center justify-center gap-10 rounded-xl p-10 shadow-md">
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
        <a href="/" className="">
          Home
        </a>
      </div>
    </div>
  );
}
