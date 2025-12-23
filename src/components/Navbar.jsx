import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar fixed w-full z-[500]'>
      <div className='navbar-max-w-[1200px] flex justify-between items-center h-16 max-w-[1200px] w-[90%] m-auto'>
        <div className="mt-6 hidden min-[625px]:flex">
          <img src="assets/Logo.png" className="w-12 mr-4" alt='' />
          <h1
            className='font-semibold text-xl inline-block text-[#2798bb] transition-[color] duration-[1s] ease-[ease] delay-[0s] mt-2'>
            Muhammad Mehdi</h1>
        </div>
        <ul className='menu-items flex'>
          <li className="py-4 pr-2"><a href='#home'
            className="no-underline text-[#f0f0e6] sm:text-[1.2rem] text-[1rem] p-[0.3rem] hover:border-b-2 hover:border-b-[#f0f0e6] hover:border-solid">Home</a>
          </li>
          <li className="py-4 px-2"><a href='#about'
            className="no-underline text-[#f0f0e6] sm:text-[1.2rem] text-[1rem] p-[0.3rem] hover:border-b-2 hover:border-b-[#f0f0e6] hover:border-solid">About</a>
          </li>
          <li className="py-4 px-2"><a href='#skills'
            className="no-underline text-[#f0f0e6] sm:text-[1.2rem] text-[1rem] p-[0.3rem] hover:border-b-2 hover:border-b-[#f0f0e6] hover:border-solid">Skills</a>
          </li>
          <li className="py-4 px-2"><a href='#projects'
            className="no-underline text-[#f0f0e6] sm:text-[1.2rem] text-[1rem] p-[0.3rem] hover:border-b-2 hover:border-b-[#f0f0e6] hover:border-solid">Projects</a>
          </li>
          <li className="py-4 px-2"><a href='#contact-me'
            className="no-underline text-[#f0f0e6] sm:text-[1.2rem] text-[1rem] p-[0.3rem] hover:border-b-2 hover:border-b-[#f0f0e6] hover:border-solid">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar