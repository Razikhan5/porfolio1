"use client"
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos"
import"aos/dist/aos.css"
import {Sidebar} from "./sidebar";
import {Detail} from "./detail";
import MobileCard from "../Mobilecomponent/card";
import { MobileEducation } from "../Mobilecomponent/education";
import { MobileSkill } from "../Mobilecomponent/skill";
import { MobileProject } from "../Mobilecomponent/project";



const Mainpage = () => {
// useeffect from aos
    useEffect(() => {
        AOS.init({
          once: false
        })
        }, [])

  return (
    
    <div>
{/* mobile view */}
<div className="overflow-x-hidden bg-white h-screen md:hidden">
  {/* card */}
  <MobileCard />
  {/* Education */}
  <MobileEducation/>
  {/* skill */}
  <MobileSkill/>
  {/* project */}
  <MobileProject/>
</div>


      {/* desktop view */}

    <div className=" hidden md:flex md:overflow-hidden md:h-screen">
   {/* side bar */}
   <div className="w-1/5">
    <Sidebar />
   </div>
   {/*main */}
   <div className="w-full">
    <Detail />
   </div>
    </div>
    </div>

  )
}

export default Mainpage