import React from "react";
import gallery from "@/assets/images/gallery.jpg";
import Button from "./Button/button";

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
        <Button
        text="SEE MORE"
        href="#"
        className="mb-35"
      />
    </div>
  );
}
