

import { CircleCheck, ArrowRight } from 'lucide-react';

export default function CallToAction() {
    return (
       <section className='lg:pt-[80px] lg:pb-[60px] pt-[24px] pb-[80px]'>
            <div className='bg-[#A45C2A33] py-[12px] px-[28px] rounded-[30px] w-fit mx-auto '>
                <p className=' text-btn-small text-[#C84E26] flex items-center gap-1'><CircleCheck size={12} />Trusted Legal Partner</p>
            </div>

            <h2 className='text-heading-2-semibold text-center text-[#2B2B2B] lg:mt-6 mt-[18px] max-sm:text-[16px]'>Your Partner in Corporate <br />Business Success</h2>
            <p className='text-body-medium text-center text-[#2B2B2BCC] lg:my-8 my-[18px] mx-auto container px-4'>Navigate complex corporate landscapes with confidence. Our boutique <br /> law firm delivers strategic legal solutions tailored to your business <br /> needs, combining seasoned expertise with innovative thinking.</p>

            <hr className="border-t border-[#9695954D] h-0" />

            <div className="flex gap-4 justify-center mt-8">
                <button className='lg:px-[28px] lg:py-[14px] px-[10px] py-[10px] rounded-[4px] bg-[#C84E26] flex gap-2 text-btn-small items-center font-semibold text-[#F1F2F6]'>
                Book Consultation <ArrowRight size={12}  />
                </button>

                <button className='lg:px-[28px] lg:py-[16px] px-[10px] py-[10px] rounded-[4px] button-gradient2 font-medium lg:text-sm text-[12px] leading-[14px] tracking-normal border border-[0.6px] border-[#F3F3F34D] text-[#2B2B2B]'>
                 Explore Services
                </button>
            </div>
       </section>
    );
}
