import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { BsBrightnessHigh } from "react-icons/bs";

export default function Dark({ dark, set }) {
  const handleDarkModeToggle = () => {
    set(!dark);
  };

  return (
    <div className='absolute right-5 top-4'>
      <div
        className="dark-mode-switch"
        onClick={handleDarkModeToggle}
        style={{ cursor: 'pointer' }}
      >
        {dark ? (
          <BsBrightnessHigh style={{ width: "25px", height: "25px" }} />
        ) : (
          <MdDarkMode style={{ width: "25px", height: "25px" }} />
        )}
      </div>
    </div>
  );
}
