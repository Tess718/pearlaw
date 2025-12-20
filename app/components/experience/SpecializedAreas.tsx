
import {Search} from 'lucide-react';
import VerticalLine from '../VerticalLine';
import Image from 'next/image';

const SpecializedAreas = () => {
    return (
        <section className="md:py-24 py-[80px] md:bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#2B2B2B99] text-[14px] uppercase tracking-widest font-semibold block mb-[20px]">HOW WE WORK</span>
                    <h2 className="text-[#333333] text-[28px] md:text-[40px] font-semibold mb-6">Specialized Areas</h2>
                     <VerticalLine className='-mt-0.5' />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     
                    <div className="flex flex-col items-center text-center">
                         <div className="mb-6 text-[#C84E26]">
                            <Image
                                src={'/book.png'}
                                alt="Book"
                                width={48}
                                height={48}
                            />
                         </div>
                         <h3 className="font-bold text-[20px] leading-[20px] tracking-[0%] text-center uppercase text-[#2B2B2B] mb-3">BOOK A CONVERSATION</h3>
                         <p className="font-normal text-[18px] leading-[28px] tracking-[0%] text-center text-[#2B2B2BCC]">
                             Schedule an initial consultation where we listen carefully to understand your business context and legal needs.
                         </p>
                    </div>

                    
                    <div className="flex flex-col items-center text-center">
                         <div className="mb-6 text-[#C84E26]">
                            <Search size={48} strokeWidth={1.5} />
                         </div>
                         <h3 className="font-bold text-[20px] leading-[20px] tracking-[0%] text-center uppercase text-[#2B2B2B] mb-3">WE UNDERSTAND YOUR NEEDS</h3>
                         <p className="font-normal text-[18px] leading-[28px] tracking-[0%] text-center text-[#2B2B2BCC]">
                             Through detailed analysis and dialogue, we identify the core challenges and opportunities that require legal attention.
                         </p>
                    </div>

                   
                     <div className="flex flex-col items-center text-center">
                         <div className="mb-6 text-[#C84E26]">
                            <Image
                                src={'/Group.png'}
                                alt="Solutions"
                                width={48}
                                height={48}
                            />
                         </div>
                         <h3 className="font-bold text-[20px] leading-[20px] tracking-[0%] text-center uppercase text-[#2B2B2B] mb-3">WE CRAFT TAILORED SOLUTIONS</h3>
                         <p className="font-normal text-[18px] leading-[28px] tracking-[0%] text-center text-[#2B2B2BCC]">
                             Leveraging our expertise, we design and implement legal strategies that align with your business objectives.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecializedAreas;
