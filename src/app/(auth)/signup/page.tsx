import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign up | HireLoop",
  description: "Create your HireLoop account.",
};


const SignUpPage = () => {
  return <AuthForm mode="signup" />;
};

export default SignUpPage;

