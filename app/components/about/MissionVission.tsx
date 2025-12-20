import Image from "next/image";
import { Eye } from "lucide-react";

export default function MissionVission() {
    return (
        <section className="lg:container lg:px-4 lg:mx-auto mt-[80px] lg:pb-[120px] pb-[40px] max-sm:bg-[#e8e8eb]">
            <h3 className="text-[14px] font-semibold text-[#2B2B2B] pt-[40px] pb-[28px] text-center uppercase leading-[24px]">Our Mission & Vision</h3>
            <div className="flex flex-col gap-[24px]">
                <div className="lg:py-[60px] py-[34px] px-[34px] lg:px-[80px] lg:bg-white lg:shadow-[0px_4px_12px_0px_#0000001A] bg-mv">
                    <Image
                    src="/icon-park-outline_round-caliper.png"
                    alt=""
                    width={58.33}
                    height={58.33}
                    className="mx-auto"
                    />

                    <h2 className="font-bold text-[16px] leading-[22px] tracking-[0%] text-center lg:text-[#2B2B2B] text-[#FEFEFE] lg:pt-[28] lg:pb-[40px] py-[18px]">OUR MISSION</h2>

                    <p className="font-medium lg:text-[20px] text-[16px] lg:leading-[38px] leading-[28px] tracking-[0%] lg:text-center text-start  lg:text-[#2B2B2BCC] text-[#FEFEFECC]">To provide exceptional legal services with unwavering integrity, advocating fiercely for our clients while maintaining the highest ethical standards. We strive to deliver practical solutions that protect our client’s interests and advance their goals.</p>
                </div>

                <div className="lg:py-[60px] py-[34px] px-[34px] lg:px-[80px] lg:bg-white lg:shadow-[0px_4px_12px_0px_#0000001A] bg-mv">

                   <Eye className="mx-auto " stroke="#C84E26" strokeWidth={1.5} size={58.33} />

                    <h2 className="font-bold text-[16px] leading-[22px] tracking-[0%] text-center lg:text-[#2B2B2B] text-[#FEFEFE] lg:pt-[28] lg:pb-[40px] py-[18px]">OUR VISION</h2>

                    <p className="font-medium lg:text-[20px] text-[16px] lg:leading-[38px] leading-[28px] tracking-[0%] lg:text-center text-start  lg:text-[#2B2B2BCC] text-[#FEFEFECC]">To be recognized as the most trusted and innovative law firm, setting the standard for legal excellence and client service. We envision a future where justice is accessible, and every client receives personalized attention that leads to meaningful results.</p>
                </div>
                
            </div>
        </section>
    )
}