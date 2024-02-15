import { Image } from '@nextui-org/react'
import React from 'react'
import { FaTshirt } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { IoCloudyNight } from 'react-icons/io5'

const Dashboard = () => {
    return (
        <div className='w-full'>
            <div className="flex gap-5  " >
                <div className="flex gap-2 items-center px-3 p-2 border border-divider text-gray-300 rounded-md min-w-64   ">
                    <span className="bg-cyan-500/30  p-2 rounded   text-cyan-500">
                        <IoCloudyNight />
                    </span>
                    <span> Create New Project</span>
                </div> <div className="flex gap-2 items-center px-3 p-2 border border-divider text-gray-300  rounded-md min-w-64">
                    <span className="bg-green-500/30  p-2 rounded   text-green-500">
                        <FaTshirt />
                    </span>
                    <span> Create Fashion  Project </span>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl text-gray-400" >Recent projects</h2>
                <div className=" flex mt-4 gap-5  ">
                    <div className="border border-divider rounded-md overflow-hidden w-64 ">
                        <Image
                            src="https://static.vecteezy.com/system/resources/previews/023/628/243/non_2x/ai-generative-a-man-is-beinggraphed-on-a-solid-background-with-a-look-of-confusion-on-his-face-free-photo.jpg"
                            className="w-full rounded-none"
                        />
                        <div className="flex items-center justify-between w-full px-4 py-3 ">
                            <div className="text-sm text-gray-300 " >Untitled project</div>
                            <div className="bg-gray-500/50 rounded-full p-1 text-gray-400 cursor-pointer "> <HiDotsVertical /> </div>
                        </div>
                    </div><div className="border border-divider rounded-md overflow-hidden w-64 ">
                        <Image
                            src="https://static.vecteezy.com/system/resources/previews/023/628/243/non_2x/ai-generative-a-man-is-beinggraphed-on-a-solid-background-with-a-look-of-confusion-on-his-face-free-photo.jpg"
                            className="w-full rounded-none"
                        />
                        <div className="flex items-center justify-between w-full px-4 py-3 ">
                            <div className="text-sm text-gray-300 " >Untitled project</div>
                            <div className="bg-gray-500/50 rounded-full p-1 text-gray-400 cursor-pointer "> <HiDotsVertical /> </div>
                        </div>
                    </div><div className="border border-divider rounded-md overflow-hidden w-64 ">
                        <Image
                            src="https://static.vecteezy.com/system/resources/previews/023/628/243/non_2x/ai-generative-a-man-is-beinggraphed-on-a-solid-background-with-a-look-of-confusion-on-his-face-free-photo.jpg"
                            className="w-full rounded-none"
                        />
                        <div className="flex items-center justify-between w-full px-4 py-3 ">
                            <div className="text-sm text-gray-300 " >Untitled project</div>
                            <div className="bg-gray-500/50 rounded-full p-1 text-gray-400 cursor-pointer "> <HiDotsVertical /> </div>
                        </div>
                    </div><div className="border border-divider rounded-md overflow-hidden w-64 ">
                        <Image
                            src="https://static.vecteezy.com/system/resources/previews/023/628/243/non_2x/ai-generative-a-man-is-beinggraphed-on-a-solid-background-with-a-look-of-confusion-on-his-face-free-photo.jpg"
                            className="w-full rounded-none"
                        />
                        <div className="flex items-center justify-between w-full px-4 py-3 ">
                            <div className="text-sm text-gray-300 " >Untitled project</div>
                            <div className="bg-gray-500/50 rounded-full p-1 text-gray-400 cursor-pointer "> <HiDotsVertical /> </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Dashboard