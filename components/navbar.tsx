// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar({}): any {
    return (
        <nav className="w-full bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link href="/">
                <Image alt="logo" className="cursor-pointer w-40" src="/images/fc_logo.png" height={100} width={170} />
            </Link>
            <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
                <Button variant="ghost" className="font-semibold text-md">
                    <Link href="/">Home</Link>
                </Button>
                <Link href="/about">
                    <Button variant="ghost" className="font-semibold text-md">
                        About
                    </Button>
                </Link>
                <Link href="/privacy-policy">
                    <Button variant="ghost" className="font-semibold text-md">
                        Privacy Policy
                    </Button>
                </Link>
            </div>
            {/* MOBILE NAV */}
            <Sheet>
                <SheetTrigger className="block md:hidden p-3">
                    <span className="text-2xl text-slate-950 dark:text-slate-200">
                        <LuMenu />
                    </span>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="w-full space-y-3">
                                <Link href="/">
                                    <Button variant="link" className="font-semibold text-md w-full">
                                        Home
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button variant="link" className="font-semibold text-md w-full">
                                        About
                                    </Button>
                                </Link>
                                <Link href="/privacy-policy">
                                    <Button variant="link" className="font-semibold text-md w-full">
                                        Privacy Policy
                                    </Button>
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
