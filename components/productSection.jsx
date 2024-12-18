import { products } from '@/public/data/productData'
import React from 'react'
import {ProductCard} from './ProductCard'

const ProductSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 py-5">
  {/* {products.map((product, index) => (
    <ProductCard key={index} {...product} />
  ))} */}
  <ProductCard/>
</div>
  )
}

export default ProductSection