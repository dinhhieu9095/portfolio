"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Avatar } from "./ui/avatar"

export const Photo = () => {
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, 
                    transition: { delay: 2, duration: 0.4, ease: "linear" } 
                    }}
                className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                    <Image src="/assests/avatar.jpg" priority quality={100} fill alt="" className="object-contain rounded-full"
                    />
                </motion.div>
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
                    viewBox={"0 0 506 506"} xmlns={"http://www.w3.org/2000/svg"}>
                    <motion.circle
                        cx={248}
                        cy={248}
                        r={247}
                        stroke={"#00ff99"}
                        strokeWidth={5}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{ strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [360]
                         }}
                         transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                         }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}