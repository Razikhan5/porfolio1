// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Typewriter from 'typewriter-effect';

// import Link from "next/link";
// import { FaCloudDownloadAlt, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";


// export function Sidebar() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center p-3 md:p-6">
//     {/* image*/}
  
//  <Image src="/assets/mypic.jpeg" alt="profile-pic" width={100} height={100}
//  className="rounded-md"/>

//     {/* Name here*/}
//     <div className="mt-2">
// <h1 className="text-1xl font-bold tracking-tight uppercase"> Razi ullah khan</h1>
// <h2 className="text-md text-center font-semibold tracking-tight text-gray-500"> 
// <Typewriter
//   options={{
//     strings: ['Web developer', ],
//     autoStart: true,
//     loop: true,
//   }}
// />
// </h2>
// </div>
//     {/* social media account*/}
// <div className="mt-2 grid grid-cols-3 gap-2">
//   {/* Link dink react icon sa link liya ha*/}
// <div className="mt-4">
// <Link href="#" target="_blank" className="text-grey-500 hover:text-blue-600">
// <FaLinkedin className="text-4xl "/> 
// </Link>
// </div>

//   {/* instagrame */}
//   <div className="mt-4">
// <Link href="#" target="_blank" className="text-grey-500 hover:text-[#FCAF45]">
// <FaInstagram className="text-4xl "/> 
// </Link>
// </div> 

//   {/* Git hud */}
//   <div className="mt-4">
// <Link href="#" target="_blank" className="text-grey-500 hover:text-[#967bb6]">
// <FaGithubSquare className="text-4xl "/> 
// </Link>
// </div>
// </div>

//     {/* Downlod cv button*/}
//     <Link href="/assets/cv/cv.pdf" className="mt-4" target="_blank">
//     <Button>
//       <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Downlod CV
//     </Button>
//     </Link>
//     </div>
    
//   )
// }

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Typewriter from 'typewriter-effect';
// import Link from "next/link";
// import { FaCloudDownloadAlt, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

// export function Sidebar() {
//   return (
//     <div className="h-[90vh] flex flex-col items-center justify-center">
//     <div  data-aos="zoom-out-down"className="w-80 glass p-5 flex flex-col justify-center items-center ">
//       {/* Profile image */}
//       <Image 
//         src="/assets/mypic.jpeg" 
//         alt="profile-pic" 
//         width={100} 
//         height={100} 
//         className="rounded-full shadow-lg transform transition duration-500 hover:scale-110"
//       />

//       {/* Name and Typewriter effect */}
//       <div className="mt-4 text-center">
//         <h1 className="text-2xl font-extrabold tracking-tight uppercase text-indigo-800">
//           Razi Ullah Khan
//         </h1>
//         <h2 className="text-lg font-medium tracking-tight text-gray-500 mt-1">
//           <Typewriter
//             options={{
//               strings: ['Web Developer', 'Frontend Specialist', 'Tech Enthusiast'],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </h2>
//       </div>

//       {/* Social Media Links */}
//       <div className="mt-6 grid grid-cols-3 gap-4">
//         <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
//           <FaLinkedin className="text-4xl text-gray-500 hover:text-blue-700" />
//         </Link>
//         <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
//           <FaInstagram className="text-4xl text-gray-500 hover:text-pink-500" />
//         </Link>
//         <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
//           <FaGithubSquare className="text-4xl text-gray-500 hover:text-gray-800" />
//         </Link>
//       </div>

//       {/* Download CV button */}
//       <Link href="/assets/cv/cv.pdf" className="mt-8">
//         <Button className="flex items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
//           <FaCloudDownloadAlt className="h-5 w-5" />
//           <span>Download CV</span>
//         </Button>
//       </Link>
//     </div>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { FaCloudDownloadAlt, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="  mt-16 p-6 bg-gradient-to-br from-purple-200 to-blue-300 shadow-lg rounded-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
      {/* Image */}
      <Image
        src="/assets/mypic.jpeg"
        alt="profile-pic"
        width={130}
        height={130}
        className="rounded-md justify-between items-center"
      />

      {/* Name */}
      <div className="mt-4 text-center">
        <h1 className="text-xl font-bold uppercase tracking-wide">RAZI ULLAH KHAN</h1>
        <h2 className="text-md font-semibold text-gray-500">
          <Typewriter
            options={{
              strings: ["Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* Social Media Links */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <Link href="#" target="_blank" className="text-gray-500 hover:text-blue-600">
          <FaLinkedin className="text-3xl" />
        </Link>
        <Link href="#" target="_blank" className="text-gray-500 hover:text-pink-500">
          <FaInstagram className="text-3xl" />
        </Link>
        <Link href="#" target="_blank" className="text-gray-500 hover:text-purple-500">
          <FaGithubSquare className="text-3xl" />
        </Link>
      </div>

      {/* Download CV Button */}
      <Link href="/assets/cv/cv.pdf" target="_blank" className="mt-6">
        <Button className="bg-black text-white flex items-center justify-center p-2 mt-5 rounded-md hover:bg-gray-800">
          <FaCloudDownloadAlt className="mr-2" /> Download CV
        </Button>
      </Link>
    </div>
  );
}
