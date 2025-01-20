import Link from "next/link";

// navigate component
import Navigate from "@/components/Navigate";
// the / means that link back to the root apge in the app directory

const Header = () => {
    return (
        <header className="py-4 xl:py-4 text-white border-b">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-2xl font-semibold">
                    Rohun Gowda
                </h1>
                </Link>
            <div className="items-center px-4">
                <Navigate/>
            </div>
            </div>

        </header>

    )
}

// default export for the module
export default Header;