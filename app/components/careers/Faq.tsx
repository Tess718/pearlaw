"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Who can apply for positions at Pearlaw Corporate",
    answer: "We welcome applications from law graduates, experienced legal professionals, and support staff who share our commitment to excellence."
  },
  {
    question: "When will i be contacted after applying",
    answer: "We review applications on a rolling basis. If your profile matches our requirements, our HR team will contact you within 2 weeks."
  },
  {
    question: "What does the selection process involve?",
    answer: "The process typically involves an initial screening, followed by technical interviews and a final HR discussion."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="px-4 container mx-auto">
      <div className="flex flex-col gap-[12px] md:mb-[40px] mb-[18px] text-center ">
        <h2 className="font-bold lg:text-[36px] lg:leading-[44px] text-[20px] leading-[28px] text-[#2B2B2B]">
          Frequently Asked <br className="block lg:hidden"/> Questions
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-[#2B2B2BCC] hidden lg:block">
          Fill out the form below to submit your application.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-[1240px] mx-auto lg:pb-[120px] pb-[80px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className=" border border-[#96959566] border-[0.6px] rounded-[4px] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-6 text-left transition-colors"
            >
              <span className="font-medium text-[14px] leading-[18px] text-[#2B2B2B]">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#667085] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 pt-0 text-[#2B2B2BCC] text-[16px] leading-[24px]">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
  );
}
