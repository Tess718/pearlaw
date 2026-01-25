import { Mail, Clock } from "lucide-react";

export default function RealCta() {
    return (
        <section className="pb-28">
            <div className="bg-real-cta lg:py-20 px-4 md:px-16">
                <div className="max-w-[1240px] mx-auto lg:border lg:border-white/20 rounded-tr-[30px] rounded-bl-[30px] md:p-10 py-10 md:py-24 md:px-16 relative overflow-hidden">
                    

                    <div className="flex flex-col items-center text-center z-10 relative">
                        <h3 className="font-bold text-[16px] md:text-[20px] leading-[24px] uppercase text-[#FEFEFE] mb-4 tracking-widest">
                            ARE YOU LOOKING FOR <br className="block md:hidden"/> SOMEONE TO HELP?
                        </h3>
                        
                        <h2 className="font-medium text-[24px] md:text-[32px] leading-[32px] md:leading-[44px] text-[#C84E26] mb-8">
                            Let us help you! Call Now : (234)813 614 1666
                        </h2>

                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 mb-8">
                            <div className="flex items-center gap-1">
                                <Mail className="text-[#C84E26]" size={20} />
                                <span className="text-[#FEFEFE] border-b border-white pb-0.5 text-[16px] md:text-[16px]">Contact@pearlaw.com</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="text-[#C84E26]" size={20} />
                                <span className="text-[#FEFEFE] text-[14px] md:text-[16px]">Mon - Fri: 9:00AM - 6:00PM</span>
                            </div>
                        </div>

                       
                        <div className="h-[40px] w-[2px] bg-[#C84E26] mb-8"></div>

                        
                        <h2 className="font-medium text-[32px] md:text-[28px] text-[#FEFEFE] mb-10 mt-6">
                            Subscribe To Newsletter
                        </h2>

                        <form className="flex flex-col lg:flex-row w-full max-w-[600px] rounded-[4px] overflow-hidden max-sm:gap-4">
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                className="text-white px-6 py-4 w-full outline-none placeholder-[#9E9E9E] text-[14px] bg-[#F1F2F633]"
                            />
                            <button 
                                type="submit" 
                                className="bg-[#C84E26] text-white px-8 md:px-12 py-4 font-semibold text-[14px] uppercase tracking-wider hover:bg-[#b04320] transition-colors shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}
