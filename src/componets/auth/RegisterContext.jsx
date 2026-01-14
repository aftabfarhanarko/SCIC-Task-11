"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, ImagePlus, Globe } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { uploadToImgBB } from "@/lib/uploadToImgBB";
import { postUser } from "@/actions/authJs";
import { toast } from "sonner";

const RegisterContext = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";
  // console.log(params, router);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.photo[0];
    const photo = await uploadToImgBB(image);
    console.log("Image Data:", photo, photo.url);

    try {
      // Call register API
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          photo: photo.url || null,
        }),
      });
      // postUser
      const users = {
        name: data.name,
        email: data.email,
        password: data.password,
        photo: photo.url,
      };
      const resUser = await postUser(users);
      console.log("Get User Post Insert id", resUser);
      if (resUser.insertedId) {
        toast.success("User Created Successfully");
      }

      // res.ok
      if (resUser.insertedId) {
        // Auto login after register
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: true,
          callbackUrl: callback,
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
    reset();
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: callback })
    .then(res => {
      console.log("This is google ", res);
      
    })


  };

  return (
    <div className="min-h-screen flex items-center pt-40 justify-center px-4 py-8">
      <div className="w-full max-w-md bg-slate-900 text-white rounded-2xl ring-1 ring-white/10 shadow-2xl p-8">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold  mb-2">Please Sign Up Now</h1>
          <p className="text-gray-500">Sign Up to continue to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-amber-100 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                placeholder="John Doe"
              />
            </div>
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-100 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-100 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute inset-y-0 left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-100 mb-2">
              Profile Photo
            </label>

            <div className="relative">
              <ImagePlus className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-amber-500 w-5 h-5" />

              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                {...register("photo", {
                  required: "Photo is required",
                  validate: {
                    isImage: (files) =>
                      files && files[0] && files[0].type.startsWith("image/")
                        ? true
                        : "Only image files are allowed",
                  },
                })}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition
      file:mr-4 file:py-2 file:px-3 file:rounded-lg file:border-0
      file:bg-amber-600 file:text-white file:hover:bg-amber-700 file:cursor-pointer"
              />
            </div>

            {errors.photo && (
              <p className="text-red-400 text-sm mt-2">
                {errors.photo.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Sing Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-3 text-sm text-white/60">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 rounded-xl px-6 py-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default RegisterContext;
