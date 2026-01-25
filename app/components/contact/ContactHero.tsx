import { Send, Check, Clock, ShieldCheck, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ContactHero() {
    return (
        <section>
            <div className="bg-rtn lg:py-[80px] py-[35px] relative max-sm:px-4 max-sm:container max-sm:mx-auto">
                <div className="backdrop-blur-xl lg:hidden block absolute top-0 left-0 right-0 bottom-0"></div>
               <div className="relative z-10">
                <h4 className="text-[#FEFEFE] font-bold lg:text-[20px] text-[14px] leading-[14px] lg:leading-[20px] text-center">Professional Legal service</h4>                           
                <h2 className="font-semibold lg:text-[32px] text-[28px] leading-[34px] lg:pt-[28px] lg:pb-[50px] py-[24px] text-[#FEFEFE] text-center"><span className="text-[#C84E26]">Get in Touch with <br className="block lg:hidden"/> Our <br className="block lg:hidden"/> </span>Legal Experts</h2>  

                <p className="text-[#FEFEFE] lg:text-[24px] text-[16px] leading-[24px] text-center font-medium lg:leading-[34px]">Reach out for legal inquires or professional support. Our <br className="hidden lg:block"/> experienced team is here to help you navigate your legal <br className="hidden lg:block"/> needs with confidence and clarity</p>
             </div> 
            </div>

            <div className="max-sm:border-b max-sm:border-[#96959580] max-sm:pb-[80px]">
                <div className="pt-[80px] mx-auto container px-4">
                    <div className="flex flex-col gap-[40px]">
                        <div className="flex items-stretch gap-2 lg:border-[0.6px] lg:border-[#96959566] lg:px-[40px] lg:py-[28px]">
                            <Image
                            src={"/Frame 1000008688.png"}
                            alt="Trusted Counsel"
                            width={68}
                            height={68}
                            className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                            />

                            <div className="flex flex-col justify-between">
                                <p className="font-semibold lg:text-[24px] text-[18px] leading-[24px] text-[#2B2B2B]">Trusted Counsel</p>

                                <p className="lg:text-[16px] text-[18px] leading-[18px] font-regular">15 Years Experience</p>
                            </div>
                        </div>

                        <div className="flex items-stretch gap-2 lg:border-[0.6px] lg:border-[#96959566] lg:px-[40px] lg:py-[28px]">
                            <Image
                            src={"/Frame 1000008688 (1).png"}
                            alt="Trusted Counsel"
                            width={68}
                            height={68}
                            className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                            />

                            <div className="flex flex-col justify-between">
                                <p className="font-semibold lg:text-[24px] text-[18px] leading-[24px] text-[#2B2B2B]">Client First</p>

                                <p className="lg:text-[16px] text-[18px] leading-[18px] font-regular">1000+ Happy Client</p>
                            </div>
                        </div>

                        <div className="flex items-stretch gap-2 lg:border-[0.6px] lg:border-[#96959566] lg:px-[40px] lg:py-[28px]">
                            <Image
                            src={"/Frame 1000008688 (2).png"}
                            alt="Trusted Counsel"
                            width={68}
                            height={68}
                            className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                            />

                            <div className="flex flex-col justify-between">
                                <p className="font-semibold lg:text-[24px] text-[18px] leading-[24px] text-[#2B2B2B]">Quick Response</p>

                                <p className="lg:text-[16px] text-[18px] leading-[18px] font-regular">24-Hours Turnaround</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="lg:pt-[80px] pt-[60px] mx-auto px-4 container">
                <h2 className="text-center font-semibold lg:text-[28px] text-[14px] leading-[24px] lg:leading-[34px] text-center text-[#2B2B2B]">Let’s Start the conversation</h2>

                <p className="text-[#2B2B2BCC] text-center text-[16px] leading-[24px] font-regular pt-[18px] hidden md:block">We’re here to help you every step of the way</p>

                <p className="text-[#2B2B2B] text-center text-[16px] leading-[24px] font-semibold pt-[18px] block md:hidden">Whether you need legal advice, consultation, representation, we’re here to help you every step of the way</p>

                <form action="" className="mt-[60px] bg-white lg:p-[40px] py-[28px] px-[12px] max-sm:shadow-[0_2px_4px_#00000026] max-sm:border max-sm:border-[#9695954D] max-sm:rounded-[8px] flex flex-col gap-[32px]">
                    <div className="flex items-center gap-1 lg:pb-[40px] pb-[33px]">
                     <div className='w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] hidden lg:block'/>
                     <p className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Send Us a Message</p>
                    </div>

                    <div className="flex flex-col gap-[18px]">
                        <label htmlFor="fname" className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Full Name <span className="text-[#C84E26]">*</span></label>
                        <input type="text" id="fname" placeholder="John Doe" className="bg-[#F1F2F6] py-[20px] px-[10px] rounded-[8px]" />
                    </div>

                    <div className="flex flex-col gap-[18px]">
                        <label htmlFor="email" className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Email Address <span className="text-[#C84E26]">*</span></label>
                        <input type="email" id="email" placeholder="johndoe@example.com" className="bg-[#F1F2F6] py-[20px] px-[10px] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                        <label htmlFor="phone" className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Phone Number <span className="text-[#C84E26]">*</span></label>
                        <input type="number" id="phone" placeholder="+234 907-163-8814" className="bg-[#F1F2F6] py-[20px] px-[10px] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                        <label htmlFor="Inquiry" className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Nature of Inquiry <span className="text-[#C84E26]">*</span></label>
                        <input type="text" id="Inquiry" placeholder="John Doe" className="bg-[#F1F2F6] py-[20px] px-[10px] rounded-[8px]" />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                        <label htmlFor="Brief_of_Inquiry" className="text-[16px] leading-[18px] font-medium text-[#2B2B2B]">Brief of Inquiry <span className="text-[#C84E26]">*</span></label>
                        <textarea name="Brief_of_Inquiry" id="Brief_of_Inquiry" placeholder="Please provide details about your legal inquiry. Be specific as possible to help us better understand your needs......" className="bg-[#F1F2F6] py-[20px] px-[10px] rounded-[8px] lg:h-[166px] resize-none h-[94px]" />
                    </div>

                    <button className="bg-[#C84E26] rounded-[8px] py-[21px] text-[16px] font-medium leading-[18px] text-white flex gap-2 items-center justify-center">Submit Inquiry <Send size={16}/></button>
                    
                </form>


                <div className="flex items-center max-sm:justify-center gap-1 pb-[40px] mt-[80px]">
                     <div className='w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] hidden lg:block'/>
                     <p className="text-[#2B2B2B] text-[18px] leading-[18px] font-medium text-center lg:text-left">Contact Details</p>
                </div>

                <div className="flex flex-col gap-[40px]">
                    <div className="flex items-start gap-2 lg:border-[0.6px] border-[#96959566] lg:px-[40px] lg:py-[28px] px-[18px]">
                        <Image
                        src={"/icon (3).png"}
                        alt="Trusted Counsel"
                        width={68}
                        height={68}
                        className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                        />

                        <div className="flex flex-col justify-between">
                            <p className="text-[#2B2B2B] lg:text-[16px] text-[14px] font-regular lg:pb-[14px]">Whatsapp</p>
                            <p className="font-semibold lg:text-[24px] text-[16px] leading-[24px] text-[#2B2B2B]">+234 806 430 5645 </p>

                            <p className=" lg:text-[16px] text-[10px] leading-[18px] font-regular lg:pt-[8px]">Quick response available</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 lg:border-[0.6px] border-[#96959566] lg:px-[40px] lg:py-[28px] px-[18px]">
                        <Image
                        src={"/icon (2).png"}
                        alt="Trusted Counsel"
                        width={68}
                        height={68}
                        className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                        />

                        <div className="flex flex-col justify-between">
                            <p className="text-[#2B2B2B] lg:text-[16px] text-[14px] font-regular lg:pb-[14px]">Call Us</p>
                            <p className="font-semibold lg:text-[24px] text-[16px] leading-[24px] text-[#2B2B2B]">+234 813 614 1666</p>

                            <p className=" lg:text-[16px] text-[10px] leading-[18px] font-regular lg:pt-[8px]">Mon-Fri, 9AM-6PM EST</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 lg:border-[0.6px] border-[#96959566] lg:px-[40px] lg:py-[28px] px-[18px]">
                        <Image
                        src={"/icon (1).png"}
                        alt="Trusted Counsel"
                        width={68}
                        height={68}
                        className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                        />

                        <div className="flex flex-col justify-between">
                            <p className="text-[#2B2B2B] lg:text-[16px] text-[14px] font-regular lg:pb-[14px]">Email</p>
                            <p className="font-semibold lg:text-[24px] text-[16px] leading-[24px] text-[#2B2B2B]">Contact@pearlaw.com</p>

                            <p className=" lg:text-[16px] text-[10px] leading-[18px] font-regular lg:pt-[8px]">24-hours response time</p>
                        </div>
                    </div>
                
                    <div className="flex items-start gap-2 lg:border-[0.6px] border-[#96959566] lg:px-[40px] lg:py-[28px] px-[18px]">
                        <Image
                        src={"/Frame 1000008688 (3).png"}
                        alt="Trusted Counsel"
                        width={68}
                        height={68}
                        className="lg:w-[68px] lg:h-[68px] w-[48px] h-[48px]"
                        />

                        <div className="flex flex-col justify-between">
                            <p className="text-[#2B2B2B] lg:text-[16px] text-[14px] font-regular lg:pb-[14px]">Business Hours</p>
                            <p className="font-semibold lg:text-[24px] text-[16px] leading-[24px] text-[#2B2B2B]">Mon-Fri: 9:00AM - 6:00PM</p>

                            <p className=" lg:text-[16px] text-[10px] leading-[18px] font-regular lg:pt-[8px]">Closed on Sundays</p>
                        </div>
                    </div>
                </div>

                <div className="max-sm:border-y-[0.5px] max-sm:border-[#6B6B6B66] max-sm:mt-[28px] max-sm:py-[40px]">

                    <p className="text-[16px] font-semibold lg:pt-[60px] pb-[24px]">Connect with Us</p>

                    <div className="flex gap-2 lg:pb-[80px]">
                        <Image
                        src={"/Frame 2147208771.png"}
                        alt="socials"
                        width={48}
                        height={48}
                        />
                        <Image
                        src={"/Frame 2147208777.png"}
                        alt="socials"
                        width={48}
                        height={48}
                        />
                        <Image
                        src={"/Frame 2147208778.png"}
                        alt="socials"
                        width={48}
                        height={48}
                        />
                    </div>
                </div>

            </div>

                <div className="block md:hidden">
                    <h3 className="font-semibold text-[14px] leading-[18px] uppercase text-center tracking-[0] pb-[24px] pt-[60px]">Our Workspace</h3>

                    <div className="bg-[url('/f7367c9fd2fe1672767dfbdbdc91bc0a393b8827.jpg')] bg-cover bg-center h-[280px] container mx-auto px-4 flex flex-col justify-end pb-[46px]">
                        <h3 className="text-[#C84E26] text-[20px] font-semibold pb-[14px]">Virtual Office</h3>
                        <p className="font-medium text-[14px] leading-[22px] tracking-[0] align-middle text-[#FEFEFE]">We operate remotely to serve you <br/> better, anywhere</p>
                    </div>
                </div>

                <div className="bg-expense lg:pt-[80px] pt-[32px] pb-[100px] md:pb-[194px] mt-[80px] lg:mb-[120px] mb-[80px]"> 
                <div className="container px-4 mx-auto">
                    
                    
                    <div className="flex flex-col items-center">
                        <h4 className="md:bg-transparent md:text-[#C84E26] md:p-0 md:rounded-none md:mb-2 md:tracking-widest md:uppercase bg-white text-black px-[58px] py-[4px] rounded-full font-bold text-[14px] mb-6 uppercase w-fit mx-auto">
                            Flexible Plans
                        </h4>
                        
                        <h2 className="text-[#FEFEFE] text-center text-[20px] md:text-[32px] leading-[36px] font-semibold mb-[20px]">
                            Explore Our Retainership Plans
                        </h2>


                        <div className="w-[1px] h-[40px] bg-[#C84E26] mx-auto mb-[60px] hidden md:block"></div>

                        
                        <div className="block md:hidden text-center mb-10 w-full">
                            <p className="text-[#FEFEFECC] text-[16px] leading-[24px] mb-[60px]">
                                Discover flexible retainership options designed to provide ongoing legal support tailored to your specific needs and budget.
                            </p>
                            <button className="w-full bg-[#C84E26] text-white py-4 rounded-[8px] font-medium flex items-center justify-center gap-2 hover:bg-[#b04320] transition-colors">
                                View Retainership Plans <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="md:rounded-tr-[30px] md:rounded-bl-[30px] md:border-[0.6px] md:border-[#FFFFFF33] md:p-[40px] md:px-[60px] md:py-[80px]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[18px]">
                            

                            <div className="flex flex-col md:items-center md:text-center items-start text-left border border-white/20  rounded-xl p-6 md:border-none md:bg-transparent md:p-0">
                                <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-[#C84E26] rounded-[8px] text-white md:bg-white md:rounded-full md:text-[#C84E26] flex items-center justify-center mb-4 md:mb-6">
                                    <Check className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                                </div>
                                <h3 className="text-[#FEFEFE] font-bold text-[18px] md:text-[20px] leading-[24px] mb-2 md:mb-4 capitalize md:uppercase">Priority Support</h3>
                                <p className="text-[#FEFEFECC] text-[15px] md:text-[16px] leading-[22px] md:leading-[24px]">Get expedited responses and dedicated attention</p>
                            </div>

                            
                            <div className="flex flex-col md:items-center md:text-center items-start text-left border border-white/20  rounded-xl p-6 md:border-none md:bg-transparent md:p-0">
                                <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-[#C84E26] rounded-[8px] text-white md:bg-white md:rounded-full md:text-[#C84E26] flex items-center justify-center mb-4 md:mb-6">
                                    <Clock className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                                </div>
                                <h3 className="text-[#FEFEFE] font-bold text-[18px] md:text-[20px] leading-[24px] mb-2 md:mb-4 capitalize md:uppercase">Cost Effective</h3>
                                <p className="text-[#FEFEFECC] text-[15px] md:text-[16px] leading-[22px] md:leading-[24px]">Fixed monthly rates with predictable costs</p>
                            </div>

                            
                            <div className="flex flex-col md:items-center md:text-center items-start text-left border border-white/20  rounded-xl p-6 md:border-none md:bg-transparent md:p-0">
                                <div className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-[#C84E26] rounded-[8px] text-white md:bg-white md:rounded-full md:text-[#C84E26] flex items-center justify-center mb-4 md:mb-6">
                                    <ShieldCheck className="md:w-[32px] md:h-[32px] w-[24px] h-[24px]" />
                                </div>
                                <h3 className="text-[#FEFEFE] font-bold text-[18px] md:text-[20px] leading-[24px] mb-2 md:mb-4 capitalize md:uppercase">Flexible Terms</h3>
                                <p className="text-[#FEFEFECC] text-[15px] md:text-[16px] leading-[22px] md:leading-[24px]">Choose Plans that adopt to your needs</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}