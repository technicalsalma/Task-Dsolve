import React from 'react';
import Victor from '../../images/Vector.png'
import Correction from "../../images/correction.png";
import Rectangle from '../../images/Rectangle 9.png'


const Header = () => {
  return (
    <div className='mx-7'>
      <div className='ml-5 mt-11'>
        <img src={Victor} alt=''></img>
      </div>
      <div className='flex justify-between pt-7 text-white'>
        <h1 className=''>Paid for Service</h1>
        <h1>-₹180</h1>
      </div>

      <div>
        <div className='flex text-white py-3.5'>
          <img className='h-5 bg-sky-700 p-1 rounded-full' src={Correction} alt=''></img>
          <h1 className='pl-1'>Solved | 25 Jan 22, 8:12 pm</h1>
        </div>
        <div className='flex text-white pb-4'>
          <h4>Order ID: DLD23848473212232</h4>
        </div>
        <hr className='' />
      </div>

      {/* main section   */}
      <div>
        <h1>Logo Design: Basic</h1>
        <img src={Rectangle} alt=''></img>
      </div>
      <div className='text-white mt-7'>
        <div className='flex justify-between'>
          <h1>Logo Design: Basic</h1>
          <p>-₹40</p>
        </div>
        <div className='flex justify-between py-2'>
          <h1>Revisions (₹20)</h1>
          <p>-₹40</p>
        </div>
        <div className='flex justify-between mb-3'>
          <h1>Discount Code: GOBRANDED</h1>
          <p>+₹10</p>
        </div>
      </div>
     <hr/>

     <div className='flex justify-between text-white mt-4'>
      <h1>Total</h1>
      <p>-₹180</p>
     </div>

      {/* button */}
     <div className='text-center text-sky-600'>
      <button className='border rounded-full py-2 px-4'>Order Details</button>
     </div>

     <div className='flex text-white py-3.5'>
          <img className='h-5 bg-sky-700 p-1 rounded-full' src={Correction} alt=''></img>
          <h1 className='pl-1'>Need Help</h1>
        </div>

    </div>
  );
};

export default Header;
