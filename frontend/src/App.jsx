// import { useEffect, useState } from "react";
// import CarModel from "./components/CarModel";
// import AboutSection from "./Pages/AboutSection";
// import ExperienceSection from "./Pages/ExperienceSection";
// import SkillsSection from "./Pages/SkillsSection";
// import ProjectsSection from "./Pages/ProjectsSection";
// import ContactSection from "./Pages/ContactSection";
// import Flag from "./components/Flag";
// import Parking from "./components/Parking";
// import tree from "/tree.png"
// import Computer from "./components/Computer";
// import welcome from "/Welcome.jpg"


// const App = () => {
//   const [showContent, setShowContent] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [showAnimation, setShowAnimation] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const windowHeight = window.innerHeight;
//       const documentHeight =
//         document.documentElement.scrollHeight - windowHeight;
//       const scrolled = window.scrollY;
//       const progress = (scrolled / documentHeight) * 100;
//       setProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const startJourney = () =>{
//     setShowAnimation(true)

//     setTimeout(()=>{
//       setShowAnimation(false)
//       setShowContent(true);
   
  

//     },5000)

  
//   }

//   const sections = [
//     { id: "about", component: <AboutSection /> },
//     { id: "experience", component: <ExperienceSection /> },
//     { id: "skills", component: <SkillsSection /> },
//     { id: "projects", component: <ProjectsSection /> },
//     { id: "contact", component: <ContactSection /> },
//   ];


//   const carsection = [
//  {component: <Flag/>},
//  {component: <Parking/>}


//   ]

//   return (
//     <div className="">
   
//       {!showContent && !showAnimation ? (
//         <div
//           id="intro"
//           className="fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity"
//         >
//           <div className="text-center">
//             <div className="relative w-[600px] h-[400px] mb-8">
//      <img
//                 src={welcome}
//                 alt="3D Keyboard"
//                 className="w-full h-full object-contain"
//               /> *
   
//             </div>
//             <h2 className="text-2xl font-bold mb-4">
//               Press Enter to Begin Your Journey
//             </h2>
//             <button
//               onClick={startJourney}
//               className="rounded-lg bg-indigo-600 text-white px-8 py-3 text-lg font-medium hover:bg-indigo-700 transition-colors"
//             >
//               <i className="fas fa-keyboard mr-2"></i>Press Enter
//             </button>
//           </div>
//         </div>
//       ): <Computer/>}

//       {!showAnimation && showContent && (
//         <main>
//           {/* nav */}
//           <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200 px-4 py-3">
//             <div className="max-w-7xl mx-auto flex justify-between">
//               <a href="#" className="text-xl font-bold text-indigo-600">
//                 Portfolio
//               </a>
//               <div className="flex space-x-6">
//                 {["About", "Experience", "Skills", "Projects", "Contact"].map(
//                   (item) => (
//                     <a
//                       key={item}
//                       href={`#${item.toLowerCase()}`}
//                       className="text-gray-600 hover:text-indigo-600"
//                     >
//                       {item}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//           </nav>
//           {/* main section */}
//           <div className="w-[98vw] flex flex-col justify-center items-center p-4">
//             {sections.map(({ id, component }) => (
//               <div
//                 key={id}
//                 id={id}
//                 className="min-h-screen w-full flex  px-4 py-16  "
//               >
//                 <div className="mx-auto">{component}</div>
               
//               </div>
//             ))}
//           </div>
//               {/* main section */}



//     {/* car section */}         
//      <div
//             id="car-indicator"
//             className="fixed bottom-8 left-0 right-0 z-40 px-8"
//           >
//             <div className="max-w-full mx-auto px-4">
//               <div className="bg-white/80 backdrop-blur-md  p-4 ">
//                 <div className="relative h-8 bg-gray-500 ">
//                   <div
//                     id="car"
//                     className="absolute -top-[100px] -left-80 transition-all duration-300"
//                     style={{ left: `${progress}%` }}
//                   >
//                     <CarModel />
//                   </div>

