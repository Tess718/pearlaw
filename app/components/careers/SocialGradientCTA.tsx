import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function SocialGradientCTA() {
    return (
        <section className="py-[80px] bg-[linear-gradient(104.72deg,#2B2B2B_-5.75%,#1E223F_98.84%)] w-full">
            <div className="container mx-auto px-4 text-center">
                <h4 className="font-semibold text-[16px] leading-[24px] uppercase text-[#FEFEFECC] tracking-wider mb-4">
                    READY TO GET STARTED?
                </h4>
                <h2 className="font-semibold text-[24px] md:text-[28px] leading-[34px] text-[#FEFEFE] mb-10 mx-auto">
                    Follow us on social media for the latest updates on <br/> job openings and firm news.
                </h2>
                
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4 flex-wrap justify-center">
                        <Link 
                            href="#"
                            className="flex items-center gap-2 px-[10px] py-[14px] rounded-[4px] border border-[#FEFEFE33] bg-[#FFFFFF0D] text-[#C84E26] hover:bg-[#FFFFFF1A] transition-colors min-w-[160px] justify-center"
                        >
                            <Facebook size={20} />
                            <span className="font-medium text-[14px]">Facebook</span>
                        </Link>
                        
                        <Link 
                            href="#"
                            className="flex items-center gap-2 px-[10px] py-[14px] rounded-[4px] border border-[#FEFEFE33] bg-[#FFFFFF0D] text-[#C84E26] hover:bg-[#FFFFFF1A] transition-colors min-w-[160px] justify-center"
                        >
                            <Instagram size={20} />
                            <span className="font-medium text-[14px]">Instagram</span>
                        </Link>
                    </div>
                    
                    <div>
                        <Link 
                            href="#"
                            className="flex items-center gap-2 px-[10px] py-[14px] rounded-[4px] border border-[#FEFEFE33] bg-[#FFFFFF0D] text-[#C84E26] hover:bg-[#FFFFFF1A] transition-colors min-w-[160px] justify-center"
                        >
                           <i className="bi bi-tiktok text-transparent" style={{ WebkitTextStroke: '1px #C84E26' }}></i>
                            <span className="font-medium text-[14px]">Tiktok</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
