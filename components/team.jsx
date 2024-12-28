import React from 'react'

const Team = () => {
  return (
    <div className="font-[sans-serif] px-4 py-8 bg-gradient-to-t from-green-50 to-purple-50">
    <div className="lg:max-w-5xl sm:max-w-2xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-100 text-3xl font-extrabold">
          Creative Team Section
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-16">
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-1.webp"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="ml-6 text-center md:text-left">
            <h4 className="text-darkBlue text-base font-bold">Ubaid Ahmed</h4>
            <p className="text-xs text-blue-100 mt-1">MernStack Engineer</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-2.webp"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="ml-6 text-center md:text-left">
            <h4 className="text-darkBlue text-base font-bold">Haris Naseem</h4>
            <p className="text-xs text-blue-100 mt-1">Flutter Engineer</p>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src="https://readymadeui.com/team-1.webp"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="ml-6 text-center md:text-left">
            <h4 className="text-darkBlue text-base font-bold">Naqeeb Ahmed</h4>
            <p className="text-xs text-blue-100 mt-1">Backend Engineer</p>
          </div>
        </div>
       
        
      </div>
    </div>
  </div>
  
  )
}

export default Team