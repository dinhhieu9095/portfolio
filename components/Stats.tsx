"use client"
import CountUp from "react-countup"

const stats = [
    {
        num: 7,
        text: "Years of experience .NET"
    },
    {
        num: 7,
        text: "Years of experience SQL"
    },
    {
        num: 4,
        text: "Years of experience ReactJS"
    },
    {
        num: 3,
        text: "Years of experience AngularJS"
    },
]
export const Stats = () => {
    return (
        <section className="bg-[hsla(60,10%,96.08%,1)]">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                                <CountUp 
                                    end={item.num}
                                    duration={2}
                                    delay={1}
                                    className="text-4xl xl:text-8xl font-medium text-accent"
                                />
                                <p 
                                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black/80`}>
                                    {item.text}
                                    </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
