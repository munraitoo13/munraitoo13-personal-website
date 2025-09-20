"use client";

import { login } from "@/actions/login";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Logging in...");

    try {
      const { success, message } = await login(data);
      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      success ? router.push("/admin") : console.error(message);
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
    <div className="flex w-fit flex-col justify-center gap-5 rounded-md border border-background-contrast p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-medium text-primary">Login</h1>
        <p>Identify yourself.</p>
      </div>

      <div className="divider"></div>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          className="form--input"
        />
        {errors.email && (
          <p className="-mt-2 text-accent">{errors.email.message}</p>
        )}

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="form--input"
        />
        {errors.password && (
          <p className="-mt-2 text-accent">Enter your password.</p>
        )}

        <button type="submit" className="button button--solid mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
