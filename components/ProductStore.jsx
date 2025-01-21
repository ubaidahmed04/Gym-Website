import React from 'react'

    const ProductCard = ({ productName, description, price, quantity }) => {
      const redirectToWhatsApp = (title, url, price1) => {
        const phoneNumber = '923127718780'; // Replace with your WhatsApp number
        const message = `Hello, I am interested in buying the product:\n\n*Product Name:* ${title}\n*Price:* Rs.${price1}\n*Image:* ${url}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      };
     return (
      <div className="bg-blue-gray-400 text-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 shadow-lg transition-transform relative max-w-sm w-full">
      {/* Wishlist Icon */}
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4 hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          className="fill-gray-800"
          viewBox="0 0 64 64"
        >
          <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
        </svg>
      </div>
    
      {/* Product Information */}
      <div>
        <h3 className="text-xl font-extrabold text-white truncate">{productName}</h3>
        <p className="text-gray-200 text-sm mt-2 line-clamp-2">{description}</p>
        <div className="mt-4">
          <h4 className="text-lg font-bold text-gray-100">Price: <span className="text-gray-800">${price}</span></h4>
          <h6 className="text-lg font-bold text-gray-100">Quantity: {quantity}</h6>
        </div>
      </div>
    
      {/* Add to Cart Button */}
      <button  onClick={() => redirectToWhatsApp(price,  productName)} className="mt-6 w-full bg-blue-gray-700 text-white py-2 rounded-lg font-bold hover:bg-primary-dark transition">
       Buy Now
      </button>
      
    </div>
    
      );
    }
export default ProductCard