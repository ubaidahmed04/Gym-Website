import React from 'react'
import HeroImg from '@/public/Images/heroImg.jpg'
import Image from 'next/image'
const HeroSection = () => {
  return (
        <div className="font-sans max-w-6xl mx-auto px-4 sm:px-6 py-4 lg:px-8 z-9999">
  {/* Hero Section */}
  <div className="grid md:grid-cols-2 items-center gap-8">
    {/* Content Section */}
    <div className="text-center md:text-left order-2 md:order-1">
      <h2 className="text-light lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 leading-tight">
        <span className="text-orange">Make</span> Your Body{" "}
        <span className="text-orange">Shape</span> 
      </h2>
      <p className="text-light mt-4 md:mt-6 text-base leading-relaxed">
        Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia
        ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut
        reprehenderit.
      </p>
      <button
        type="button"
        className="mt-6 bg-blue-gray-300 text-orange hover:bg-transparent hover:text-orange border-2 border-orantext-orange transition-all  font-semibold text-sm rounded-md px-6 py-2.5"
      >
        Get Started
      </button>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-3 gap-4 text-center">
        <div>
          <h5 className="text-light font-bold text-xl">10+</h5>
          <p className="text-light">Branches</p>
        </div>
        <div>
          <h5 className="text-light font-bold text-xl">890</h5>
          <p className="text-light">Members</p>
        </div>
        <div>
          <h5 className="text-light font-bold text-xl">250</h5>
          <p className="text-light">Stores</p>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className=" flex justify-center items-center order-1 md:order-2 ">
      <div className="">
        <Image
        height={400}
        width={500}
        src={HeroImg}
          className="rounded-md w-full max-w-[400px] md:max-w-none  z-9999"
          alt="Smart Business"
        />
      </div>
    </div>
  </div>

  {/* Features Section */}
  <div className="grid md:grid-cols-3 gap-6 mt-12">
    {/* Card 1 */}
    <div className="bg-blue-gray-200 p-6 shadow-md rounded-md text-center">
      <div className="bg-blue-100 p-3 inline-block rounded-md mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          {/* Add SVG Path */}
          <path
            d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061..."
          />
        </svg>
      </div>
      <h3 className="text-orange text-xl font-bold mb-2">Customization</h3>
      <p className="text-darkgray text-sm">
        Tailor our product to suit your needs.
      </p>
      <a
        href="#"
        className="text-orange font-bold text-sm hover:underline mt-4 inline-block"
      >
        Learn more
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-blue-gray-200 p-6 shadow-md rounded-md text-center">
      <div className="bg-blue-100 p-3 inline-block rounded-md mb-4">
        {/* Add another SVG Path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11"
          fill="currentColor"
          viewBox="0 0 512.001 512.001"
        >
          <path
            d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30..."
          />
        </svg>
      </div>
      <h3 className="text-orange text-xl font-bold mb-2">Reliability</h3>
      <p className="text-darkgray text-sm">
        Dependable solutions for your business.
      </p>
      <a
        href="#"
        className="text-orange font-bold text-sm hover:underline mt-4 inline-block"
      >
        Learn more
      </a>
    </div>

    {/* Card 3 */}
    <div className="bg-blue-gray-200 p-6 shadow-md rounded-md text-center">
      <div className="bg-blue-100 p-3 inline-block rounded-md mb-4">
        {/* Add another SVG Path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11"
          fill="currentColor"
          viewBox="0 0 512.001 512.001"
        >
          <path d="..." />
        </svg>
      </div>
      <h3 className="text-orange text-xl font-bold mb-2">Support</h3>
      <p className="text-gray-600 text-sm">
        24/7 customer support for your success.
      </p>
      <a
        href="#"
        className="text-orange font-bold text-sm hover:underline mt-4 inline-block"
      >
        Learn more
      </a>
    </div>
  </div>
</div>
  )
}

export default HeroSection