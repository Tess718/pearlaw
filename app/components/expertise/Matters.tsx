
import Image from "next/image";
import GradientCTA from "../GradientCTA";
import InfoGrid from "../InfoGrid";
import { MATTERS_ITEMS } from "@/app/constants";

export default function Matters() {
    return (
        <section>
            <div className="hidden lg:block">
                <div className="bg-matters py-[80px] mb-[120px]">
                    <div className="px-4 mx-auto container">
                        <h3 className="text-subtitle-1 text-center text-[#C84E26]">why our expertise matters</h3>
                        <h1 className="text-heading-2 text-center text-[#FEFEFE] mb-[106px]">How Our Expertise makes a difference</h1>

                        <InfoGrid items={MATTERS_ITEMS} />
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                 <div className="mb-[40px]">
                    <h3 className="text-subtitle-1 text-center text-[#C84E26]">why our expertise matters</h3>
                    <h1 className="text-heading-2 text-center text-[#2B2B2B] mt-2">How Our Expertise makes a difference</h1>
                 </div>
                 
                 <div className="flex flex-col gap-[40px] mb-[40px]">
                    {MATTERS_ITEMS.map((item, index) => (
                        <div key={index} className="bg-matters p-[40px] flex flex-col items-center justify-center text-center">
                            <Image 
                                src={item.image}
                                alt={item.alt}
                                width={48}
                                height={48}
                                className="mb-6"
                            />
                             <h3 className="font-semibold text-[16px] leading-[24px] uppercase text-[#FEFEFECC] mb-4">
                                {item.title}
                            </h3>
                            <p className="font-normal text-[16px] leading-[24px] text-[#FEFEFE]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                 </div>

                 <Image
                  src="/f4a3a10015d419986cdd80da18aef8e0598cd9e9.webp"
                  width={300}
                  height={220}
                  alt="expertise"
                  className="w-full mb-[120px]"
                 />
            </div>


            <GradientCTA 
                subtitle="READY TO GET STARTED?"
                title={<>Whether you’re looking for ongoing legal support <br className="hidden md:block" /> through our retainership plans or need a guidance <br className="hidden md:block" /> on a specific matter, we’re here to help.</>}
                buttonText="Book Consultation"
                buttonLink="/contact"
                buttonClassName="w-[343px] md:w-[600px]"
                secondaryButtonText="Retainership Plans"
                secondaryButtonLink="/retainership"
                secondaryButtonClassName="w-[343px] md:w-[600px] border-[#FFFFFF33] text-[#FEFEFE]"
                buttonsContainerClassName="flex-col"
            />
        </section>
    )
}