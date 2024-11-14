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
      className=" dark:text-white text-black text-[22px] md:text-[24px] font-medium rounded-full min-w-[35px]  flex items-center justify-center "
    >
      {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 20 20"><path fill="currentColor" d="M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.2 8.2 0 0 0-5.41.45a9 9 0 1 0 7 16.58a8.42 8.42 0 0 0 4.29-3.84a5.3 5.3 0 0 1-1.03.69" /></svg>}
    </button>

  );
};

export default ToggleDarkMode;
