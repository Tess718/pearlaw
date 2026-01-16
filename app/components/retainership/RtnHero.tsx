import Image from "next/image"

export default function RtnHero() {
    return (
        <section className="mb-[60px]">
            <div className="bg-rtn md:h-[276px] h-[215px] flex flex-col justify-center items-center gap-[28px] relative">
                <h3 className="text-subtitle-2 text-center text-[#C84E26]">Retainership plans</h3>
                <h1 className="text-heading-4-semibold text-center text-[#FEFEFE]">Choose a plan that fits your business need. Get ongoing legal support with <br/> predictable costs and priority access to our expertise.</h1>

                
                <Image 
                 src="/Vectorline.png"
                 alt="Vectorline"
                 width={1200}
                 height={15}
                 className="absolute right-0 left-0 bottom-3 w-full hidden lg:block"
                 />

            </div>
        </section>
    )
}