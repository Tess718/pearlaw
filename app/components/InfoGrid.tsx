import Image from "next/image";

interface InfoGridItem {
    image: string;
    title: string;
    description: string;
    alt: string;
}

interface InfoGridProps {
    items: InfoGridItem[];
    className?: string;
    cols?: number;
}

export default function InfoGrid({ items, className, cols }: InfoGridProps) {
    const gridCols = cols || items.length;
    
    let gridClass = "lg:grid-cols-4 md";
    if (gridCols === 1) gridClass = "lg:grid-cols-1";
    if (gridCols === 2) gridClass = "lg:grid-cols-2";
    if (gridCols === 3) gridClass = "lg:grid-cols-3";

    return (
        <div className={className}>
             <div className={`border border-[#979797CC] rounded-tr-[30px] rounded-bl-[30px] grid grid-cols-1 md:grid-cols-2 ${gridClass} py-[40px] px-[28px] gap-8`}>
                {items.map((item, index) => (
                    <div key={index}>
                        <Image 
                            src={item.image}
                            alt={item.alt}
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                        <h3 className="font-semibold text-[18px] leading-[24px] tracking-[0%] text-center uppercase align-middle text-[#FEFEFE] py-[24px]">
                            {item.title}
                        </h3>

                        <p className="font-normal text-[16px] leading-[20px] tracking-[0%] text-center text-[#FEFEFE]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
