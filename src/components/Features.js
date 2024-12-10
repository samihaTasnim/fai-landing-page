import React from 'react';
import Logo1 from '../images/Logomark.png'
import Logo2 from '../images/Logomark (1).png'
import Logo3 from '../images/Logomark (2).png'
import Logo4 from '../images/Logomark (3).png'
import Logo5 from '../images/Logomark (4).png'
import Logo6 from '../images/Logomark (5).png'
import icon1 from '../images/Featured icon.png'
import icon2 from '../images/Featured icon (1).png';
import icon3 from '../images/Featured icon (2).png'
import mock1 from '../images/3_2 screen mockup.png'
import mock2 from '../images/3_2 screen mockup (1).png'
import mock3 from '../images/3_2 screen mockup (2).png'

const Features = () => {
  return (
    <>
    <div className='px-4 md:px-20'>
      <p className='text-center'>We've built office spaces for</p>
      <br />
      <br />
      <div className='grid grid-cols-2 md:grid-cols-6'>
        <div className='flex items-center justify-center'>
          <img src={Logo1} alt="" />
          <p className='ml-2 md:ml-4'>OdeoLabs</p>
        </div>
        <div  className='flex items-center justify-center'>
          <img src={Logo2} alt="" />
          <p  className='ml-2 md:ml-4'>Kintsugi</p>
        </div>
        <div  className='flex items-center justify-center'>
          <img src={Logo3} alt="" />
          <p  className='ml-2 md:ml-4'>Stacked Lab</p>
        </div>
        <div  className='flex items-center justify-center'>
          <img src={Logo4} alt="" />
          <p  className='ml-2 md:ml-4'>Magnolia</p>
        </div>
        <div  className='flex items-center justify-center'>
          <img src={Logo5} alt="" />
          <p  className='ml-2 md:ml-4'>Warpspeed</p>
        </div>
        <div  className='flex items-center justify-center'>
          <img src={Logo6} alt="" />
          <p  className='ml-2 md:ml-4' >Sisyphus</p>
        </div>
      </div>
      <section className='mt-8 md:mt-20'>
        <p className='text-center text-violet-500 text-xs'> Our Services</p>
        <br />
        <p className='text-center text-lg md:text-3xl font-semibold' >What we do</p>
        <br />
        <br />
      </section>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 content-center'>
      <div className=''>
        <div className='flex justify-center align-center p-2 md:p-8'>
          <div>
        <img src={icon1} alt="" />
        <br />
        <p className='font-medium text-lg md:text-3xl'>CRM & Website Development</p>
        <br />
        <p className='text-gray-500'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        <br />
        <div className='flex mb-2 md:mb-4 ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Leverage automation to move fast</span>
        </div>
        <div className='flex mb-2 md:mb-4  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Always give customers a human to chat to </span>
        </div>
        <div className='flex  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Automate customer support and close leads faster </span>
        </div>
        </div>
        </div>
      </div>
      <div className='flex flex-row-reverse mb-0 md:mb-16'>
          <img src={mock1} alt="" />
      </div>
      <div className='flex flex-row'>
          <img src={mock2} alt="" />
      </div>
      <div className=''>
        <div className='flex justify-center align-center p-2 md:p-8'>
          <div>
        <img src={icon2} alt="" />
        <br />
        <p className='font-medium text-lg md:text-3xl'>Mobile App Development</p>
        <br />
        <p className='text-gray-500'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        <br />
        <div className='flex mb-2 md:mb-4 ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Keep your customers in the loop with live chat</span>
        </div>
        <div className='flex mb-2 md:mb-4  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'>Embed help articles right on your website </span>
        </div>
        <div className='flex  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Customers never have to leave the page to find an answer </span>
        </div>
        </div>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-center align-center p-2 md:p-8'>
          <div>
        <img src={icon1} alt="" />
        <br />
        <p className='font-medium text-lg md:text-3xl'>CRM & Website Development</p>
        <br />
        <p className='text-gray-500'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        <br />
        <div className='flex mb-2 md:mb-4 ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Leverage automation to move fast</span>
        </div>
        <div className='flex mb-2 md:mb-4  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Always give customers a human to chat to </span>
        </div>
        <div className='flex  ml-0 md:ml-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18113_1356)">
<path d="M8.75065 13.9999L12.2507 17.4999L19.2507 10.4999M25.6673 13.9999C25.6673 20.4432 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4432 2.33398 13.9999C2.33398 7.5566 7.55733 2.33325 14.0007 2.33325C20.444 2.33325 25.6673 7.5566 25.6673 13.9999Z" stroke="#7F56D9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_18113_1356">
<rect width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>
<span className='text-gray-500 ml-2 md:ml-4'> Automate customer support and close leads faster </span>
        </div>
        </div>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
          <img src={mock1} alt="" />
      </div>
    </div>
    </>
  );
};

export default Features;