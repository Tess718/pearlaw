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
            <div className="bg-plans px-[24px] md:px-[80px] py-[60px] mb-[120px]">
                <div className="border border-[#979797] rounded-tr-[30px] rounded-bl-[30px] pt-[40px] px-[24px] md:px-[80px]">
                    <h3 className="text-heading-4 text-center uppercase text-white pb-[24px]">
                        Retainership plans
                    </h3>

                    <p className="text-body-semibold text-center text-[#FEFEFECC] max-w-[800px] mx-auto mb-[40px]">
                        Choose a plan that fits your business need. Get ongoing legal
                        support with predictable costs and priority access to our expertise.
                    </p>

                    {/* Mobile dropdown */}
                    <div className="block lg:hidden mb-6">
                        <label className="block text-sm text-white mb-2">
                            Preferred Plan
                        </label>

                        <select
                            value={selectedPlanIndex}
                            onChange={(e) => setSelectedPlanIndex(Number(e.target.value))}
                            className="w-full rounded-[8px] px-4 py-3 text-sm bg-white text-[#2B2B2B] border border-[#D9D9D9]"
                        >
                            {PLANS.map((plan, index) => (
                                <option key={plan.name} value={index}>
                                    {plan.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mobile single plan */}
                    <div className="block lg:hidden">
                        <PlanCard plan={selectedPlan} />
                    </div>

                    {/* Desktop grid */}
                    <div className="hidden lg:grid grid-cols-3 gap-6">
                        {PLANS.map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>

                    <div className="py-[40px] flex flex-col gap-[20px]">
                        <p className="text-sm text-center text-white">
                            Not sure which plan is right for you? Book a free consultation
                            and we’ll help you choose the best option for your business.
                        </p>

                        <button className="bg-[#F1F2F633] text-white flex items-center justify-center rounded-[8px] py-[12px] gap-2 border border-[#969595] w-full md:w-[445px] mx-auto">
                            <CalendarDays className="w-5 h-5" />
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
