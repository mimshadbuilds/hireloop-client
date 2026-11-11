'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, UserRoundCheck } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { toast } from "sonner";
import { useState } from 'react';

const AuthUser = () => {
    const { data: session, isPending, error } = authClient.useSession()
    const user = session?.user;
    const router = useRouter()
    const [isSigningOut, setIsSigningOut] = useState(false);

    const authLinks = [
        { label: 'Sign In', href: '/signin' },
        {label: 'Get Started', href: '/signup'}
    ]

    const signinstyle = "text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"

    const handleSignOut = async () => {
        setIsSigningOut(true);
        try {
            const { error } = await authClient.signOut();
            if (error) {
                toast.error(error.message || "Sign out failed. Please try again.");
                return;
            }

            toast.success("Signed out successfully.");
            router.replace("/signin");
            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Sign out failed. Please try again.",
            );
        } finally {
            setIsSigningOut(false);
        }
    };
    if(isPending) return null;

    if (error || !user) {
        return (
            <div className="flex items-center gap-4">
                {authLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={signinstyle}>
                        {link.label}
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="relative z-60 flex items-center gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger aria-label="Account menu" className="flex items-center gap-2 rounded-full p-1 transition hover:bg-[#f0f5f0]">
                    <Avatar className="size-8 shrink-0 rounded-full ring-2 ring-[#07883e]/20">
                        <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} className="object-cover" />
                        <AvatarFallback className="bg-[#f0f5f0] text-xs font-semibold">
                            {(user?.name ?? "U").charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <span className="hidden max-w-40 truncate text-sm font-semibold text-[#17251b] sm:block">{user.name}</span>
                    <ChevronDown className="size-4 text-[#69766b]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={8} className="w-64 rounded-2xl border border-[#dce5dd] bg-[#fbfdfb] p-2 shadow-lg">
                    <div className="px-3 py-2">
                        <p className="truncate font-semibold text-[#17251b]">{user?.name}</p>
                        <p className="mt-1 truncate text-sm text-[#69766b]">{user?.email}</p>
                    </div>

                    <DropdownMenuSeparator className="bg-[#e5ebe5]" />

                    <DropdownMenuItem onClick={() => router.push("/profile")} className="mt-1 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#17251b] focus:bg-[#f0f5f0]">
                        <UserRoundCheck size={18} />
                        My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled={isSigningOut} onClick={handleSignOut} className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-red-600 focus:bg-red-50 focus:text-red-700">
                        <span>↪</span>
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};


export default AuthUser;