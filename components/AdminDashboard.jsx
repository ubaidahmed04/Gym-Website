"use client"
import React from 'react'
// import { ProductCard } from './ProductCard';
import Team from './team';
// import { FeatureCard } from './FeatureCard';
import { MdOutlineStorefront } from 'react-icons/md';
import { TbUsersPlus } from 'react-icons/tb';
import { SiTrainerroad } from 'react-icons/si';
import { LiaUserEditSolid } from "react-icons/lia";
import { FeatureCard } from './FeatureCard';
const AdminDashboard = () => {
  return (
    <div className="flex flex-col   ">
    
    {/* <h1 className='flex w-full text-center justify-center py-5 text-xl font-bold'>Member Information</h1> */}
    
    <div className="text-center max-w-2xl ">
      <h2 className=" sm:text-3xl text-2xl font-extrabold text-blue-gray-50">
        Admin Dashboard
      </h2>
      <p className="text-sm text-darkBlue mt-6 leading-relaxed">
        Unlock a world of possibilities with our exclusive features. Explore how
        our unique offerings can transform your journey and empower you to achieve
        more.
      </p>
    </div>
        
      <span className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
         <FeatureCard 
          featureName={"Product-List"}
          description={"Dependable solutions for your business."}
          url={"/allProducts"}
          Icon={MdOutlineStorefront}
          />
         <FeatureCard 
          featureName={"All-User"}
          description={"Dependable solutions for your business."}
          url={"/allUsers"}
          Icon={LiaUserEditSolid}
          />
         
         <FeatureCard 
          featureName={"All-Trainers"}
          description={"Dependable solutions for your business."}
          url={"/allTrainers"}
          Icon={SiTrainerroad}
          />
         <FeatureCard 
          featureName={"Add Schedule "}
          description={"Dependable solutions for your business."}
          url={"/addSchedule"}
          Icon={TbUsersPlus}
          />
         
         {/* <FeatureCard 
          featureName={"Exercise"}
          description={"Dependable solutions for your business."}
          url={"/exercise"}
          // Icon={RiNodeTree}
          /> */}
         
        </span>    
        <Team/>
   
  </div>
  )
}

export default AdminDashboard