"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

type Projects= {
  name: string,
  createdOn: string,
  currentStatus: string,
  description: string,
  image: string,
  features: string[],
  links: {
    github: string,
    website: string
  },
}

export default function page() {

  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchProjects = await fetch('json/projects.json');
      const response = await fetchProjects.json()
      setProjects(response)
      console.log(response)
    }

    fetchData();
  }, [])

  return (

    <div className="flex justify-center">

      <Navbar />

      <div className="flex flex-col justify-evenly items-center w-[80%] h-screen text-[#292929] font-mono pt-30">

        {projects?.map((project, index) => (

          <div key={index} className="border-1 rounded-sm border-[#606060] md:w-full lg:w-[850px] flex flex-col justify-between p-5 mb-10">
            <div className="flex flex-row justify-between">

              <div className="h-full md:w-full lg:w-[60%]">
                <h1 className="text-3xl font-bold">{project.name}</h1>
                <h6 className="text-sm font-semibold mt-3">{project.createdOn} - {project.currentStatus}</h6>

                <p className="text-base mt-2">
                  {project.description}
                </p>

                <h3 className="text-lg mt-2 font-semibold">Features</h3>

                <ul className="mt-2 list-disc list-inside">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="h-[260px] w-[260px] sm:hidden lg:block">
                <img src={project.image} draggable={false} />
              </div>
            </div>
            <div className="mt-5 flex gap-4">

              <a href={project.links.github} target="_blank">
                <img src="/icons/github.png" className="h-9 w-9 border-1 p-2 rounded-sm text-[#606060]" />
              </a>

              <a href={project.links.website} target="_blank">
                <img src="/icons/website.png" className="h-9 w-9 border-1 p-2 rounded-sm text-[#606060]" />
              </a>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
