"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { FaHamburger } from 'react-icons/fa'



export function Mobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <p className='block sm:hidden text-3xl'>
                    <FaHamburger />
                </p>
            </SheetTrigger>
            <SheetContent side={"left"} className='bg-black'>
                <div className='header-links flex flex-col  gap-8 font-bold text-sm'>
                    <SheetClose asChild>
                        <Link href="/#home">HOME</Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link href="/#experience">EXPERIENCE</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#about">ABOUT</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#skills">SKILLS</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#projects">PROJECTS</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/#contact">CONTACT</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="">CV</Link>
                    </SheetClose>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
