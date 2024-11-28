"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"


const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
]
const Social = () => {
    return (
        <div className="flex gap-6">
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path}
                        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}
export default Social;