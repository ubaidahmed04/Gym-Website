"use client"
import React from 'react'
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { ProductCard } from './ProductCard';
import Team from './team';
import ProductStore from './ProductStore';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col   bg-gray-100">
    
    {/* <h1 className='flex w-full text-center justify-center py-5 text-xl font-bold'>Member Information</h1> */}
    
    <div className="text-center max-w-2xl mx-auto">
      <h2 className=" sm:text-3xl text-2xl font-extrabold">
        Work Easier Today
      </h2>
      <p className="text-sm text-gray-600 mt-6 leading-relaxed">
        Unlock a world of possibilities with our exclusive features. Explore how
        our unique offerings can transform your journey and empower you to achieve
        more.
      </p>
    </div>
        
      <span className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
       <ProductStore text={"Daily Exercise"}/>
       <ProductStore text={"Daily Diet"}/>
       <ProductStore text={" Sell Items"}/>
       <ProductStore text={"Sell Supplements"}/>
        </span>    
        <Team/>
   
  </div>
  )
}

export default AdminDashboard