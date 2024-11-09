"use client"
import Image from "next/image";
import mainSectionImage from "../../public/assets/images/front-car.png";
import suggestionCar1 from "../../public/assets/images/suggestion-car-1.png";
import suggestionCar2 from "../../public/assets/images/suggestion-car-2.png";
import suggestionCar3 from "../../public/assets/images/suggestion-car-4.png";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
export default function Home() {

  
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const suggestionCarItems = gsap.utils.toArray('.suggestion-cars .item');
      gsap.fromTo(".main-section-layout .image-container ",
        
        {
        scale:0.1,
       
        transformOrigin: "center center" 
       },
        {
          scale:1,
          ease: "power3.out" ,
          duration:3,
          onComplete:()=>{
            gsap.fromTo(".main-section-text-bg",{
              y:100
            },{
              opacity:0.5,
              y:0,
              duration:3
            }
          )
            gsap.to("nav",{
              top:15,
              opacity:1,
              duration:2,
              ease: "power3.out" 
            }
          )
            gsap.to(" .main-sec-bg-gradiant",{
              opacity:1,
             delay:1.5,
              duration:2
            }
          )
            gsap.to(" .suggestion-cars .suggestions-title",{
              opacity:1,
             
              duration:2
            }
          )
          gsap.fromTo(
            suggestionCarItems,
            {  y: 80 }, 
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.8,
              
            }
          );
          gsap.fromTo(
            ".car-details-box",
            {  x: 500 }, 
            {
              opacity: 2,
              x: 0,
              duration: 1,
              
            }
          );

          }
        }
      )
    }
  },[]);
  return (

    <main className="mt-[80px] md:mt-[120px] ">
      <section className="main-section-layout flex flex-col lg:flex-row over h-fit md:min-h-[82.9vh] relative">
      <div className="suggestion-cars lg:flex hidden gap-2 flex-col absolute w-[300px] top-3 left-0">
          <div className="flex justify-between mb-1 suggestions-title opacity-0  ">

          <h3 className="text-white">Suggestions</h3>
          <h3 className="text-white ">See More <i className="fa-solid fa-angle-right text-[13px]"></i></h3>
          </div>
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar1} className="w-[70px]"/></div>
      <div className="name flex-grow text-start ps-4"><span>AUDi Q3</span> <span>2024</span></div>
      <div className="cta-icon"><i className="fa-solid fa-angle-right"></i></div>
        </div>
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar2} className="w-[70px]"/></div>
      <div className="name flex-grow text-start ps-4"><span>Mercedes GT</span> <span>2024</span></div>

      
      <div className="cta-icon"><i className="fa-solid fa-angle-right"></i></div>
        </div>
        
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar3} className="w-[70px]"/></div>
      <div className="name flex-grow text-start ps-4"><span>Maserati QP</span> <span>2020</span></div>
      <div className="cta-icon"><i className="fa-solid fa-angle-right"></i></div>
        </div>
        </div>
        <div className="main-section-text-bg absolute left-[50%]  translate-x-[-50%] top-0 z-[1] lg:top-[-5%] lg:left-[50%] opacity-0 md:top-[2%] md:left-[25%] ">
          <h2 className="lg:text-[94px] text-[74px]  text-stroke font-bold dark:dark text-stroke-light text-nowrap  ">BMW X5</h2>
        </div>
        <div className="  flex justify-center lg:justify-center items-center relative md:justify-between md:items-start   w-full md:flex-row flex-col md:gap-0 gap-5  ">
        <div className="   lg:w-[55%] relative md:w-[65%] lg:ml-0  md:ml-[-55px]  ">
          <div className="image-container  w-full h-fit  relative   z-[4] lg:mt-[10%] mt-[80px]  ">

       
        <Image src={mainSectionImage} alt="car image" className="image   w-[100%]"  />
        </div>
        <div className="main-sec-bg-gradiant absolute left-0 bottom-0 blur-[100px] opacity-0  w-full  rounded-3xl h-[20%] bg-[#030303] dark:bg-[#ffffff69]"></div>
        </div>

        <div className="boxs-container gap-2 flex md:flex-col flex-row lg:static   md:relative">
        <div className=" lg:absolute static  car-details-box lg:right-0 opacity-0  md:right-0  md:top-[0%] w-[50%]  min-w-[200px]  md:w-[280px] lg:top-[2%] bottom-[-120%] h-[197px] mt-[25px] md:h-[200px] bg-[#dfdedea7] rounded-lg   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white flex justify-between flex-wrap gap-1 md:gap-2 items-center ">
          <div className="item w-[48%] md:w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-car-rear md:text-[22px] text-[18px]"></i>
          <span className="md:font-bold font-medium text-[14px] md:text-[18px] mt-1">235km</span>
          <span className="md:text-[12px] text-[10px] text-[#2a2a2a] dark:text-[#d1d1d1]">Top Speed</span>
          </div>
          <div className="item w-[48%] md:w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-road md:text-[22px] text-[18px]"></i>
          <span className="md:font-bold font-medium text-[14px] md:text-[18px] mt-1">306hp</span>
          <span className="md:text-[12px] text-[10px] text-[#2a2a2a] dark:text-[#d1d1d1]">Horse Power</span>
          </div>
          <div className="item w-[48%] md:w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-stopwatch md:text-[22px] text-[18px]"></i>
          <span className="md:font-bold font-medium text-[14px] md:text-[18px] mt-1">6.5s</span>
          <span className="md:text-[12px] text-[10px] text-[#2a2a2a] dark:text-[#d1d1d1]">0-100 km/h</span>
          </div>
          <div className="item w-[48%] md:w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-weight-hanging md:text-[22px] text-[18px]"></i>
          <span className="md:font-bold font-medium text-[14px] md:text-[18px] mt-1">2,785kg</span>
          <span className="md:text-[12px] text-[10px] text-[#2a2a2a] dark:text-[#d1d1d1]">Gross Weight</span>
          </div>
        </div>
        <div className="suggestion-cars lg:hidden flex gap-2 flex-col w-[50%] min-w-fit">
          <div className="flex justify-between suggestions-title opacity-0 ">

          <h3 className="text-white md:text-[16px] text-[12px]">Suggestions</h3>
          <h3 className="text-white md:text-[16px] text-[12px] ">See More <i className="fa-solid fa-angle-right text-[13px]"></i></h3>
          </div>
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar1} className="md:w-[70px] max-w-[40px]"/></div>
      <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>AUDi Q3</span> <span className="md:block hidden">2024</span></div>
      <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
        </div>
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar2} className="md:w-[70px] max-w-[40px]"/></div>
      <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>Mercedes GT</span> <span className="md:block hidden">2024</span></div>

      
      <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
        </div>
        
        <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white">
      <div className="image"><Image alt="suggestion car" src={suggestionCar3} className="md:w-[70px] max-w-[40px]"/></div>
      <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>Maserati QP</span> <span className="md:block hidden">2020</span></div>
      <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
        </div>
        </div>
        </div>

        </div>
        
      </section>
    </main>

  );
}
