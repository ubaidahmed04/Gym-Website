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
        className="mt-6 bg-darkgray text-orange hover:bg-transparent hover:text-orange border-2 border-orantext-orange transition-all  font-semibold text-sm rounded-md px-6 py-2.5"
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

 
</div>
  )
}

export default HeroSection