import React from 'react'
import Navbar from '@/components/Navbar'
export default function Page() {
  return (
    <div className="flex justify-center">

      <Navbar />

      <div className="flex justify-center items-center w-[83%] pt-10 h-screen">

        <div className="w-[40%] text-lg font-mono p-5 flex justify-center items-center">

          <p>
            Hi, I’m Sujal Agre <br /> <br />

            A 20-year-old Bachelor of Computer Applications student at Somaiya Vidyavihar University, India.<br /><br />

            I’m obsessed with crafting beautifully designed websites and love building random projects <br /> <br />

            When I’m not coding, <br/> I’m making <a href="https://soundcloud.com/okayaszu" target="_blank" className="text-blue-500 hover:text-blue-800"> music </a>, editing videos, and running my small YouTube channel <a href="https://www.youtube.com/@okayaszu" target="_blank" className="text-blue-500 hover:text-blue-800"> ‘Aszu’. </a><br /> <br />
          </p>

        </div>

        <div className="w-[40%]  flex justify-center items-center">
          <img src="profile/photo.jpg" className="w-90" />
        </div>

      </div>


    </div >)
}
