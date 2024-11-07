import Image from "next/image";
import mainSectionImage from "../../public/assets/images/front-car.png"
import Link from "next/link";
export default function Home() {
  return (

    <main className="mt-28">
      <section className="main-section-layout flex flex-col-reverse lg:flex-row over lg:h-[80vh] relative ">
        
       
        <div className="headline lg:w-[25%] w-full  ">
        <h1 className="text-center lg:text-start dark:text-white text-black lg:mt-[50px] font-bold text-[30px]"><span className="text-nowrap">Your Journey Starts Here.</span> Let’s Make It <span className="text-[#6A0DAD]">Epic</span></h1>
        <Link href="#"><span  className=" mx-auto font-bold mt-5 items-center w-fit text-white dark:text-black text-[20px] dark:bg-white bg-black flex rounded-full justify-center px-4 py-2">Get started <i className="fa-solid fa-angle-right ms-1  text-[20px] mb-[-.5px]"></i></span></Link>
        
        </div>
        <div className="image flex-grow flex justify-center lg:justify-between relative mt-16 mb-[300px] lg:mb-0">
        <div className="bg-gradiant absolute bottom-[0%] blur-[100px] left-0  w-full lg:w-[70%] rounded-3xl h-[20%] bg-[#030303] dark:bg-[#ffffff69]"></div>
        <div className="text-bg absolute left-[50%] lg:left-[35%] translate-x-[-50%] top-[-20%] lg:top-[-15%]">
          <h2 className="text-[104px] text-stroke font-bold dark:dark text-stroke-light text-nowrap  ">BMW X5</h2>
        </div>
        <Image src={mainSectionImage} alt="car image" className="relative mt-[50px] lg:z-[1] z-[2]  lg:w-[70%] w-full   " />

        <div className="absolute line-one lg:w-[100px] w-[200px] h-[3px] dark:bg-white bg-black lg:left-[54.5%] lg:top-[50%]  bottom-[0%] lg:z-[2] z-[1] flex items-center rounded-br-sm rotate-[90deg] lg:rotate-0 "><div className="point w-[30px] h-[20px] bg-white rounded-full hidden lg:block blur-[4px] relative left-[-15px] "></div></div>
        <div className="absolute line-two hidden lg:flex w-[80px] h-[3px] dark:bg-white bg-black left-[62.65%] top-[42.6%] z-[2]  items-center justify-end  rotate-[-65deg] rounded-tl-none rounded-full "></div>
        <div className=" absolute  lg:right-0  left-[50%] lg:translate-x-[63%] translate-x-[-50%] car-details-box w-[280px] lg:top-0 bottom-[-80%] lg:mt-[-50px] h-[200px] bg-[#131313] rounded-lg bg-opacity-50 border-[0.3px] border-[#8b8b8b3b] backdrop-blur-xl z-[3] px-4 py-2 text-white flex justify-between flex-wrap gap-2 items-center ">
          <div className="item w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-car-rear text-[22px]"></i>
          <span className="font-bold text-[18px] mt-1">235km</span>
          <span className="text-[12px] text-[#d1d1d1]">Top Speed</span>
          </div>
          <div className="item w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-road text-[22px]"></i>
          <span className="font-bold text-[18px] mt-1">306hp</span>
          <span className="text-[12px] text-[#d1d1d1]">Horse Power</span>
          </div>
          <div className="item w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-stopwatch text-[22px]"></i>
          <span className="font-bold text-[18px] mt-1">6.5s</span>
          <span className="text-[12px] text-[#d1d1d1]">0-100 km/h</span>
          </div>
          <div className="item w-[48%] flex flex-col items-center">
          <i className="fa-solid fa-weight-hanging text-[22px]"></i>
          <span className="font-bold text-[18px] mt-1">2,785kg</span>
          <span className="text-[12px] text-[#d1d1d1]">Gross Weight</span>
          </div>
        </div>

        </div>
        
      </section>
    </main>

  );
}
