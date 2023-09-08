"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {FaHamburger, FaHome } from "react-icons/fa"
import Link from "next/link"

const Hamburger = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <p className="text-xl">
                    <FaHamburger />
                </p>
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>mwongess!</SheetTitle>
                <div className="grid gap-4 py-4">
                    <SheetClose asChild>
                        <Link className="flex items-center gap-2" href="/"><FaHome /> Home</Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Hamburger