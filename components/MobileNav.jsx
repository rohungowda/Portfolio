// render on the client side

"use client";

import {Sheet, SheetContent, SheetTrigger, SheetTitle} from '@/components/ui/sheet'
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci"

// navigate component
// the / means that link back to the root apge in the app directory

const navigationLinks = [
    {name: "About", path: "/"},
    {name:"Experience", path:"/experience"},
    {name:"Projects", path:"/projects"},
    {name:"Contact Me", path:"/contact"}
]



const MobileNav= () => {
    { /*Gives me the current path I am in Link triggers a rerender for every page*/ }
    const currentPath = usePathname()
    return (
<Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent'/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
    <SheetTitle className="text-accent">Menu</SheetTitle>
        <nav className='flex flex-col justif-center items-center gep-8'>
        {navigationLinks.map((link,index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === currentPath ? "text-accent border-b-2 border-accent" :
                        `relative inline-block after:content-[''] after:absolute 
                        after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-accent 
                        after:transition-all after:duration-300 hover:after:w-full`
                    }`}>
                        {link.name}
                    </Link>
                )   
            })}


        </nav>
    </SheetContent>
    
</Sheet>
    )
}

// default export for the module
export default MobileNav;