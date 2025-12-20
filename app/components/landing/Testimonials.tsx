
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        body: 'Pearlaw’s expertise in tech law helped us navigate complex regulatory requirements as we scaled. Their practical advice was invaluable. The firm handled my case with exceptional professionalism and clarity. I felt supported at every stage.',
        author: {
            name: 'Chidi Okonkwo',
            handle: 'CEO, TechVenture Nigeria',
            imageUrl: '/a79dee57b62753bb9058cf422eb778a7514fbbc3.jpg', 
        },
    },
    {
        body: 'From incorporation to our Series A, Pearlaw has been with us every step. Their startup expertise is unmatched in lagos. Their ability to navigate complex legal issues was impressive. I am grateful for their steadfast support.',
        author: {
            name: 'Amina Bello',
            handle: 'Founder, FinTech Solutions Ltd',
            imageUrl: '/ce8bb538f323b313e46531003d391857fe649be7.jpg',
        },
    },
    {
        body: 'Professional, reliable, and highly skilled . The firm made a challenging process manageable and stress free. Clear communication, excellent advocacy, and genuine concern for clients, truly outstanding service',
        author: {
            name: 'Ndicka John',
            handle: 'Founder, FinTech Solutions Ltd',
            imageUrl: '/9716358a4005b22a3c1c23d7c04f6c9fdbd85468.jpg',
        },
    },
    {
        body: 'Their corporate governance guidance transformed how we operate. Professional, responsive, and deeply knowledgeable . I was impressed by their responsiveness and the thorough explanation of every legal step involved.',
        author: {
            name: 'Michael Adeyemi',
            handle: 'COO, Enterprise Group Plc',
            imageUrl: '/bc42f0241e1fcf9a9c76765aab1a0e670a50a79f.png',
        },
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section>
            <div className="container px-4 mx-auto pt-10 pb-18">
                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        <div className="lg:col-span-4">
                            <h3 className="text-heading-3">We render the best service</h3>
                            <div className='w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] mt-4'/>
                        </div>
                        <p className="col-span-8 text-[#2B2B2BCC] text-body-large max-sm:pt-[24px]">In a remote region beyond the towering word-mountains, far removed from the realms of Vokalia and Consonantia, there resided the forgotten texts. Secluded within Bookmarksgrove, situated along the coast of the Semantics and bordered by an expansive linguistic sea, they lived in quiet isolation. A gentle river called Duden coursed through their dwelling place, carrying an enduring tranquility. Upon waking from a night of troubled dreams, Gregor Samsa found himself altered in a manner he could scarcely comprehend.</p>
                    </div>
                </div>
            <div className="bg-testimonials relative py-20 px-4 md:px-16 overflow-hidden max-sm:rounded-[8px] max-sm:mb-[80px]">
                <div className="backdrop-blur-sm absolute backdrop-blur-2xl top-0 right-0 bottom-0 left-0"/>
                
                <div className="max-w-[1240px] mx-auto min-h-[600px] md:border md:border-white/20 rounded-tr-[30px] rounded-bl-[30px] relative flex flex-col items-center justify-center p-8 md:p-16">
                    
                    {/* Header */}
                    <div className="flex flex-col items-center mb-8">
                        <span className="text-[#C84E26] text-sm uppercase tracking-widest font-medium mb-2">Testimonial</span>
                        <h2 className="text-white text-[28px] md:text-[40px] font-normal mb-6 text-center">Words From <br className='block md:hidden'/> Clients</h2>
                        <div className="h-[24px] w-[2px] bg-[#C84E26]"></div>
                    </div>

                    <Image
                        src={"/quote.png"}
                        alt="Quote"
                        width={82.5}
                        height={52.5}
                        className='py-10'
                    />

                    {/* Content Carousel */}
                    <div className="max-w-3xl mx-auto text-center relative z-10 transition-opacity duration-500 ease-in-out">
                        <p className="text-testimonial-quote text-center text-[#FEFEFECC]">
                            {testimonials[currentIndex].body}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 justify-center pt-10 ">
                            <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={testimonials[currentIndex].author.imageUrl}
                                    alt={testimonials[currentIndex].author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white text-link-sidebar text-start">{testimonials[currentIndex].author.name}</h4>
                                <p className="text-[#C84E26] text-sm mt-1">{testimonials[currentIndex].author.handle}</p>

                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex gap-2 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? 'w-8 bg-[#C84E26]' : 'w-2 bg-[#FFFFFF4D] hover:bg-[#FFFFFF80]'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}
