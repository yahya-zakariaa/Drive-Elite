"use client"
import Image from "next/image";
import mainSectionImage from "../../public/assets/images/front-car.png";
import services1 from "../../public/assets/images/services-1.jpg";
import services2 from "../../public/assets/images/services-2.jpg";
import services3 from "../../public/assets/images/services-3.jpg";
import services4 from "../../public/assets/images/services-4.jpeg";
import whyChooseUsIcon1 from "../../public/assets/images/24-hours.png";
import whyChooseUsIcon2 from "../../public/assets/images/drive-safe.png";
import whyChooseUsIcon3 from "../../public/assets/images/calendar.png";
import whyChooseUsIcon4 from "../../public/assets/images/high-speed.png";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Home() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true)

  useEffect(() => {
    setIsLoadingScreen(false)

    if (typeof window !== 'undefined' && isLoadingScreen == false) {
      gsap.registerPlugin(ScrollTrigger);

      const suggestionCarItems = gsap.utils.toArray('.suggestion-cars .item')
      const servicesBoxs = gsap.utils.toArray(".services-boxs .box")
      const whyUsBox = gsap.utils.toArray(".why-us-section .box")

      gsap.fromTo(".main-section .image-container ",

        {
          scale: 0.1,

          transformOrigin: "center center"
        },
        {
          scale: 1,
          ease: "power3.out",
          duration: 3,
          onComplete: () => {
            gsap.fromTo(".main-section-text-bg", {
              y: 100
            }, {
              opacity: 0.5,
              y: 0,
              duration: 3
            }
            )
            gsap.to("nav", {
              top: 15,
              opacity: 1,
              duration: 2,
              ease: "power3.out"
            }
            )
            gsap.to(" .main-sec-bg-gradiant", {
              opacity: 1,
              delay: 1.5,
              duration: 2
            }
            )
            gsap.to(" .suggestion-cars .suggestions-title", {
              opacity: 1,

              duration: 2
            }
            )
            gsap.fromTo(
              suggestionCarItems,
              { y: 80 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.8,

              }
            );
            gsap.fromTo(
              ".car-details-box",
              { x: 500 },
              {
                opacity: 2,
                x: 0,
                duration: 1,

              }
            );

          }
        }
      )

      gsap.to(".services-section-title h2", {
        color: "white",
        scrollTrigger: {
          trigger: ".services-section-title h2",
          start: "-=200 center",
          end: "+=300",
          scrub: true,
        },

      })

      gsap.matchMedia().add("(min-width: 1020px)", () => {
        gsap.fromTo(servicesBoxs, {
          x: -500,
        }, {
          x: 0,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".services-section",
            start: "+=50 top",
            end: "+=1000",
            pin: true,
            scrub: true,


          },
        })
        gsap.to(".why-us-section-title h2", {
          color: "white",
          scrollTrigger: {
            trigger: ".why-us-section-title h2",
            start: "top center",
            end: "+=200",
            scrub: true,
          },

        })
        gsap.fromTo(whyUsBox, {
          y: 500,
        }, {
          y: 0,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".why-us-section",
            start: "top top",
            end: "+=1000",
            pin: true,
            scrub: true,


          },
        })
      });
      gsap.matchMedia().add("(max-width: 1020px)", () => {
        gsap.fromTo(servicesBoxs, {
          x: -500,
        }, {
          x: 0,
          opacity: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".services-section",
            start: "top top",
            end: "bottom bottom",
            scrub: true,


          },
        })
        gsap.to(".why-us-section-title h2", {
          color: "white",
          scrollTrigger: {
            trigger: ".why-us-section-title h2",
            start: "-=150 center",
            end: "+=200",
            scrub: true,
          },

        })
        gsap.fromTo(whyUsBox, {
          y: 500,
        }, {
          y: 0,
          opacity: 1,
          stagger: 2,
          scrollTrigger: {
            trigger: ".why-us-section",
            start: "-=200 top",
            end: "bottom bottom",
            scrub: true,


          },
        }


        )
      });




    }
  }, [isLoadingScreen]);

  if (isLoadingScreen) {

    return (
      <div className="loading-screen absolute top-0 left-0 right-0 w-full h-full  z-[999999] bg-[#3333] flex justify-center items-center text-white">
        <span className="loader">DriveElite</span>
      </div>
    )
  }
  return (

    <main className="mt-[80px] md:mt-[120px] ">
      <section className="main-section flex flex-col lg:flex-row over h-fit md:min-h-[82.9vh] relative">
        <div className="suggestion-cars lg:flex hidden gap-2 flex-col absolute w-[300px] top-3 left-0">
          <div className="flex justify-between mb-1 suggestions-title opacity-0  ">

            <h3 className="text-white">Suggestions</h3>
            <h3 className="text-white ">See More <i className="fa-solid fa-angle-right text-[13px]"></i></h3>
          </div>
          <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
            <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-1.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="w-[70px]" /></div>
            <div className="name flex-grow text-start ps-4"><span>AUDi Q3</span> <span>2024</span></div>
            <div className="cta-icon"><i className="fa-solid fa-angle-right"></i></div>
          </div>
          <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
            <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-2.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="w-[70px]" /></div>
            <div className="name flex-grow text-start ps-4"><span>Mercedes GT</span> <span>2024</span></div>


            <div className="cta-icon"><i className="fa-solid fa-angle-right"></i></div>
          </div>

          <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-4 py-2 text-[#1e1e1e] dark:text-white">
            <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-1.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="w-[70px]" /></div>
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


              <Image src={mainSectionImage} alt="car image" className="image   w-[100%]" />
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
                <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-1.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="md:w-[70px] max-w-[40px]" /></div>
                <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>AUDi Q3</span> <span className="md:block hidden">2024</span></div>
                <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
              </div>
              <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white">
                <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-2.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="md:w-[70px] max-w-[40px]" /></div>
                <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>Mercedes GT</span> <span className="md:block hidden">2024</span></div>


                <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
              </div>

              <div className="item opacity-0 h-[60px] bg-[#dfdedea7] items-center rounded-lg flex justify-between   dark:bg-[#111111b9] border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[6] px-2 md:px-4 py-2 text-[#1e1e1e] dark:text-white">
                <div className="image"><Image alt="suggestion car" src={"https://ik.imagekit.io/qtav51o8ld/suggestion-car-3.png?updatedAt=1731240298202&tr=f-webp&tr=q-60&tr=w-70"} width={"70"} height={"70"} className="md:w-[70px] max-w-[40px]" /></div>
                <div className="name flex-grow text-start text-nowrap ps-1 md:text-[16px] text-[14px]"><span>Maserati QP</span> <span className="md:block hidden">2020</span></div>
                <div className="cta-icon md:block hidden"><i className="fa-solid fa-angle-right "></i></div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="services-section lg:h-[100vh] h-fit pb-20  mb-10 w-full   flex justify-between pt-40">
        <div className="services-section-layout  h-full  w-[100%]">
          <div className="services-section-title flex justify-center mb-20 transition-all duration-200">
            <h2 className="md:text-[45px] text-[38px] text-center text-stroke dark:dark dark:text-stroke-light font-bold  transition-all duration-300 ">What We Offer ?</h2>
          </div>
          <div className="services-boxs flex lg:flex-row flex-col flex-wrap gap-7 justify-center items-center">
            <div className="box opacity-0 transition-all duration-700 dark:bg-[#111111b9] p-2 gap-x-4 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7] lg:w-[45%] w-full h-[200px] rounded-lg border dark:border-[#2f2f2f] flex justify-between items-center">
              <div className="box-image min-w-[150px] w-[40%] h-full  overflow-hidden ">
                <Image src={services1} alt="services img" loading="lazy" className="object-cover w-full rounded-lg h-full shadow-xl " />
              </div>
              <div className="box-content flex-grow h-full flex flex-col">
                <h3 className="dark:text-[#fff] text-[#202020] font-bold md:font-medium text-[16px] md:text-[20px] mb-1 text-nowrap">Airport Transfer</h3>
                <p className="dark:text-[#dededede] text-[#202020] mb-[13px] md:text-[17px] text-[15px] line-clamp-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt corrupti in eius vel. Quidem provident magnam veritatis laboriosam nam.</p>
                <button className="dark:bg-[#efefef] bg-black px-4 py-1 rounded-md w-fit border border-[#8b8b8b3b] text-[#fff] dark:text-[#1e1e1e] font-medium ">Get Start</button>
              </div>
            </div>
            <div className="box opacity-0 transition-all  duration-700 dark:bg-[#111111b9] p-2 gap-x-4 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7] lg:w-[45%] w-full h-[200px] rounded-lg border dark:border-[#2f2f2f] flex justify-between items-center">
              <div className="box-image min-w-[150px] w-[40%] h-full  overflow-hidden ">
                <Image src={services2} alt="services img" loading="lazy" className="object-cover w-full rounded-lg h-full shadow-xl " />
              </div>
              <div className="box-content flex-grow h-full flex flex-col">
                <h3 className="dark:text-[#fff] text-[#202020] font-bold md:font-medium text-[14px] md:text-[20px] mb-1 text-nowrap">Business  Transfer</h3>
                <p className="dark:text-[#dededede] text-[#202020] mb-[13px] md:text-[17px] text-[15px] line-clamp-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt corrupti in eius vel. Quidem provident magnam veritatis laboriosam nam.</p>
                <button className="dark:bg-[#efefef] bg-black px-4 py-1 rounded-md w-fit border border-[#8b8b8b3b] text-[#fff] dark:text-[#1e1e1e] font-medium ">Get Start</button>
              </div>
            </div>
            <div className="box opacity-0 transition-all duration-700 dark:bg-[#111111b9] p-2 gap-x-4 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7] lg:w-[45%] w-full h-[200px] rounded-lg border dark:border-[#2f2f2f] flex justify-between items-center">
              <div className="box-image min-w-[150px] w-[40%] h-full  overflow-hidden ">
                <Image src={services3} alt="services img" loading="lazy" className="object-cover w-full rounded-lg h-full shadow-xl  " />
              </div>
              <div className="box-content flex-grow h-full flex flex-col">
                <h3 className="dark:text-[#fff] text-[#202020] font-bold md:font-medium text-[16px] md:text-[20px] mb-1 text-nowrap">Wedding Car</h3>
                <p className="dark:text-[#dededede] text-[#202020] mb-[13px] md:text-[17px] text-[15px] line-clamp-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt corrupti in eius vel. Quidem provident magnam veritatis laboriosam nam.</p>
                <button className="dark:bg-[#efefef] bg-black px-4 py-1 rounded-md w-fit border border-[#8b8b8b3b] text-[#fff] dark:text-[#1e1e1e] font-medium ">Get Start</button>
              </div>
            </div>
            <div className="box opacity-0 transition-all duration-700 dark:bg-[#111111b9] p-2 gap-x-4 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7] lg:w-[45%] w-full h-[200px] rounded-lg border dark:border-[#2f2f2f] flex justify-between items-center">
              <div className="box-image min-w-[150px] w-[40%] h-full  overflow-hidden ">
                <Image src={services4} alt="services img" loading="lazy" className="object-cover w-full rounded-lg h-full shadow-xl " />
              </div>
              <div className="box-content flex-grow h-full flex flex-col">
                <h3 className="dark:text-[#fff] text-[#202020] font-bold md:font-medium text-[16px] md:text-[20px] mb-1 text-nowrap">Car Trip</h3>
                <p className="dark:text-[#dededede] text-[#202020] mb-[13px] md:text-[17px] text-[15px] line-clamp-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt corrupti in eius vel. Quidem provident magnam veritatis laboriosam nam.</p>
                <button className="dark:bg-[#efefef] bg-black px-4 py-1 rounded-md w-fit border border-[#8b8b8b3b] text-[#fff] dark:text-[#1e1e1e] font-medium ">Get Start</button>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="why-us-section lg:h-[100vh] h-fit w-full lg:pt-[120px] pt-[50px] ">
        <div className="why-us-section-title flex justify-center mb-20 transition-all duration-200">
          <h2 className="md:text-[45px] text-[35px] text-center text-stroke dark:dark dark:text-stroke-light font-bold  transition-all duration-500 ">Why Choose Us ?</h2>
        </div>
        <div className="boxs-container flex  justify-between lg:flex-row flex-col lg:gap-0 gap-4">
          <div className="box  transition-all opacity-0 lg:w-[24%] w-full lg:h-[300px] md:h-[210px] h-[280px] duration-700 dark:bg-[#111111b9] p-2 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7]  rounded-lg border dark:border-[#2f2f2f] text-white ">
            <div className="icon  w-full flex justify-center lg:pt-5 pt-3"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93c0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95M11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.2 8.2 0 0 1 11 4zM4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.19-1.42.75-2.77 1.63-3.9zM6 8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2zm6 0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8zM2 13c.2 1.95.97 3.8 2.22 5.32l1.42-1.42A8.2 8.2 0 0 1 4 13zm5.11 5.37l-1.43 1.42A10.04 10.04 0 0 0 11 22v-2a8.06 8.06 0 0 1-3.89-1.63"></path></svg>
            </div>
            <div className="title w-full flex items-center justify-center mt-2">
              <h3 className="font-bold text-[22px]">24/7 Service</h3>
            </div>
            <div className="content mt-1">
              <p className="text-center text-balance text-[17px] text-[#dfdfdf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti magnam quod. Totam nesciunt voluptas eum magni voluptatem ipsam saepe.</p>
            </div>
          </div>
          <div className="box  transition-all opacity-0 lg:w-[24%] w-full lg:h-[300px] md:h-[210px] h-[280px] duration-700 dark:bg-[#111111b9] p-2 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7]  rounded-lg border dark:border-[#2f2f2f] text-white ">
            <div className="icon  w-full flex justify-center lg:pt-5 pt-3"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48"><defs><mask id="ipSProtect0"><g fill="none" strokeLinejoin="round" strokeWidth={2}><path fill="#fff" stroke="#fff" d="M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"></path><path stroke="#000" strokeLinecap="round" d="m15 23l7 7l12-12"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSProtect0)"></path></svg>
            </div>
            <div className="title w-full flex items-center justify-center mt-2">
              <h3 className="font-bold text-[22px]">Safe and Secure</h3>
            </div>
            <div className="content mt-1">
              <p className="text-center text-balance text-[17px] text-[#dfdfdf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti magnam quod. Totam nesciunt voluptas eum magni voluptatem ipsam saepe.</p>
            </div>
          </div>
          <div className="box  transition-all  opacity-0 lg:w-[24%] w-full lg:h-[300px] md:h-[210px] h-[280px] duration-700 dark:bg-[#111111b9] p-2 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7]  rounded-lg border dark:border-[#2f2f2f] text-white ">
            <div className="icon  w-full flex justify-center lg:pt-5 pt-3"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><mask id="lineMdSpeed0"><path fill="none" stroke="#fff" strokeDasharray="56" strokeDashoffset="56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="56;0" /></path><g transform="rotate(-100 12 14)"><path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.4s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z" /></path><path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.4s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z" /></path><animateTransform fill="freeze" attributeName="transform" begin="0.8s" dur="0.6s" type="rotate" values="-100 12 14;45 12 14" /></g></mask><rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeed0)" /></svg>
            </div>
            <div className="title w-full flex items-center justify-center mt-2">
              <h3 className="font-bold text-[22px]">Fast driver</h3>
            </div>
            <div className="content mt-1">
              <p className="text-center text-balance text-[17px] text-[#dfdfdf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti magnam quod. Totam nesciunt voluptas eum magni voluptatem ipsam saepe.</p>
            </div>
          </div>
          <div className="box  transition-all opacity-0 lg:w-[24%] w-full lg:h-[300px] md:h-[210px] h-[280px] duration-700 dark:bg-[#111111b9] p-2 border-[#8b8b8b3b] shadow-xl backdrop-blur-xl bg-[#dfdedea7]  rounded-lg border dark:border-[#2f2f2f] text-white ">
            <div className="icon  w-full flex justify-center lg:pt-5 pt-3"><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28c-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62" /><circle cx="9" cy="13" r="1" fill="currentColor" /><circle cx="15" cy="13" r="1" fill="currentColor" /><path fill="currentColor" d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.07 8.07 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47" /></svg>
            </div>
            <div className="title w-full flex items-center justify-center mt-2">
              <h3 className="font-bold text-[22px]">Costumer Service</h3>
            </div>
            <div className="content mt-1">
              <p className="text-center text-balance text-[17px] text-[#dfdfdf]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti magnam quod. Totam nesciunt voluptas eum magni voluptatem ipsam saepe.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
