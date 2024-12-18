import React from 'react'
import aboutImg from "@/public/Images/about.jpg"
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="bg-darkgray my-6 py-4 rounded-md">
    <div className="container mx-auto px-6">
        <span className="text-center w-full justify-center py-6 flex ">
            <h1 className='text-xl font-bold text-orange'>  About Us</h1>
        </span>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left mb-12">

            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                <Image
                    src={aboutImg}
                    height={300}
                    width={300}
                    alt="About Image"
                    className="rounded-lg w-96 h-80 object-cover mx-auto lg:mx-0"
                />
            </div>

            <div className="w-full lg:w-2/3 text-light mt-6 lg:mt-0 lg:pl-8">
                <p className="text-lg">
                    We are dedicated to providing innovative stock market solutions for individuals and businesses alike. Our platform offers real-time stock data, detailed financial analysis, and powerful tools to help users make informed investment decisions. Founded in [Year], our mission is to simplify the complexities of the financial market and provide users with the tools and resources they need to build and manage their portfolios. We are committed to creating a user-friendly, secure, and transparent platform where both beginners and experts can feel confident navigating the stock market.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="bg-blue-gray-200 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-darkBlue mb-4">Our Mission</h3>
                <p className="text-light">
                    Our mission is to provide easy access to accurate and real-time stock market data.
                    We aim to empower investors of all levels with tools that enhance their decision-making
                    process.
                </p>
            </div>

            <div className="bg-blue-gray-200 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-darkBlue mb-4">Our Vision</h3>
                <p className="text-light">
                    Our vision is to become a global leader in providing innovative stock market solutions
                    that make investing accessible, transparent, and efficient for everyone.
                </p>
            </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-orange mb-6">Why Choose Us?</h3>
            <p className="text-lg text-light max-w-2xl mx-auto">
                We offer a reliable, user-friendly platform that provides detailed market analysis,
                expert insights, and up-to-date stock data. Whether you are a beginner or a seasoned investor,
                we are here to help you succeed in the stock market.
            </p>
        </div>
    </div>
</section>
  )
}

export default AboutSection