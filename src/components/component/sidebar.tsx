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
