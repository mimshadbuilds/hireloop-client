"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

interface IAuthFormProps {
    mode: "signin" | "signup";
}

const AuthForm = ({ mode }: IAuthFormProps) => {
    const router = useRouter();
    const isSignIn = mode === "signin";
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        setIsSubmitting(true);
        try {
            if (mode === "signup") {
                const { error } = await authClient.signUp.email({
                    name: String(formData.get("fullName") ?? ""),
                    email,
                    password,
                });

                if (error) {
                    toast.error(error.message || "Sign up failed. Try again.");
                    return;
                }

                toast.success("Account created successfully!");
                router.replace("/");
            } else {
                const { error } = await authClient.signIn.email({
                    email,
                    password,
                });

                if (error) {
                    toast.error(error.message || "Sign In failed! Try again later.");
                    return;
                }

                toast.success("Sign In was Successful!");
                router.push("/");
            }
        } catch (error) {
            toast.error("Authentication failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleSignIn = () => {
        console.log("Google authentication clicked");
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,#17142f_0%,#08080c_48%,#050505_100%)] px-4 py-10 text-white">
            <div className="w-full max-w-[552px]">
                <div className="rounded-[24px] border border-white/10 bg-[#101010] px-6 py-10 shadow-2xl sm:px-10 sm:py-11">
                    <div className="mx-auto flex w-fit items-center text-[23px] font-bold tracking-tight">
                        <span className="text-blue-500">hire</span>
                        <span className="text-blue-500">●</span>
                        <span className="text-orange-500">loop</span>
                    </div>

                    <div className="mx-auto mt-8 flex w-fit items-center rounded-full bg-[#1d1d1d] p-1">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => router.push("/signin")}
                            className={`h-[46px] rounded-full px-7 text-base hover:bg-white/10 hover:text-white ${
                                isSignIn
                                    ? "bg-white text-black hover:bg-white hover:text-black"
                                    : "text-gray-400"
                            }`}>
                          Sign in
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => router.push("/signup")}
                            className={`h-[46px] rounded-full px-7 text-base hover:bg-white/10 hover:text-white ${
                                !isSignIn
                                    ? "bg-white text-black hover:bg-white hover:text-black"
                                    : "text-gray-400"
                            }`}>
                          Sign up
                        </Button>
                    </div>

                    <div className="mt-8 text-center">
                        <h1 className="text-2xl font-bold tracking-tight sm:text-[28px]">
                            {isSignIn ? "Welcome back" : "Create your account"}
                        </h1>

                        <p className="mt-3 text-base text-gray-400">
                            {isSignIn
                                ? "Sign in to continue to HireLoop."
                                : "Join HireLoop and find your next opportunity."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-7 space-y-6">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleGoogleSignIn}
                            className="h-[55px] w-full border-white/10 bg-[#1a1a1a] text-base font-medium text-white hover:bg-[#252525] hover:text-white">
                            <svg
                                viewBox="0 0 48 48"
                                className="size-5"
                                aria-hidden="true">
                                <path
                                    fill="#4285F4"
                                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.5H5.8v5.2A20 20 0 0 0 24 44Z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M12.6 27.5a12 12 0 0 1 0-7V15.3H5.8a20 20 0 0 0 0 17.4l6.8-5.2Z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M24 12c3 0 5.6 1 7.7 3l5.8-5.8C34 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15.3l6.8 5.2C14.2 15.6 18.7 12 24 12Z"
                                />
                            </svg>
                            Continue with Google
                        </Button>

                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/15" />
                            <span className="shrink-0 text-sm text-gray-400">
                                or continue with email
                            </span>
                            <div className="h-px flex-1 bg-white/15" />
                        </div>

                        {isSignIn ? (
                            <>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm text-gray-200">
                                        Email Address
                                    </Label>

                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        autoComplete="email"
                                        required
                                        className="h-[55px] rounded-xl border-white/10 bg-[#1a1a1a] px-4 text-white placeholder:text-gray-500 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <Label htmlFor="password" className="text-sm text-gray-200">
                                            Password
                                        </Label>

                                        <Link
                                            href="/forgot-password"
                                            className="text-sm text-indigo-400 transition hover:text-indigo-300"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="h-[55px] rounded-xl border-white/10 bg-[#1a1a1a] px-4 text-white focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <Label htmlFor="fullName" className="text-sm text-gray-200">
                                        Full Name
                                    </Label>

                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        autoComplete="name"
                                        required
                                        className="h-[55px] rounded-xl border-white/10 bg-[#1a1a1a] px-4 text-white placeholder:text-gray-500 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm text-gray-200">
                                        Email Address
                                    </Label>

                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        autoComplete="email"
                                        required
                                        className="h-[55px] rounded-xl border-white/10 bg-[#1a1a1a] px-4 text-white placeholder:text-gray-500 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm text-gray-200">
                                        Password
                                    </Label>

                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Create a password"
                                        autoComplete="new-password"
                                        minLength={8}
                                        required
                                        className="h-[55px] rounded-xl border-white/10 bg-[#1a1a1a] px-4 text-white placeholder:text-gray-500 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
                                    />
                                </div>
                            </>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-[54px] w-full rounded-xl bg-indigo-600 text-base font-semibold text-white hover:bg-indigo-500">
                            {isSubmitting
                                ? "Please wait..."
                                : isSignIn
                                  ? "Sign in"
                                  : "Create account"}
                        </Button>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-400">
                        {isSignIn
                            ? "Don't have an account?"
                            : "Already have an account?"}{" "}
                        <Link
                            href={isSignIn ? "/signup" : "/signin"}
                            className="font-medium text-indigo-400 underline underline-offset-4 transition hover:text-indigo-300">
                            {isSignIn ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                </div>

                <p className="mt-5 px-2 text-center text-xs leading-6 text-gray-500">
                    By continuing, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-gray-300">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-gray-300">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </main>
    );
};

export default AuthForm;
