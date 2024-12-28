import React from 'react'
import { MdOutlineStorefront } from "react-icons/md";
import { RiNodeTree } from "react-icons/ri";
import { SiTrainerroad } from "react-icons/si";
import { TbUsersPlus } from "react-icons/tb";
import { GrSchedules } from "react-icons/gr";
import { FeatureCard } from './FeatureCard';
const FeaturedSection = () => {
  return (
    <>
     {/* Features Section */}
  <div className="grid md:grid-cols-3 gap-6 my-12 ">
  {/* Card 1 */}
  <FeatureCard 
   featureName={"Gym-Store"}
   description={"Dependable solutions for your business."}
   url={"/products"}
   Icon={MdOutlineStorefront}
   />
  <FeatureCard 
   featureName={"Gym-Schedules"}
   description={"Dependable solutions for your business."}
   url={"/schedule"}
   Icon={GrSchedules}
   />
  
  <FeatureCard 
   featureName={"Trainers"}
   description={"Dependable solutions for your business."}
   url={"/trainers"}
   Icon={SiTrainerroad}
   />
  <FeatureCard 
   featureName={"Registration"}
   description={"Dependable solutions for your business."}
   url={"/register"}
   Icon={TbUsersPlus}
   />
  
  <FeatureCard 
   featureName={"Exercise"}
   description={"Dependable solutions for your business."}
   url={"/exercise"}
   Icon={RiNodeTree}
   />
  

  
</div>
</>
  )
}

export default FeaturedSection