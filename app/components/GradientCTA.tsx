import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface GradientCTAProps {
    subtitle: string;
    title: React.ReactNode;
    buttonText: string;
    buttonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    className?: string;
    buttonClassName?: string;
    secondaryButtonClassName?: string;
    buttonsContainerClassName?: string;
}

export default function GradientCTA({ subtitle, title, buttonText, buttonLink, secondaryButtonText, secondaryButtonLink, className, buttonClassName, secondaryButtonClassName, buttonsContainerClassName }: GradientCTAProps) {
    return (
        <section className={`lg:py-24 py-[28px] bg-[linear-gradient(104.72deg,#2B2B2B_-5.75%,#1E223F_98.84%)] border-[0.5px] border-[#9695954D] shadow-[0px_4px_12px_0px_#0000001A] ${className || ''}`}>
            <div className="container mx-auto px-4 text-center">
                <h4 className="font-semibold text-[16px] leading-[24px] tracking-[0%] text-center uppercase text-[#FEFEFECC]">
                    {subtitle}
                </h4>
                <h2 className="font-semibold lg:text-[24px] text-[20px] lg:leading-[28px] leading-[24px] tracking-[0%] text-center text-[#FEFEFE] py-8">
                    {title}
                </h2>
                
                <div className={`flex justify-center gap-4 items-center ${buttonsContainerClassName || ''}`}>
                    <Link 
                        href={buttonLink}
                        className={`inline-flex bg-[#C84E26] text-[#F1F2F6] lg:px-12 lg:py-4 p-[14px] rounded-[4px] items-center justify-center gap-1 font-medium text-[12px] transition-colors shadow-lg hover:bg-[#b04320] ${buttonClassName || ''}`}
                    >
                        {buttonText} <ArrowRight size={14} />
                    </Link>

                    {secondaryButtonText && secondaryButtonLink && (
                        <Link 
                            href={secondaryButtonLink}
                            className={`inline-flex border border-[#C84E26] text-white lg:px-12 lg:py-4 px-[19px] py-[14px] rounded-[4px] items-center justify-center gap-1 font-medium text-[14px] transition-colors hover:bg-[#ffffff1a] ${secondaryButtonClassName || ''}`}
                        >
                            {secondaryButtonText} <ArrowRight size={14} />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
