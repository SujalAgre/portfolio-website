import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="flex justify-center h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full  ">

        <div className="flex justify-center  items-center w-[83%] pt-20 h-full ">

          <div className="w-[40%]  text-lg font-mono flex justify-start items-center">
            <p>
              Hi, I’m Sujal Agre <br /> <br />
              A 20-year-old Bachelor of Computer Applications student at Somaiya Vidyavihar University, India.<br /><br />
              I’m obsessed with crafting beautifully designed websites and love building random projects <br /> <br />
              When I’m not coding, <br /> I’m making <a href="https://soundcloud.com/okayaszu" target="_blank" className="text-blue-500 hover:text-blue-800"> music </a>, editing videos, and running my small YouTube channel <a href="https://www.youtube.com/@okayaszu" target="_blank" className="text-blue-500 hover:text-blue-800"> ‘Aszu’. </a><br /> <br />
            </p>
          </div>
          <div className="w-[40%]  flex justify-end items-center">
            <img src="profile/photo.jpg" className="w-90" />
          </div>
        </div>
        <div className="flex justify-between w-[50%] font-mono h-[7%]">
          <a href="https://github.com/sujalagre" target="_blank" className="text-blue-500 hover:text-blue-800">GitHub</a>
          <a href="https://x.com/SujalAgre" target="_blank" className="text-blue-500 hover:text-blue-800">Twitter</a>
          <a href="https://www.linkedin.com/in/sujalagre/" target="_blank" className="text-blue-500 hover:text-blue-800">LinkedIn</a>
        </div>
      </div >
    </div>
  );
}
