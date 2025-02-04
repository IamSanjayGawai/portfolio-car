
import { useEffect, useState } from 'react';
import projectsData from "../data/projectData"
import { Link } from 'react-router-dom';

const ProjectsSection = () => {


  const [loading, setLoading] = useState(true); // Add loading state
  const [showAll, setShowAll] = useState(false);
;
  // const visibleProjects = showAll ? projectsData.projects : projectsData.projects.slice(0, 4)
  const visibleProjects =  projectsData.projects 
  useEffect(() => {
    setLoading(false); // Data is already available locally, so no need to fetch
  }, []);


  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="w-full lg:h-60 sm:h-80 md:h-80 bg-gray-300"></div>
      <div className="p-5">
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
        <div className="flex space-x-2 mb-4">
          <div className="h-6 w-12 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
  
    
  <>
  <section className="bg-white">
        <div
   
   
        
        className="py-8 px-4 lg:px-10">
          <div className=" relative mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">

            
            <h2 className="mb-4 lg:text-5xl font-extrabold text-gray-900 text-4xl">
              My Projects
            </h2>
            <p className="font-light text-black lg:mb-16 sm:text-xl">
              Highlights of my professional projects, demonstrating expertise in
              developing innovative, scalable, and user-focused applications
              across diverse domains, are outlined below.
            </p>
          </div>

          {loading && (
            <h1 className="font-bold">
              Data is loading from the database. It might take some time as we are using the free version of MongoDB.
            </h1>
          )}

          {/* Show skeleton loader when loading */}
          {loading ? (
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
              {Array(4) // Show 4 skeletons as placeholders
                .fill(null)
                .map((_, idx) => <SkeletonCard key={idx} />)}
            </div>
          ) : (
            // Render visible projects
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 w-full">
              {visibleProjects.map((project, index) => (

                  <div key={index} className="rounded-[50px] shadow-lg overflow-hidden flex w-full  xs:flex-col lg:flex-col border-2 ">
                    <div className="w-full border flex justify-center items-center p-6">
                      <a href={project.live_link} target="_blank" rel="noopener noreferrer ">
                        <img
                          className="w-full h-[300px] object-cover rounded-t-lg  "
                          src={project.image}
                          alt={project.name}
                        />
                      </a>
                    </div>
                    <div className="p-5 w-full border">
                      <div className="flex justify-between items-center flex-col">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-black">{project.name}</h3>
                        <p className='line-clamp-3'>{project.description}</p>
                        {/* <div className="relative group">
                          <div
                            onClick={() => handleModalOpen(project.description)}
                            className="rounded-full border bg-white w-10 h-10 flex justify-center items-center cursor-pointer select-none"
                          >
                            <span className="font-bold text-2xl lg:text-3xl">i</span>
                          </div>
                    
                          <div className="absolute w-20 text-center top-12 left-1/2 transform -translate-x-1/2 bg-green-400 text-black text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            My Role
                          </div>
                        </div> */}
                      </div>

                    

                      <div className="flex space-x-4 text-black justify-around">
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black flex justify-center items-center cursor-pointer  px-4 py-2 rounded-full text-2xl lg:text-lg gap-2 "
                        >
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          GitHub
                        </a>
                        <a
                          href={project.live_link}
                          className="hover:text-gray-900 flex justify-center items-center  px-4 py-2 rounded-full text-2xl lg:text-lg  gap-2 "
                        >
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.312.684z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Live
                        </a>
                       
                      </div>
            
                    </div>
                  </div>
    
              ))}
            </div>
          )}

          {/* <button
            onClick={() => setShowAll(!showAll)}
            className="text-black py-2 px-4 mt-6 rounded-md bg-[#d5bc5a] text-xl"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button> */}
        </div>
      </section>
  </>
  )
}

export default ProjectsSection