"use client"

import { projectsData } from '@/utils/data/projects-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductDetail = ({ params }) => {


    const { projectId } = params;
    
    const project = projectsData?.find((p) => p.id === Number(projectId));

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedImg, setSelectedImg] = useState(project?.images[0]);

    const handleSelectedImg = (index) => {
        setSelectedImg(project?.images[index]);
    };

    if (!project) {
        return <div className='grid place-content-center h-screen'>Project not found</div>;
    }

    return (
        <div className='w-full mx-auto my-8'>
            <Link
                href={project?.url}
                target='_blank'
                key={project?.id}
                className='relative cursor-pointer'
            >
                <div
                    onMouseEnter={() => setHoveredIndex(project?.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative"
                >
                    <Image
                        src={selectedImg}
                        alt={project?.title}
                        width={1000}
                        height={1000}
                        className='w-[95vw] mx-auto object-cover bg-center h-[60vh]'
                    />
                    {hoveredIndex === project?.id && (
                        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 bg-opacity-80 flex flex-col justify-center items-center">
                            <h1 className="text-white text-2xl tracking-tight font-bold">{project?.title}</h1>
                            <p className="text-white">Click to view project</p>
                        </div>
                    )}
                </div>
            </Link>

            <div className='my-10 flex justify-center gap-4 flex-wrap items-center'>
                {project?.images?.slice(0, 6).map((image, index) => (
                    <div key={index} onClick={() => handleSelectedImg(index)}>
                        <Image
                            src={image}
                            alt={project?.title}
                            width={100}
                            height={100}
                            className={`border ${selectedImg === image ? ' border-2 rounded border-violet-500 duration-100 p-0.5' : ''} w-[120px] h-[80px] object-cover bg-center cursor-pointer`}
                        />
                    </div>
                ))}
            </div>

            <div className='sm:my-20 my-10'>
                <h1 className='text-3xl sm:text-4xl mb-6 font-bold text-center text-pink-500'>About Project</h1>
                <p className='text-slate-400 tracking-widest text-center'>
                    {project?.description}
                </p>
            </div>

            <div className='my-10'>
                <h1 className='text-3xl sm:text-4xl my-12 font-bold text-center text-pink-500'>Challenges</h1>
                <p className='text-slate-400 sm:w-[80vw] w-[90vw] mx-auto tracking-wide text-center'>
                    {project?.challenge}
                </p>
            </div>

            <div className='w-full my-12'>
                <h1 className='text-3xl mb-8 sm:text-4xl  font-bold text-center text-pink-500'>
                    Technologies
                </h1>
                <div className='w-[90vw] mx-auto flex gap-4 flex-wrap justify-center items-center'>
                    {project?.tools?.map((tag, i) => (
                        

                        <React.Fragment key={i} className="flex gap-4">
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={i}>

                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">

                            <div className="flex -translate-y-[1px] justify-center">
                                        <div className="w-3/4">
                                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                        </div>
                                    </div>

                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <p className="text-amber-300 text-center text-sm sm:text-lg">
                                        {tag}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </React.Fragment>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
