import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPERTISE_ITEMS } from "@/app/constants";
import VerticalLine from "../VerticalLine";

interface ExpertiseProps {
    hideLearnMore?: boolean;
    mobileSubtitle?: string;
    mobileTitle?: string;
}

export default function Expertise({ hideLearnMore, mobileSubtitle, mobileTitle }: ExpertiseProps) {
    return (
        <section className="bg-[#f0f1f5]">
            <h2 className={`text-subtitle-dense text-center align-middle text-[#2B2B2B99] ${mobileSubtitle ? 'hidden md:block' : ''}`}>Our Expertise</h2>
            {mobileSubtitle && (
                <h2 className="text-subtitle-dense text-center align-middle text-[#2B2B2B99] md:hidden">{mobileSubtitle}</h2>
            )}
            
            <h1 className={`text-heading-2-semibold text-center text-[#2B2B2B] max-sm:text-[14px] lg:mt-4 mt-[20px] ${mobileTitle ? 'hidden md:block' : ''}`}>Legal Practice Areas</h1>
            {mobileTitle && (
                <h1 className="text-heading-2-semibold text-center text-[#2B2B2B] max-sm:text-[20px] lg:mt-4 mt-[20px] md:hidden max-sm:container max-sm:mx-auto max-sm:px-4">{mobileTitle}</h1>
            )}
            <VerticalLine className="max-sm:mt-10" />

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:pb-[140px] pb-[80px]">
                    {EXPERTISE_ITEMS.map((item, index) => (
                        <div key={index} className="py-6">
                            <Image 
                                src={item.image}
                                alt={item.alt}
                                width={48}
                                height={48}
                                className="mx-auto pb-4"
                            />
                            <h3 className=" text-card-title text-center align-middle text-[#2B2B2B] py-2">{item.title}</h3>
                            <p className="text-body-medium text-center text-[#2B2B2BCC]">{item.description}</p>
                            {!hideLearnMore && (
                                <Link href="#" className="font-medium text-sm tracking-normal uppercase flex items-center gap-2 text-[#C84E26] justify-center mt-4">Learn More <ArrowRight size={14} /></Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
