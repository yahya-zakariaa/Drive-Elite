"use client"
import useSearchBarContext from '@/context/SearchBarContext/searchBarContext'
import React from 'react'


export default function SearchBarLayer() {
    const { setSearchBarIsShow, searchBarIsShow } = useSearchBarContext()

    return (
        <div className="searchBar-layer-container fixed top-[100px] rounded-lg lg:right-[10%] right-[50%] translate-x-[50%] lg:translate-x-0 lg:w-[30%] md:w-[80%] w-[90%] lg:h-[84vh] h-[500px] dark:bg-[#07070783] bg-[#e8e6e6a7] backdrop-blur-3xl z-[9999]  dark:border-[#2f2f2f] border-[.5px] border-[#cecece] pt-16">
            <button onClick={() => { setSearchBarIsShow(false) }} className="close text-white text-[30px] absolute top-3 right-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="12" strokeDashoffset="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.9s" values="12;0" /></path></svg></button>
            <div className="searchInput w-full flex justify-center px-5">
                <input type="text" className='bg-[#ffffffe0] backdrop-blur-xl rounded-lg w-[100%] p-2 placeholder:text-[#000000b9]' placeholder='Search ' />
            </div>

            <div className="result w-full px-5 pt-10 flex justify-center  h-[90%] ">
                <h3 className='text-white text-[24px] font-bold mt-30 '>No Result Much</h3>
            </div>
        </div>
    )
}
