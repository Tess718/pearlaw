import { ArrowRight } from "lucide-react";
import VerticalLine from "../VerticalLine";
import Image from "next/image";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/app/constants";

export default function Team() {
    return (
        <section className="">
            <div className="bg-team p-16 pb-90">
                <h3 className="text-heading-2 text-center max-sm:text-[28px] lg:text-[#FEFEFE] text-[#2B2B2B]">Our Legal Team</h3>
                <Link href="/dream-team" className="text-subtitle-1 text-center align-middle lg:text-[#C84E26] max-sm:text-[14px] text-[#2B2B2B99] flex justify-center items-center gap-3 mt-6 ">VIEW ALL PEOPLE <ArrowRight size={16} className="max-sm:text-[#E74623]" /></Link>

                <div className="pt-[24px]">
                    <VerticalLine />
                </div>
            </div>
            
            <div className="max-sm:px-8 max-sm:bg-white">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory -mt-80 scrollbar-hide -mx-4 px-6 md:mx-0 md:px-16 max-sm:pt-[40px]">
                {TEAM_MEMBERS.map((member, index) => (
                    <div key={index} className="snap-center shrink-0 w-[375px] md:w-[342px]">
                        <div className="flex flex-col">
                            <div className="relative h-[320px] w-full rounded-t-[8px] overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center bg-[#F9F9F9] pt-6 pb-14 rounded-b-[8px] border border-[#F5F5F54D]">
                                <h4 className="text-link-sidebar text-center uppercase text-[#2B2B2B]">{member.name}</h4>
                                <p className="text-sm font-normal text-center tracking-normal uppercase text-[#C84E26] mt-3">{member.role}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            </div>

        </section>
    );
}