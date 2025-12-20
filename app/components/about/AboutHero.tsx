import Image from "next/image";

export default function AboutHero() {
    return (
        <section className=" lg:border-b lg:border-[#9695954D]">
            <div className="bg-blog h-[276px] flex flex-col justify-center items-center gap-3 max-sm:h-[348px]">
                <h1 className="text-heading-1 text-center capitalize text-[#FEFEFE] hidden md:block ">About Pearlaw corporate</h1>
                <p className="text-subtitle-2 text-center text-[#FEFEFECC] hidden md:block">Story about our firm</p>
            </div>

            <div className="container mx-auto px-4 lg:pt-[80px] lg:pb-[60px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
                  <div className="relative h-full w-full">
                    <Image
                      src="/bf2c6bf5520375aa2940888372171a93ca545b89.jpg"
                      alt="Parliament Hall"
                      fill
                      className="object-cover rounded-[4px]"
                    />
                  </div>
            
                  <div>
                    <div className="w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] mb-4 hidden md:block" />

                    <h3 className="text-subtitle-3 text-[#2B2B2B99] max-sm:text-center">About Pearlaw</h3>
                    
                    <h2 className="text-heading-4 pt-2 pb-6 capitalize text-[#2B2B2B] hidden md:block">Our Gorgeous History</h2>

                    <p className="text-body-serif-large text-[#2B2B2B] max-sm:font-sans max-sm:not-italic max-sm:pt-[18px] max-sm:text-[16px] max-sm:text-center">
                     Founded with a commitment to excellence and integrity, Pearlaw Corporate has been serving clients with distinction for over two decades. Our team of experienced attorneys combines deep legal expertise with a client-first approach, ensuring that every case receives the attention and dedication it deserves.
                    </p>

                    <p className="text-body-serif-large text-[#2B2B2B] mt-4 max-sm:font-sans max-sm:not-italic max-sm:pt-[18px] max-sm:text-[16px] max-sm:text-center">
                    We believe in building lasting relationships based on trust, transparency, and results. Whether you’re facing a complex litigation matter or need strategic legal counsel, Pearlaw Corporate is your partner in acheiving the best possible outcome.
                    </p>
                  </div>
            
                </div>
              </div>
        </section>
    )
}