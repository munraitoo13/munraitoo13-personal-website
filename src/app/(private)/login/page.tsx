"use client";

import { login } from "@/actions/login";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";
import { Input } from "@/components/common/Input";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const router = useRouter();

  const onSubmit = async (data: LoginData) => {
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
    <div className="my-auto flex flex-col gap-4 rounded-xl border border-background-contrast p-10">
      <div className="space-y-2">
        <h1 className="text-5xl font-medium text-primary">Login</h1>
        <p>Identify yourself.</p>
      </div>

      <Divider />

      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />

        <Input
          {...register("password", {
            required: "Password is required",
          })}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />

        <Button fullWidth type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
