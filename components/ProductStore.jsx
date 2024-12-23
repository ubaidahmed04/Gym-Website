import React from 'react'

    const ProductCard = ({ title, description, price, imageSrc }) => (
        <div className="bg-blue-gray-400 text-light rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              className="fill-gray-800 inline-block"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              />
            </svg>
          </div>
          <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-light">{title}</h3>
            <p className="text-gray-200 text-sm mt-2">{description}</p>
            <h4 className="text-lg text-gray-800 font-bold mt-4">${price}</h4>
          </div>
        </div>
      );
  
export default ProductCard