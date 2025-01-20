import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const socials = [
    {icon: <FaGithub/>, path:'https://github.com/rohungowda'},
    {icon: <FaLinkedin/>, path:'https://www.linkedin.com/in/rohun-gowda-b5291317a/'},
    ]


const Socials = () => {
    
    return (<div className="flex gap-6">
        {socials.map((item,index) =>{
        return (<Link key={index} href={item.path} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border rounded-full flex justify-center items-center bg-slate-900">
            {item.icon}
            </Link>);
        })}
    </div>
    );
}

export default Socials;

/*






*/