//                   <div className="absolute top-8 left-0 right-0 flex justify-between text-sm text-gray-600">
//                     {carsection.map(({  component}) => (
//                       <div  className="w-full">
//                         {component}
   
//                       </div>
                    
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//               {/* car section */}        
//         </main>
//       )}
//     </div>
//   );
// };

// export default App;








import { useEffect, useState } from "react";
import CarModel from "./components/CarModel";
import AboutSection from "./Pages/AboutSection";
import ExperienceSection from "./Pages/ExperienceSection";
import SkillsSection from "./Pages/SkillsSection";
import ProjectsSection from "./Pages/ProjectsSection";
import ContactSection from "./Pages/ContactSection";
import Flag from "./components/Flag";
import Parking from "./components/Parking";
import Computer from "./components/Computer";
import welcome from "/Welcome.jpg";
import profile from "/profile-img.png"

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showComputer, setShowComputer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startJourney = () => {
    setShowComputer(true);
    setTimeout(() => {
      setShowComputer(false);
      setShowContent(true);
    },4000);
  };

  const sections = [
    { id: "about", component: <AboutSection /> },
    { id: "experience", component: <ExperienceSection /> },
    { id: "skills", component: <SkillsSection /> },
    { id: "projects", component: <ProjectsSection /> },
    { id: "contact", component: <ContactSection /> },
  ];

  return (
    <div>
      {!showContent  &&  (
        <div
          id="intro"
          className="fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity  "
        >
          <div className="text-center">
          {showComputer &&
      <div className="w-[100vw]">

<Computer />
      </div>      
      }
            <div className="relative lg:w-[600px] lg:h-[400px] mb-2">
              <img
                src={profile}
                alt="Welcome Image"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-2xl font-bold mb-4">
              <p>
              Hello I'am Sanjay Gawai</p>
              <p>Press Enter to Begin My Journey</p>
            </div>
            <button
              onClick={startJourney}
              className="rounded-lg bg-indigo-600 text-white px-8 py-3 text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              <i className="fas fa-keyboard mr-2"></i>Press Here
            </button>
          </div>
        </div>
      )}



      {showContent && (
        <main>
          {/* nav */}
          <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200 px-4 py-5 ">
            <div className="max-w-7xl mx-auto flex justify-between">
              <a href="#" className="font-bold lg:text-3xl text-indigo-600">
                Sanjay
              </a>
              <div className="flex space-x-6">
                {["About", "Experience", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600  text-sm hover:text-indigo-600"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </nav>
          {/* main section */}
          <div className="w-[98vw] flex flex-col justify-center items-center p-4">
            {sections.map(({ id, component }) => (
              <div
                key={id}
                id={id}
                className="min-h-screen w-full flex px-4 py-16"
              >
                <div className="mx-auto">{component}</div>
              </div>
            ))}
          </div>
          {/* car section */}
          <div id="car-indicator" className="fixed bottom-8 left-0 right-0 z-40 px-8 w-full">
            <div className="max-w-full mx-auto px-4">
              <div className="bg-white/80 backdrop-blur-md p-4">
                <div className="relative h-8 bg-gray-500">
                  <div
                    id="car"
                    className="absolute -top-[70px]  transition-all duration-300"
                    style={{ left: `calc(${progress}% - 150px)` }}
                  >
                    <CarModel className="border-2" />
                  </div>
                  <div className="absolute top-8 left-0 right-0 flex justify-between text-sm text-gray-600 w-full">
                    <Flag />
                    <Parking />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;





{
  /* <div
                    id="progress-bar"
                    className="absolute left-0 top-0 h-full bg-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div> */
}

{
  /* <div
                    id="car"
                    className="absolute -top-3 -left-4 transition-all duration-300"
                    style={{ left: `${progress}%` }}
                  >
                    <i className="fas fa-car text-indigo-600 text-2xl"></i>
                   <CarModel className="" />
                  </div> */
}
