
import Image from 'next/image';

const CorporateIntro = () => {
  return (
   <section className="md:py-24 pt-[40px] bg-[#f0f1f5]">
  <div className="md:container md:mx-auto md:px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

      <div className="relative h-[400px] w-full hidden md:block">
        <Image
          src="/ead038efcb4c76c7abb94f01a68c5ed6f76488ec.jpg"
          alt="Parliament Hall"
          fill
          className="object-cover rounded-[4px]"
        />
      </div>

      <div className='flex flex-col gap-[60px]'>
        <div className="max-sm:container max-sm:mx-auto max-sm:px-4">
          <div className="w-[40px] h-[3.5px] bg-[#C84E26] rounded-[3.5px] mb-4 max-sm:hidden" />
          <p className="font-normal italic md:text-[24px] text-[16px] leading-[30px] tracking-normal text-[#2B2B2B] font-serif max-sm:border-l-2 max-sm:border-[#E74623] max-sm:pl-3">
            At Pearlaw Corporate, we bridge the legal gaps that stand between your business and its full potential. Our boutique approach combines deep legal expertise with strategic business acumen, ensuring every solution we craft aligns with your commercial objectives. We don't just solve legal problems, we partner with you to unlock opportunities, mitigate risks, and drive sustainable growth.
          </p>

        </div>

        <Image
          src="/exp.jpg"
          alt="Parliament Hall"
          width={500}
          height={500}
          className="object-cover rounded-[8px] block md:hidden"
        />
      </div>

    </div>
  </div>
</section>

  );
};

export default CorporateIntro;
