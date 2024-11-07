"use client"

import React, { useState, useEffect } from 'react';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');  // إضافة class 'dark' للـ html
    } else {
      document.documentElement.classList.remove('dark');  // إزالة class 'dark' من الـ html
    }
    console.log(isDarkMode);
    
  }, [isDarkMode]);

  return (
   
        <button
          onClick={toggleDarkMode}
          className=" dark:text-white text-black text-[22px] md:text-[24px] font-medium rounded-full w-[30px]  "
        >
          {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </button>
     
  );
};

export default ToggleDarkMode;
