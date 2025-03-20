import React from 'react';

const Button = ({ text, href, className = '' }) => {
  return (
    <a
      href={href}
      className={`inline-block border border-transparent bg-[#C5A43B] px-8 py-3 text-center font-medium text-white hover:bg-[#9E842D] ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;