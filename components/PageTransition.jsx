
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


// the / means that link back to the root apge in the app directory

const PageTransition = ({children}) => {
    const pathname = usePathname();
    // rerender when url changes, inital state, the transiton 
    // the children will be placed after the transition
    return (
       <AnimatePresence mode="wait">
        <div key={pathname}>

                <motion.div
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                    initial={{opacity: 1 }}
                    animate={{opacity: 0,  transition:{delay:0.15, duration: 0.15, ease: "easeInOut"} }}
                   
                >
                </motion.div>
            {children}
        </div>
       </AnimatePresence>
    )
}

// default export for the module
export default PageTransition;

/*

*/