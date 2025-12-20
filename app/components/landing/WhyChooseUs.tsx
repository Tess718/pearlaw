import { Send } from "lucide-react";
import VerticalLine from "../VerticalLine";

export default function WhyChooseUs() {

    return (
        <section className="lg:pb-[120px]">
            <div className="bg-client md:pt-16 lg:pb-30 md:pb-16 max-sm:py-[40px]">
                <div className="container px-4 mx-auto">
                    <div className="lg:border lg:border-[#979797CC] rounded-tr-[30px] rounded-bl-[30px] lg:p-18 py-">
                        <h3 className="text-subtitle-1 text-center align-middle text-[#C84E26]">WHAT WE ARE EXPERT AT</h3>

                        <h1 className="text-heading-2 text-center max-sm:text-[28px] text-[#FEFEFE] mt-2">Why Clients <br/> Choose Us?</h1>

                        <VerticalLine />

                        <div className="flex flex-col md:flex-row text-body-large text-[#FEFEFECC] max-sm:text-center gap-15 pt-10">
                            <p>Our firm is built on a foundation of trust, dedication, and exceptional service. For years, we have guided clients through complex legal matters with clarity and confidence. Every case we handle is approached with care, precision, and a deep commitment to achieving the best possible outcome.</p>

                            <p>With extensive experience across diverse legal fields, we provide clients with strategic advice and reliable representation. Our focus is on delivering practical solutions, protecting our clients’ interests, and ensuring they are supported every step of the way.</p>
                        </div>

                        <div className="flex flex-col md:flex-row max-sm:gap-6 pt-16 justify-between lg:pb-60 pb-[40px]">
                            <div className="lg:w-fit">
                                <h3 className="text-stat-number text-center text-[#FEFEFE]">500+</h3>
                                <p className="text-stat-label text-center text-[#C84E26] pt-6
                                ">Clients Served</p>
                            </div>
                            <div className="lg:w-fit">
                                <h3 className="text-stat-number text-center text-[#FEFEFE]">98%</h3>
                                <p className="text-stat-label text-center text-[#C84E26] pt-6
                                ">Success Rate</p>
                            </div>
                            <div className="lg:w-fit">
                                <h3 className="text-stat-number text-center text-[#FEFEFE]">10mlns</h3>
                                <p className="text-stat-label text-center text-[#C84E26] pt-6
                                ">Recovered Cost for Client</p>
                            </div>
                            <div className="lg:w-fit">
                                <h3 className="text-stat-number text-center text-[#FEFEFE]">15+</h3>
                                <p className="text-stat-label text-center text-[#C84E26] pt-6
                                ">Years Experience</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="bg-convo lg:p-16 lg:w-[868px] mx-auto rounded-[8px] lg:-mt-85 pt-[60px] container mx-auto px-4 md:my-[60px] lg:my-0">
                <h3 className="text-heading-3 text-center text-[#2B2B2B]">Let’s Start the Conversation</h3>

                <p className=" text-body-normal text-center max-sm:text-[16px] text-[#2B2B2BCC] pt-6">Whether you need legal advice, consultation, or representation, we’re here <br /> to help you every step of the way</p>


                <form action="">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-10">
                        <input type="text" className="h-[56px] bg-white rounded-[4px] text-input text-[#9E9E9E] px-2 outline-none" placeholder="Name*" />

                        <input type="email" className="h-[56px] bg-white rounded-[4px] text-input text-[#9E9E9E] px-2 outline-none" placeholder="Email*" />

                        <input type="number" className="h-[56px] bg-white rounded-[4px] text-input text-[#9E9E9E] px-2 outline-none" placeholder="Phone*" />

                        <select name="" id="" className="h-[56px] bg-white rounded-[4px] text-input text-[#9E9E9E] px-2 outline-none" > <option value="">Select your availability</option>
                        </select>
                    </div>

                    <textarea name="" id="" className="h-[117px] w-full bg-white rounded-[4px] text-input text-[#9E9E9E] px-2 outline-none resize-none mt-6 p-2" placeholder="Message*"></textarea>

                    <button type="submit" className="bg-[#C84E26] text-white w-full h-[56px] rounded-[8px] text-btn flex justify-center gap-2 items-center mt-6">Submit Inquiry <Send size={16} /></button>



                </form>
            </div>
        </section>
    );
}
