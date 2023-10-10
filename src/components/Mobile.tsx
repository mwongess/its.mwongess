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
import { FaHamburger } from 'react-icons/fa'



export function Mobile() {
    return (
            <Sheet>
                <SheetTrigger asChild>
                    <p className='block sm:hidden text-3xl'>
                        <FaHamburger />
                    </p>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">

                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
    )
}
