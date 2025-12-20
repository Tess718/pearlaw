import InfoGrid from "../InfoGrid";
import Image from "next/image";
import GradientCTA from "../GradientCTA";
import { VALUE_ITEMS } from "@/app/constants";
import VerticalLine from "../VerticalLine";

export default function Values(){
    return (
        <section className="lg:pt-[120px] pt-[80px]">
            <h3 className="font-semibold lg:text-[16px] text-[14px] leading-[18px] tracking-[0%] text-center uppercase align-middle text-[#2B2B2B99] lg:pb-[24px] pb-[20px]">our values</h3>

            <h1 className="font-semibold lg:text-[32px] text-[28px] lg:leading-[36px] leading-[34px] tracking-[0%] text-center text-[#2B2B2B] lg:pb-[60px] pb-[24px]">Areas of Expertise</h1>

            <div className="block md:hidden px-4 mb-[80px]">
                <VerticalLine />
                <div className="flex flex-col gap-[48px]">
                    {VALUE_ITEMS.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-[16px]">
                            <Image 
                                src={item.image}
                                alt={item.alt}
                                width={48}
                                height={48}
                            />
                            <h3 className="font-semibold text-[18px] leading-[24px] uppercase text-center text-[#2B2B2B]">
                                {item.title}
                            </h3>
                            <p className="font-normal text-[16px] leading-[24px] text-center text-[#2B2B2BCC]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

           <div className="hidden md:block">
                <InfoGrid items={VALUE_ITEMS} className="legacy py-[80px] px-16 mb-[80px]" />
            </div> 

            
            




           <GradientCTA 
                subtitle="READY TO GET STARTED?"
                title={<>Let’s discuss how Pearlaw Corporate can drive your <br/> business forward.</>}
                buttonText="Book Consultation"
                buttonLink="/contact"
                buttonClassName="lg:w-[416px] w-fit max-sm:text-[12px]"
                secondaryButtonText="Contact Us"
                secondaryButtonClassName="lg:w-[167px] w-fit max-sm:text-[12px]"
                secondaryButtonLink="/contact"
           />
        </section>
    )
}