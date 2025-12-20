import Image from "next/image";

export default function DTHero() {
    return (
        <section>
            <div className="hidden md:block">
                <div className="bg-blog h-[276px] flex flex-col justify-center items-center gap-3">
                    <h1 className="font-bold text-[36px] leading-[40px] tracking-[0%] text-center capitalize text-[#FEFEFE]">Meet the Team</h1>
                    <p className="font-bold text-[20px] leading-[24px] tracking-[0%] text-center uppercase text-[#FEFEFECC]">meet with the attorneys</p>
                </div>
            </div>


            <div className="max-sm:container max-sm:mx-auto max-sm:px-4 pt-[28px]">
            <div className="block md:hidden ">
                <h3 className="text-14px font-semibold leading-[20px] uppercase text-[#2B2B2BCC] text-center pb-[18px]">Meet the Team</h3>

                <p className="text-[16px] font-semibold leading-[22px] text-[#2B2B2B] text-center">Dedicated to excellence and client sucess, our experienced team brings decades of legal expertise to every case we handle.</p>
            </div>
                <div className="flex lg:flex-row flex-col justify-center items-stretch lg:gap-[60px] gap-[18px] lg:py-[80px] pt-[60px]">
                    
                    <div className="lg:w-[629px] w-full max-sm:h-[280px] relative">
                        <Image 
                        src="/2022be138f315cfae4b2a6cb4ed0d6fc70d77d3a.png"
                        alt=""
                        fill 
                        className="object-cover"/>

                    </div>

                    <div className="lg:w-[343px]">
                        <div className='w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] mb-4 hidden md:block'/>

                        <h3 className="font-bold lg:text-[24px] lg:leading-[28px] text-[18px] leading-[24px] tracking-[0%] capitalize text-[#2B2B2B] pt-[18px]">Pearl Eghimentor</h3>

                        <p className="font-medium lg:text-[18px] lg:leading-[24px] text-[14px] leading-[16px] tracking-[0%] capitalize text-[#C84E26] pt-[18px]">Team Lead</p>

                        <h3 className="font-medium lg:text-[18px] leading-[18px] text-[16px] tracking-[0%] text-[#2B2B2B] pt-[18px]">Credentials</h3>

                        <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#2B2B2BB2] pt-[18px]">LLB, BL, Memeber Nigerian Bar <br/> Association</p>

                        <h3 className="font-medium text-[18px] leading-[18px] tracking-[0%] text-[#2B2B2B] pt-[18px]">Education</h3>

                        <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#2B2B2BB2] pt-[18px]">University of Lagos, Nigerian Law <br/> School</p>

                        <h3 className="font-medium text-[18px] leading-[18px] tracking-[0%] text-[#2B2B2B] pt-[18px]">Specialties</h3>

                        <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#2B2B2BB2] pt-[18px]">Corporate Law, Contract <br/> Negotiation, Litigation</p>

                        <h3 className="font-medium text-[18px] leading-[18px] tracking-[0%] text-[#2B2B2B] pt-[18px]">About</h3>

                        <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#2B2B2BB2] pt-[18px]">With over 15 years of experience in <br/> corporate law and litigation, Pearl leads our team with unwavering dedication to client success. Her strategic approach and attention to detail have earned her recognition as one of the top legal minds in the region.</p>
                    </div>
                    
                </div>    
            </div>
        </section>
    )
}