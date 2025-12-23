import React from 'react'

const Projects = () => {
  return (
    <section className='mx-auto p-10 bg-[#25b79f]' id="projects">
      <div className="mx-auto">
        <h1 className='text-[#07374a] text-[2.5rem] font-semibold text-center mb-10'>Projects</h1>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 w-fit mx-auto mb-44">
        <div className="bg-[#07374a] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src="Images/Project1.jpg" className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">TextUtils</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://textutilsx.vercel.app/"><button
              className="bg-green-500 rounded-xl px-9 py-3 text-[#f0f0e6] font-semibold text-xl m-1">Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/textutils/">
              <button className="bg-red-500 rounded-xl px-7 text-[#f0f0e6] py-3 font-semibold text-xl m-1">Source
                Code</button>
            </a>
          </div>
        </div>
        <div className="bg-[#07374a] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src="Images/Project2.jpg" className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">Calculator</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://mehdi-calculator.vercel.app"><button
              className="bg-green-500 rounded-xl px-9 py-3 text-[#f0f0e6] font-semibold text-xl m-1">Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/Calculator">
              <button className="bg-red-500 rounded-xl px-7 text-[#f0f0e6] py-3 font-semibold text-xl m-1">Source
                Code</button>
            </a>
          </div>
        </div>
        <div className="bg-[#07374a] w-fit p-4 m-5 rounded-md hover:scale-110 duration-500">
          <img src="Images/Project3.jpg" className="w-[450px]" alt='' />
          <p className="font-semibold text-base sm:text-2xl text-center text-[#25b79f] mt-2">Weather Forecast App</p>
          <div className="mx-auto w-fit mt-2 grid grid-cols-1 xl:grid-cols-2">
            <a href="https://mehdi-weather-app.vercel.app"><button
              className="bg-green-500 rounded-xl px-9 py-3 text-[#f0f0e6] font-semibold text-xl m-1">Live Demo</button></a>
            <a href="https://github.com/muhammadmehdi09/Weather-App">
              <button className="bg-red-500 rounded-xl px-7 text-[#f0f0e6] py-3 font-semibold text-xl m-1">Source
                Code</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Projects
