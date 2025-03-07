import React from "react";
import gallery from "@/assets/images/gallery.jpg";

export default function Gallery() {
  return (
    <div
      data-testid="gallery-container"
      className="h-screen bg-cover bg-no-repeat bg-[50%_30%] flex flex-col justify-end items-center"
      style={{ backgroundImage: `url(${gallery})` }}
    >
      <div className="text-center mb-5">
        <h2 className="text-3xl text-white inter-bold">GALLERY</h2>
      </div>
      <a
        href="#"
        className="mb-35 inline-block rounded-md border border-transparent bg-[#C5A43B] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D]"
      >
        SEE MORE
      </a>
    </div>
  );
}
