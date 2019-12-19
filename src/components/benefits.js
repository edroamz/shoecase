import React from 'react';
import comfort from '../images/comfort.jpg';
import waterproof from '../images/waterproof.jpg';
import lightWeight from '../images/light-weight.jpg';
import customizable from '../images/customizable.jpg';

const Benefits = () => {
  return (
    <section className=''>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={comfort}
          alt='A pair of comfortable shoes'
        />
        <p className='pt-4 font-bold uppercase leading-loose'>comfort</p>
        <p className=' text-xs tracking-wide'>Like walking on the clouds</p>
      </div>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={waterproof}
          alt='A pair of waterproof shoes'
        />
        <p className='pt-4 font-bold uppercase leading-loose'>waterproof</p>
        <p className=' text-xs tracking-wide'>No more wet socks</p>
      </div>
      <div className='border-b border-gray-200 p-6'>
        <img
          className='w-full h-40 object-cover'
          src={lightWeight}
          alt='very light weight sneakers'
        />
        <p className='pt-4 font-bold uppercase leading-loose'>light weight</p>
        <p className=' text-xs tracking-wide'>Lighter than air</p>
      </div>
      <div className='border-b border-gray-200 p-6 pb-32'>
        <img
          className='w-full h-56 object-cover relative'
          src={customizable}
          alt='A rack of shoes'
        />
        <div className='absolute left-0 right-0 -mt-8 mx-auto w-48 bg-white p-6 rounded-sm shadow-md'>
          <p className='font-bold uppercase leading-loose'>customizable</p>
          <p className=' text-xs tracking-wide'>Your shoes, your style</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
