"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { PLANS } from "@/app/constants";

export default function Plans() {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
    const selectedPlan = PLANS[selectedPlanIndex];

    const PlanCard = ({ plan }: { plan: typeof PLANS[number] }) => (
        <div className="relative bg-[#F1F2F6] rounded-[14px] p-8 border border-[#E9E9E9] flex flex-col h-full">
            {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C25126] text-white text-sm py-1 px-4 rounded-full font-semibold">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-6">
                <h4 className="font-semibold text-[#2B2B2B] text-sm uppercase mb-2">
                    {plan.name}
                </h4>
                <div className="text-heading-2-bold text-[#2B2B2B] mb-2">
                    {plan.price}
                </div>
                <p className="text-[#2B2B2B99] text-sm leading-tight">
                    {plan.description}
                </p>
            </div>

            <div className="flex-grow mb-8">
                <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#C25126] mt-1">
                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                    <path
                                        d="M1 4.5L4.5 8L11 1"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span className="text-[#2B2B2B] text-sm">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className={`w-full py-3 rounded-[6px] border flex items-center justify-center gap-2 text-sm transition-colors ${
                    plan.isPopular
                        ? "bg-[#C25126] text-white border-[#C25126] hover:bg-[#A64420]"
                        : "bg-[#F2F2F2] text-[#484848] border-[#D9D9D9] hover:bg-[#E6E6E6]"
                }`}
            >
                <CalendarDays className="w-5 h-5" />
                Get Started
            </button>
        </div>
    );

    return (
        <section>
            <div className="bg-plans px-[24px] md:px-[80px] lg:py-[60px] md:mb-[120px] mb-[80px]">
                <div className="lg:border lg:border-[#979797] md:rounded-tr-[30px] md:rounded-bl-[30px] md:px-[80px] md:pt-[60px] max-sm:bg-[#f0f1f5]">
                    <div className="max-sm:px-4 max-sm:mx-auto max-sm:container">
                        <h3 className="text-heading-4 max-sm:text-[14px] max-sm:leading-[20px] text-center uppercase md:text-[#2B2B2B] lg:text-white text-white pb-[24px] hidden md:block">
                            Retainership plans
                        </h3>

                        <p className="text-body-semibold max-sm:text-[16px] max-sm:leading-[24px] text-center md:text-[#2B2B2B] lg:text-[#FEFEFECC] text-[#FEFEFECC] max-w-[800px] mx-auto mb-[40px] hidden md:block">
                            Choose a plan that fits your business need. Get ongoing legal
                            support with predictable costs and priority access to our expertise.
                        </p>
                    </div>

                {/* Mobile dropdown */}
                    <div className="block lg:hidden">
                        <label className="block text-[16px] leading-[18px] text-[#2B2B2B] mb-[24px] font-medium">
                            Preferred Plan
                        </label>

                        <div className="relative h-fit">
                            <select
                                value={selectedPlanIndex}
                                onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                                className="w-full appearance-none rounded-[8px] px-4 py-3 text-sm border-[0.6px] border-[#96959566] bg-[#F1F2F6] text-[#2B2B2B] border border-[#E9E9E9] pr-10 focus:outline-none focus:ring-1 focus:ring-[#C25126]"
                            >
                                {PLANS.map((plan, index) => (
                                    <option key={plan.name} value={index}>
                                        {plan.duration || "Monthly"} ({plan.name})
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 top-0 flex items-center px-4 text-[#2B2B2B]">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mobile single plan */}
                    <div className="block lg:hidden mb-8 md:mt-10 lg:mt-0">
                        <div className="relative bg-white rounded-[14px] p-6 border border-[#2B2B2B] flex flex-col h-full">
                            {selectedPlan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#131927] text-white text-sm py-1 px-4 rounded-full font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h4 className="font-bold text-[#2B2B2B] text-base mb-2">
                                    {selectedPlan.name}
                                </h4>
                                <div className="text-[40px] leading-[48px] font-bold text-[#2B2B2B] mb-4">
                                    {selectedPlan.price}
                                </div>
                                <p className="text-[#2B2B2B99] text-sm leading-tight max-w-[280px] mx-auto">
                                    {selectedPlan.description}
                                </p>
                            </div>

                            <div className="flex-grow mb-8 px-2">
                                <ul className="space-y-4">
                                    {selectedPlan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-[#2B2B2B] mt-[2px]">
                                                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                                    <path
                                                        d="M1 4.5L4.5 8L11 1"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-[#2B2B2B] text-sm text-left">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                className={`w-full py-3 rounded-[6px] border flex items-center justify-center gap-2 text-sm transition-colors ${
                                    selectedPlan.isPopular
                                        ? "bg-[#C25126] text-white border-[#C25126] hover:bg-[#A64420]"
                                        : "bg-[#F1F2F6] text-[#2B2B2B] border-[#E9E9E9] hover:bg-[#E6E6E6]"
                                }`}
                            >
                                <CalendarDays className="w-5 h-5" />
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden lg:grid grid-cols-3 gap-6">
                        {PLANS.map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>

                    <div className="lg:py-[40px] flex flex-col gap-[20px]">
                        <p className="text-sm text-center lg:text-white text-[#2B2B2B99]">
                            Not sure which plan is right for you? Book a free consultation
                            and we’ll help you choose the best option for your business.
                        </p>

                        <button className="bg-[#F1F2F633] lg:text-white text-[#2B2B2B] flex items-center justify-center rounded-[8px] py-[12px] gap-2 border border-[#969595] w-full md:w-[445px] mx-auto">
                            <CalendarDays className="w-5 h-5" />
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
