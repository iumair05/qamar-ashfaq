"use client";

import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div id="projects" className="relative z-5 my-12 lg:my-24">

      <div className="relative">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {projectsData?.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project?.id}
              className="w-full mx-auto max-w-2xl"
            >
              <div
                className="box-border flex items-center justify-center rounded"
                style={{ minHeight: "380px", minWidth: "330px" }}
              >
                <div className="w-full max-w-sm rounded overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-[250px] bg-center object-cover hover:scale-105 duration-200"
                    src={project?.images[0]}
                    alt={project?.title}
                  />

                  <div className="px-2 py-4">
                    <div className="font-bold text-xl mb-2">{project?.title}</div>
                    <p className="text-gray-700 text-base">
                      {project?.description.length > 80
                        ? project.description.slice(0, 80) + "..."
                        : project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
