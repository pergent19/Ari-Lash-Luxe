import React from "react";
import lash from "@/assets/images/lash.jpg";
import Button from "./Button/button";

export default function Lash() {
  return (
    <div className="h-screen flex">
      {/* Left Column (40%) */}
      <div className="w-[40%] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl inter-bold">LASH EXTENSION</h2>
        <h2 className="text-3xl text-center romanesco-regular">
          Enhance your beauty with lush, customized <br /> lash extensions for a
          flawless look.
        </h2>
        <Button
          text="BOOK NOW"
          href="#"
        />
      </div>

      {/* Right Column (60%) */}
      <div
        data-testid="lash-bg"
        className="w-[60%] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lash})` }}
      >
      </div>
    </div>
  );
}
