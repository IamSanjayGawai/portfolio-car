import { useEffect } from "react"


const AboutSection = () => {

  useEffect(()=> {


  })


  return(<>


<div className=" w-full   ">
<div className=" flex  justify-center items-center flex-col lg:flex-row">
  <div className="lg:w-2/4">  {/* Left section - Content */}
        <div className="flex flex-col justify-center w-full h-full p-4">
          <h1 className="font-extrabold text-2xl lg:text-2xl mb-4 w-full text-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-2/4 border-t-4 border-black mb-4"></div>
            </div>
            👋 Hello, I am <span className="text-green-400">Sanjay Gawai</span>
            <div className="w-full flex justify-center items-center">
              <div className="w-2/4 border-t-4 border-black mt-5"></div>
            </div>
          </h1>
          <p className="text-2xl lg:text-3xl font-bold text-black text-center break">
            <span>Expert </span>
            <span className="text-green-400 ">Web Design </span>
            <span className="text-green-400 ">Front-End Development,</span>
            <span> Including </span>
            <span className="text-green-400 ">SaaS Solutions </span>
          </p>

          <p className="text-lg lg:text-2xl mb-4 w-full text-center break mt-10">
            I'm an{" "}
            <span className="text-lg lg:text-2xl font-bold text-black">
              Expert Frontend Developer
            </span>{" "}
            with
            <span className="px-4 border-2 rounded-full text-center ml-2 bg-gray-100">
              <span className="text-lg lg:text-2xl font-bold text-black">
                1.7+ Years
              </span>
            </span>{" "}
            of expertise in{" "}
            <span className="text-lg lg:text-3xl font-bold text-black">
              ReactJS
            </span>
            . I create responsive, user-centric web solutions, specializing in{" "}
            <span className="text-lg lg:text-3xl font-bold text-black">
              SaaS
            </span>{" "}
            and{" "}
            <span className="text-lg lg:text-3xl font-bold text-black ">
              eCommerce
            </span>{" "}
            development.
          </p>

          {/* Button Section */}
          <div className="flex justify-center items-center space-x-4 w-full mt-5">
            <a
              href="/SanjayGawai_Resume.pdf"
              download="SanjayGawai_Resume.pdf"
              type="application/pdf"
            >
              
              <button
                type="button"
                className="text-black border-2 hover:border-white xs:text-sm lg:text-2xl   border-black bg-white hover:text-white hover:bg-green-600 focus:ring-4 focus:outline  font-medium rounded-full  px-4 py-2 inline-flex items-center "
              >
                 <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                Download CV
           
              </button>
            </a>
            <a href="#contact">
            <button class="relative inline-flex  xs:text-sm lg:text-2xl items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 rounded-full">
<span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">

                Hire Me
                </span>
              </button>
            </a>
          </div>
        </div>

 </div>
    <div className="lg:w-2/4 flex justify-end">
    <video autoPlay  playsInline className="h-90 w-90   rounded-3xl">
      <source src="/start5.mp4" type="video/mp4" className="h-90 w-90"  />
    </video>
    </div>
</div>
    </div>
  </>)
    
  }
  

  export default AboutSection