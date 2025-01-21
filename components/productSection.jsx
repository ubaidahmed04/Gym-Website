"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductStore'
import { getAllProducts } from '@/app/API/response'
import { ProductSkeleton } from './LoaderProduct'

const ProductSection = () => {
   const [allProducts, setAllProducts] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
  
  useEffect(() => {
      const fetchProducts = async () => {
        try {
          setIsLoader(true)
          const response = await getAllProducts("/newProduct");
          console.log("response",response)
          // if (!response.ok) {
          //   throw new Error("Failed to fetch products");
          // }
          // const data = await response.json();
          setAllProducts(response || []); // Assuming the response has a `products` field
          setIsLoader(false)
        } catch (error) {
          console.error("Error fetching products: " + error.message);
        } finally {
          setIsLoader(false);
        }
      };
  
      fetchProducts();
    }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 py-5">
  {
  isLoader ? <ProductSkeleton/>:
  allProducts.map((product, index) => (
    <ProductCard key={index} {...product} />
  ))}
</div>
  )
}

export default ProductSection