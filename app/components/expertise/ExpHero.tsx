import Image from "next/image"

export default function ExpHero() {
    return (
        <section className="mb-[60px]">
            <div className="bg-expertise md:h-[276px] h-[217px] flex flex-col md:justify-center md:items-center max-sm:pt-[24px] items-center md:gap-[28px] gap-[24px] relative max-sm:px-4 max-sm:container max-sm:mx-auto">
                <h3 className="font-bold lg:text-[20px] text-[14px] leading-[20px] tracking-[0%] text-center uppercase text-[#C84E26]">Our expertise</h3>
                <h1 className="font-semibold lg:text-[24px] text-[16px] lg:leading-[34px] leading-[24px] tracking-[0%] text-center text-[#FEFEFE]">Pearlaw provides focused legal solutions tailored to Nigerian businesses, <br/> combing deep industry knowledge with practical, results-driven counsel.</h1>

                
                <Image 
                 src="/Vectorline.png"
                 alt="Vectorline"
                 width={15}
                 height={15}
                 className="absolute right-0 left-0 bottom-3 w-full hidden md:block"
                 />

                <Image 
                 src="/Group 877.png"
                 alt="Vectorline"
                 width={15}
                 height={15}
                 className="absolute right-0 left-0 bottom-5 w-full block md:hidden"
                 />

            </div>
        </section>
    )
}