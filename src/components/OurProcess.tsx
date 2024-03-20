import React from 'react';
import Image from 'next/image';
import BotomLinks from '@/shared/BotomLinks';
import { Frame } from '@/lib/constants';

const OurProcess = () => {
    return (
        <div className='max-container flexCenter  h-full mt-20 gap-[8px] flex-col'>
            <div className='w-[500px] h-[[13px]1px] space-y-2 flex-col text-[#000000] up'>
                <h1 className='font-Akzidenz text-xs flexCenter inline-block leading-3 uppercase font-normal'>Our process</h1>
                <p className="text-center uppercase">
                    <span className='font-SaolDisplay italic font-normal text-[40px] leading-[13px]'>the </span>
                    <span className='font-normal font-SaolDisplay text-[40px] leading-[13px]'>bespoke tailoring</span>
                    <span className='font-SaolDisplay italic font-normal text-[40px] leading-[13px] text-center'>Process</span>
                </p>
            </div>

      

     
        <div className='w-full md:flex-row  md:gap-[13px] justify-center  p-1 gap-1 flex lg:flex-row'>

        {/* First flex container */}
        <div className=' md:flex-row flex-row md:gap-[13px]  gap-1 flex'>
          
          {/* First nested flex container */}
          <div className='md:flex-row flex-col md:gap-[13px]  gap-1 flex'>
            <div>
            <Image alt={Frame[0].alt} className="md:w-[252px] object-cover md:h-[339px]" src={Frame[0].src} />
            </div>
            <div>
            <Image alt={Frame[1].alt} className="md:w-[252px] object-cover md:h-[339px] " src={Frame[1].src} />
            </div>
          </div>
      
          {/* Second nested flex container */}
          <div className='md:flex-row flex-col gap-1 md:gap-[13px]  flex'>
            <div>
            <Image alt={Frame[2].alt} className="md:w-[252px] object-cover md:h-[339px] " src={Frame[2].src} />
            </div>
            <div>
            <Image alt={Frame[3].alt} className="md:w-[252px] object-cover md:h-[339px] " src={Frame[3].src} />
            </div>
          </div>
      
        </div>
      
        {/* Second flex item */}
        <div className=''>
        <Image alt={Frame[4].alt} className="md:w-[252px]  object-cover md:h-[339px]  w-full h-[354px]" src={Frame[4].src} />
        </div>
      
      </div>

             <BotomLinks text={'Book an Appointment'} />
        </div>
      
    );
};

export default OurProcess;