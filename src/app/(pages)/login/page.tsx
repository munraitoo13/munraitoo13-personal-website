export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-900 p-10">
        <h2 className="text-2xl font-bold">Login</h2>

        {/* login form */}
        <form className="mt-5 flex flex-col items-center justify-center gap-3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded-full px-5 py-2 text-center"
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="rounded-full px-5 py-2 text-center"
          />

          <button className="w-full rounded-full bg-red-600 px-5 py-2 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
