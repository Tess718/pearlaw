import { CalendarDays } from "lucide-react";

export default function CrsHero() {
    return (
        <section className="mb-[60px]">
            <div className="bg-rtn-1 md:h-[276px] h-[218px] flex flex-col justify-center items-center gap-[28px]">
                <h3 className="font-bold md:text-[20px] leading-[20px] text-[14px] tracking-[0%] text-center uppercase text-[#C84E26]">Careers at pearlaw corporate</h3>
                <h1 className="font-semibold text-[24px] leading-[34px] tracking-[0%] text-center text-[#FEFEFE] hidden md:block">Join our team of dedicated legal professionals</h1>
                <h1 className="font-semibold text-[20px] leading-[28px] tracking-[0%] text-center text-[#FEFEFE] block md:hidden">Join our team of dedicated legal professionals. We’re seeking talented young minds to shape the future of corporate law.</h1>

            </div>

            <div className="lg:py-[80px] px-4 container mx-auto">
                <div className="flex flex-col gap-[28px] justify-center items-center py-[60px] lg:px-[281px] lg:shadow-[0px_4px_12px_0px_#00000026] lg:bg-white lg:rounded-[8px] lg:border lg:border-[#96959566]">
                    <h1 className="font-bold lg:text-[64px] lg:leading-[68px] text-[16px] leading-[18px] tracking-[0%] text-center lg:text-[#C84E26] text-[#2B2B2BCC]">Join Our Team</h1>
                    <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] tracking-[0%] text-center text-[#2B2B2B]">At pearlaw Corporate, we believe in nurturing fresh talent and providing opportunities for growth in the dynamic field of corporate law.</p>
                    <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] tracking-[0%] text-center text-[#2B2B2B]">We are continuously looking for interns and fresh graduates who are passionate about legal excellence and eager to learn from experienced professionals.</p>
                    <p className="font-normal lg:text-[20px] text-[16px] leading-[28px] tracking-[0%] text-center text-[#2B2B2B]">While we may not have immediate openings, we maintain a pool of qualified candidates.
                    Submit your application below, and we will reach out when suitable opportunities arise</p>
                </div>
            </div>

            <div className="px-4 container mx-auto">
                <div className="bg-convo lg:p-[80px] rounded-[8px]">
                    <h3 className="font-semibold lg:text-[28px] text-[16px] lg:leading-[34px] leading-[18px] tracking-[0%] text-center text-[#2B2B2B] pb-[18px]">Apply Now!</h3>
                    <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-center text-[#2B2B2BCC] md:pb-5 lg:pb-0">Fill out the form below to submit your application.</p>
                    

                    <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-x-[36px] gap-y-[24px] pt-[40px] bg-white lg:bg-transparent rounded-[8px] lg:rounded-0 lg:border-0 border border-[#9695954D] lg:shadow-none shadow-[0_2px_4px_0_#00000026] max-sm:py-[16px] px-[18px] pb-[40px] lg:pb-0 lg:px-0">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-[#2B2B2B] text-[16px]">Full Name*</label>
                            <input type="text" placeholder="Name*" className="w-full h-[56px] px-4 rounded-[8px] lg:bg-white bg-[#FAFAFA99] max-sm:border-[0.6px] max-sm:border-[#6B6B6B66] placeholder:text-[#9E9E9E] text-[14px] focus:outline-none focus:border-[#C25126]" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-[#2B2B2B] text-[16px]">Email Address*</label>
                            <input type="email" placeholder="Email*" className="w-full h-[56px] px-4 rounded-[8px] lg:bg-white bg-[#FAFAFA99] max-sm:border-[0.6px] max-sm:border-[#6B6B6B66] placeholder:text-[#9E9E9E] text-[14px] focus:outline-none focus:border-[#C25126]" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-[#2B2B2B] text-[16px]">Phone*</label>
                            <input type="tel" placeholder="Phone*" className="w-full h-[56px] px-4 rounded-[8px] lg:bg-white bg-[#FAFAFA99] max-sm:border-[0.6px] max-sm:border-[#6B6B6B66] placeholder:text-[#9E9E9E] text-[14px] focus:outline-none focus:border-[#C25126]" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-[#2B2B2B] text-[16px]">Availability*</label>
                            <div className="relative">
                                <select defaultValue="Select your availability" className="w-full h-[56px] px-4 rounded-[8px] lg:bg-white bg-[#FAFAFA99] max-sm:border-[0.6px] max-sm:border-[#6B6B6B66] text-[#667085] appearance-none focus:outline-none focus:border-[#C25126] text-[14px] text-[#9E9E9E]">
                                    <option value="">Select your availability</option>
                                    <option value="immediate">Immediate</option>
                                    <option value="1-month">1 Month Notice</option>
                                    <option value="3-months">3 Months Notice</option>
                                </select>
                                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="font-medium text-[#2B2B2B] text-[16px]">Year of Graduation*</label>
                            <input type="text" placeholder="Year of Graduation*" className="w-full h-[56px] px-4 rounded-[8px] lg:bg-white bg-[#FAFAFA99] max-sm:border-[0.6px] max-sm:border-[#6B6B6B66] placeholder:text-[#9E9E9E] text-[14px] focus:outline-none focus:border-[#C25126]" />
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button type="submit" className="w-full h-[56px] bg-[#C25126] hover:bg-[#A64420] text-white rounded-[8px] font-semibold text-base flex items-center justify-center gap-2 transition-colors">
                                <CalendarDays className="w-5 h-5" />
                                Submit your Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}