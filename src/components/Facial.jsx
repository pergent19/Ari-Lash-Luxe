import React from 'react'
import facial from "@/assets/images/facial.jpg";

export default function Facial() {
  return (
    <div className="h-screen flex">
      {/* Right Column (40%) */}
      <div
        className="w-[40%] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${facial})` }}
        data-testid="facial-bg"
      >
      </div>
      {/* Left Column (60%) */}
      <div className="w-[60%] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl inter-bold">FACIALS</h2>
        <h2 className="text-3xl text-center romanesco-regular">
            Revitalize your skin with facials designed to <br /> cleanse, hydrate, and restore your natural glow.
        </h2>
        <a
          href="#"
          className="inline-block rounded-md border border-transparent bg-[#C5A43B] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D]"
        >
          BOOK NOW
        </a>
      </div>
    </div>
  )
}
