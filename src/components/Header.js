import React from 'react';
import pattern from '../images/Background pattern.png'
import pattern2 from '../images/Content.png';

const Header = () => {
  return (
    <div className='p-4 md:p-12'>
      <section style={{ backgroundImage:`url(${pattern})` }} className='pt-4 md:py-16 h-100 bg-cover bg-center'> 
      
      <button class="flex mx-auto items-center bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-light text-xs">
  <span className='bg-white p-1 rounded-full'>We're hiring!</span>
  <a href="/" class="text-purple-700 hover:underline flex items-center space-x-1">
    <span> &nbsp; Join our team</span>
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.83398 7.99998H13.1673M13.1673 7.99998L8.50065 3.33331M13.1673 7.99998L8.50065 12.6666" stroke="#9E77ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </a>
</button>
<br />
<p className='text-center text-lg md:text-6xl px-4 md:px-28 font-medium leading-loose'>Get your Custom <span className='text-purple-600'> CRM, Website </span>, and</p>
<br />
<p className='text-center text-lg md:text-6xl px-4 md:px-28 font-medium' ><span className='text-purple-600'>Software</span> today!</p>

<br />
<br />
<p className='text-center text-gray-500 text-lg'>
We're a Web and software development company that loves finding  solutions to </p>
<p className='text-center text-gray-500 text-lg'> complicated problems! By creating fast and efficient mobile and web applications, we </p>
 <p className='text-center text-gray-500 text-lg'> will help your business grow.</p>

<br /><br />
<div className='flex justify-center'>
<button className='bg-purple-600 text-white py-2 px-4 rounded-md hidden md:inline-block'>Contact us</button>
</div>
<br />
<br />

<img src={pattern2} alt="pattern of geometric symbols" className='w-auto mx-auto' />

      </section>
    </div>
  );
};



export default Header;