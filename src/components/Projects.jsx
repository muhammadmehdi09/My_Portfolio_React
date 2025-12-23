import React from 'react'
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import Project3 from '../assets/Project3.jpg'

const Projects = () => {
  return (
    <section className='mx-auto p-10 bg-[#25b79f]' id="projects">
      <div className="mx-auto">
        <h1 className='text-[#07374a] text-[2.5rem] font-semibold text-center mb-10'>Projects</h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 w-fit mx-auto mb-44">
        <div className="bg-[#07374a] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src={Project1} className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">TextUtils</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://textutilsx.vercel.app" className="h-fit bg-green-500 rounded-xl text-center px-5 py-3 text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/textutils/" className="h-fit pb-3 pt-2 text-center bg-red-500 rounded-xl text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Source Code</button>
            </a>
          </div>
        </div>
        <div className="bg-[rgb(7,55,74)] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src={Project2} className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">Calculator</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://mehdi-calculator.vercel.app" className="h-fit bg-green-500 rounded-xl text-center px-5 py-3 text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/Calculator" className="h-fit pb-3 pt-2 text-center bg-red-500 rounded-xl text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Source Code</button>
            </a>
          </div>
        </div>
        <div className="bg-[#07374a] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src={Project3} className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">Weather Forecast App</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://mehdi-weather-app.vercel.app" className="h-fit bg-green-500 rounded-xl text-center px-5 py-3 text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/Weather-App" className="h-fit pb-3 pt-2 text-center bg-red-500 rounded-xl text-[#f0f0e6] font-semibold text-xl m-1">
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Projects




