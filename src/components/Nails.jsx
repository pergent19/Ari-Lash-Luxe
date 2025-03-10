import React from 'react'
import nails from "@/assets/images/nails.jpg";

export default function Nails() {
  return (
    <div className="h-screen flex">
          {/* Left Column (40%) */}
          <div className="w-[40%] flex flex-col items-center justify-center space-y-4">
            <h2 className="text-3xl inter-bold">NAILS</h2>
            <h2 className="text-3xl text-center romanesco-regular">
                Perfectly polished nails for a flawless, stylish <br/> finish.
            </h2>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-[#C5A43B] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D]"
            >
              BOOK NOW
            </a>
          </div>
    
          {/* Right Column (60%) */}
          <div
            data-testid="nails-bg"
            className="w-[60%] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${nails})` }}
          >
          </div>
        </div>
  )
}
