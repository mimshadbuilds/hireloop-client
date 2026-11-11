import AuthForm from "@/components/auth/auth-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | HireLoop",
  description: "Sign in to your HireLoop account.",
};

const SignInPage = () => {
    return <AuthForm mode="signin" />;
};

export default SignInPage;
