// render on the client side

"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

// navigate component
// the / means that link back to the root apge in the app directory

const navigationLinks = [
    {name: "About", path: "/"},
    {name:"Experience", path:"/experience"},
    {name:"Projects", path:"/projects"},
    {name:"Contact Me", path:"/contact"}
]

const Navigate = () => {
    { /*Gives me the current path I am in Link triggers a rerender for every page*/ }
    const currentPath = usePathname()
    return (
        <nav className="flex gap-8">
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
    )
}

// default export for the module
export default Navigate;