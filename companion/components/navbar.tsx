"use client";
import { Menu, Sparkles, User } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-toggle";
const font = Poppins({
    weight : "600",
    subsets : ["latin"]

});
export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4  border-b border-primary/10 bg-secondary h-16">
            <div className = "flex items-center">
                <Menu className="md:hidden"/>
                <Link href="/">
                <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                )}>
                    Companion 
                </h1>
                </Link>

            </div>
            <div className="flex items-center gap-x-3">
                <Button size="sm">
                    Upgrade 
                    <Sparkles />
                </Button>
                <ModeToggle />
                <UserButton />
                </div> 
        </div>
    )
}