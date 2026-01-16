

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className='bg-hero lg:py-38 py-[51px]'>
      <p className='text-subtitle-welcome text-center text-[#FFFFFF]'>WELCOME TO</p>
      <h1 className='text-heading-hero text-center lg:py-8 py-[16px] text-[#FAFAFA]'>PEARLAW <br /> CORPORATE</h1>
      <p className='text-body-normal text-center text-[#FEFEFE]'>We provide expert legal solutions for businesses and individuals. Exerience. Trust. Results.</p>

      <button className='px-[28px] py-[14px] rounded-[4px] button-gradient flex gap-2 text-btn-small items-center font-semibold mx-auto lg:mt-20 mt-[23px] text-[#F1F2F6]'>
        BOOK NOW <ArrowRight size={12}  />
      </button>
    </section>
  );
}
