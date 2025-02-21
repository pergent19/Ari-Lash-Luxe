import React from 'react';
import landing from '@/assets/images/landing.jpg';

export default function Landing() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="flex flex-col justify-center items-start h-full pl-10 space-y-8">
          <p className="text-white text-[30px] sm:text-[40px]  md:text-[20px] inter-bold">
            WELCOME TO THE NEW ERA
          </p>
          <h1 className="text-white text-[40px] sm:text-[60px] md:text-[52px] inter-bold">
            LASHES IN MINUTES, <br /> NOT HOURS
          </h1>
          <a
            href="#"
            className="inline-block rounded-md border border-transparent bg-[#C5A43B] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D]"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </>
  );
}
