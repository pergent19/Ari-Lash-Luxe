import React, { useRef } from "react";
import gallery from "@/assets/images/gallery.jpg";
import Button from "./Button/button";
import { motion, useInView } from 'motion/react'; 

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div 
      id="gallery"
      data-testid="gallery-container"
      className="h-screen bg-cover bg-no-repeat bg-[50%_30%] flex flex-col justify-end items-center"
      style={{ backgroundImage: `url(${gallery})` }}
    >
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
      <div className="text-center mb-5">
        <h2 className="text-[24px] md:text-[30px] text-white inter-bold">GALLERY</h2>
      </div>
        <Button
        text="SEE MORE"
        href="#"
        className="mb-35"
      />
      </motion.div>
    </div>
  );
}
