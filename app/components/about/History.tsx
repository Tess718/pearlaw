import { CalendarDays } from "lucide-react";
import GradientCTA from "../GradientCTA";
import InfoGrid from "../InfoGrid";
import { HISTORY_ITEMS } from "@/app/constants";
import Image from "next/image";

export default function History() {
    return (
        <section className="">
            <div className="max-sm:py-[40px] max-sm:px-4 max-sm:container max-sm:mx-auto max-sm:bg-[#e8e8eb] max-sm:my-[80px]">
                <h3 className="font-semibold lg:text-[16px] lg:leading-[18px] text-[14px] tracking-[0%] text-center uppercase align-middle lg:text-[#2B2B2B99] text-[#2B2B2B]">Our history</h3>

                <h1 className="font-semibold lg:text-[32px] lg:leading-[36px] text-[18px] tracking-[0%] text-center lg:text-[#2B2B2B] text-[#2B2B2BCC] lg:pb-[60px] lg:pt-[24px] pt-[18px] pb-[24px]">A legacy of excellence spanning over two decades</h1>

                <div className="hidden md:block">
                    <InfoGrid items={HISTORY_ITEMS} className="legacy p-[80px] mb-[120px]" />
                </div>

                <div className="block md:hidden">
                    <div className="flex flex-col gap-[32px]">
                        <div className="grid grid-cols-12 items-stretch">
                            <div className="col-span-1">
                                <Image
                                    src={'/Group874.png'}
                                    alt="group"
                                    width={10}
                                    height={10}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="col-span-11">
                                <div className="bg-[#FFFFFFCC] py-[16px] px-[14px] rounded-[6px] border-[0.5px] border-[#9695954D]">
                                
                                <div className="flex gap-1 text-[#C84E26] items-center">
                                    <CalendarDays size={14} />
                                    <h4 className="font-semibold text-[14px]">2025</h4>
                                </div>
                                <h2 className="text-[14px] font-medium text-[#2B2B2B] py-[14px]">Pearlaw Founded</h2>
                                <p className="text-[12px] font-regular text-[#2B2B2B]">Established with a vision to provide exceptional legal services to our community.</p>
                                

                                </div>
                            </div>
                            
                        </div>
                        <div className="grid grid-cols-12 items-stretch">
                            <div className="col-span-1">
                                <Image
                                    src={'/Group874.png'}
                                    alt="group"
                                    width={10}
                                    height={10}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="col-span-11">
                                <div className="bg-[#FFFFFFCC] py-[16px] px-[14px] rounded-[6px] border-[0.5px] border-[#9695954D]">
                                
                                <div className="flex gap-1 text-[#C84E26] items-center">
                                    <CalendarDays size={14} />
                                    <h4 className="font-semibold text-[14px]">2025</h4>
                                </div>
                                <h2 className="text-[14px] font-medium text-[#2B2B2B] py-[14px]">Expansion & Growth</h2>
                                <p className="text-[12px] font-regular text-[#2B2B2B]">Expanded to a team of 15 attorneys and opened our second office location.</p>
                                

                                </div>
                            </div>
                            
                        </div>
                        <div className="grid grid-cols-12 items-stretch">
                            <div className="col-span-1">
                                <Image
                                    src={'/Group874.png'}
                                    alt="group"
                                    width={10}
                                    height={10}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="col-span-11">
                                <div className="bg-[#FFFFFFCC] py-[16px] px-[14px] rounded-[6px] border-[0.5px] border-[#9695954D]">
                                
                                <div className="flex gap-1 text-[#C84E26] items-center">
                                    <CalendarDays size={14} />
                                    <h4 className="font-semibold text-[14px]">2025</h4>
                                </div>
                                <h2 className="text-[14px] font-medium text-[#2B2B2B] py-[14px]">Recognition of Excellence</h2>
                                <p className="text-[12px] font-regular text-[#2B2B2B]">Received multiple industry awards and recognition for outstanding legal representation.</p>
                                

                                </div>
                            </div>
                            
                        </div>
                        <div className="grid grid-cols-12 items-stretch">
                            <div className="col-span-1">
                                <Image
                                    src={'/Group874.png'}
                                    alt="group"
                                    width={10}
                                    height={10}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="col-span-11">
                                <div className="bg-[#FFFFFFCC] py-[16px] px-[14px] rounded-[6px] border-[0.5px] border-[#9695954D]">
                                
                                <div className="flex gap-1 text-[#C84E26] items-center">
                                    <CalendarDays size={14} />
                                    <h4 className="font-semibold text-[14px]">2025</h4>
                                </div>
                                <h2 className="text-[14px] font-medium text-[#2B2B2B] py-[14px]">Technology Innovation</h2>
                                <p className="text-[12px] font-regular text-[#2B2B2B]">Pioneered digital client services and modern case management systems.</p>
                                

                                </div>
                            </div>
                            
                        </div>
                        <div className="grid grid-cols-12 items-stretch">
                            <div className="col-span-1">
                                <Image
                                    src={'/Group874.png'}
                                    alt="group"
                                    width={10}
                                    height={10}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="col-span-11">
                                <div className="bg-[#FFFFFFCC] py-[16px] px-[14px] rounded-[6px] border-[0.5px] border-[#9695954D]">
                                
                                <div className="flex gap-1 text-[#C84E26] items-center">
                                    <CalendarDays size={14} />
                                    <h4 className="font-semibold text-[14px]">2025</h4>
                                </div>
                                <h2 className="text-[14px] font-medium text-[#2B2B2B] py-[14px]">Continued Leadership</h2>
                                <p className="text-[12px] font-regular text-[#2B2B2B]">Now serving over 5,000 clients with a team of 40+ legal professionals.</p>
                                

                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>




            <GradientCTA 
                subtitle="REady to get started?"
                title={<>Schedule a consultation with our experienced legal <br/> team today. Take a step to solve your legal matters <br/> with confidence.</>}
                buttonText="Book Consultation"
                buttonClassName="w-[600px]"
                buttonLink="/contact"  
            />
        </section>
    )
}