import Image from "next/image"
interface Section {
    image: string;
    name: string;
    description: string;
    isRound?: boolean;
    title?: string;
}

interface DataItem {
    image: string;
    title: string;
    sections: Section[];
}

type ResumeProps = {
    data: DataItem[];
};
export default function Section({
    data
}: ResumeProps) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <>
                        <section className="min-h-[66vh]" key={`header-ab-${index}`}>
                            <div className={`relative bg-fixed bg-center bg-no-repeat bg-cover object-cover min-h-[66vh] flex justify-center items-center`}
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}>
                                <div className="bg-black absolute top-0 right-0 bottom-0 left-0 opacity-45"></div>
                                <div className={`absolute font-bold leading-none xl:text-5xl text-2xl text-white `}
                                >
                                    <span className="prefade tracking-[0.4em]">{item.title}</span>
                                </div>
                            </div>
                        </section>
                        {item.sections.map((section, i) => {
                            return (
                                <section className={`min-h-[66vh] max-h-screen py-24 ${i % 2 == 1 ? 'bg-even' : 'bg-white'}`} key={`section-ab-${index}-${i}`}>
                                    <div className="relative flex flex-col items-start gap-8 xl:grid xl:grid-cols-12 xl:grid-rows-12 container xl:gap-x-4 xl:gap-y-2">
                                        <div className="col-start-1 col-end-4 row-span-full flex flex-row items-center justify-center box-content gap-8">
                                            < Image src={section.image} priority quality={100} objectFit="cover" layout="fill" alt="" 
                                                className={`${section.isRound? '!w-[80%] !h-[80%] !rounded-full': '!w-[100%] !h-[80%] !rounded-xl'} !relative`}
                                            />
                                        </div>
                                        {/* Details */}
                                        <div className={`col-start-5 col-end-12 row-span-full items-start  justify-start`}>
                                            <h2 className="h2 !text-[38px] font-light prefade">{section.name} {section.title && <span className="text-lg"> - .NET</span>}</h2>
                                        </div>
                                        <div className={`col-start-5 col-end-13 row-start-3 row-span-full flex-col justify-start items-start`}>
                                            <span className="!text-[1.2rem] text-3xl font-light prefade">
                                                {section.description}
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            )
                        })}

                    </>

                )
            })}
        </>
    )
}