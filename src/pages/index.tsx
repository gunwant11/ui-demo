import { Inter } from "next/font/google";
import Nav from "../../components/Nav";
import {  Tab, Tabs, useDisclosure} from '@nextui-org/react'
import { AiOutlineApi, AiOutlineAppstore } from "react-icons/ai";
import {  IoColorWandOutline } from "react-icons/io5";
import { RiBox3Fill } from "react-icons/ri";
import { useState } from "react";
import Dashboard from "../../components/Dashboard";
import { FaPlus } from "react-icons/fa6";
import Explore from "../../components/Explore";
import Api from "../../components/Api";
import Generations from "../../components/Generations";
import FormModal from "../../components/FormModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [activeTab, setActiveTab] = useState<string>('dashboard')
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
   <div className="h-screen">
    <Nav />
    <div className="flex h-full" >
      <div className=" w-1/6 border-r border-divider p-4 ">
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options"  variant="light"  classNames={{tabList: 'flex flex-col w-full ', tabContent: 'w-full' , tab: 'py-3 h-10 ' }}   selectedKey={activeTab}
        onSelectionChange={(e)=> setActiveTab(e as string)} >
        <Tab
          key="dashboard"
          title={
            <div className="flex items-center text-base  space-x-2">
              <AiOutlineAppstore />
              <span>Projects</span>
            </div>
          }
        />
        <Tab
          key="generations"
          title={
            <div className="flex items-center text-base  space-x-2">
             <IoColorWandOutline />
              <span>Generations</span>
            </div>
          }
        /> <Tab
        key="explore"
        title={
          <div className="flex items-center text-base  space-x-2">
           <RiBox3Fill  />
            <span>Explore</span>
          </div>
        }
      />
        <Tab
          key="api"
          title={
            <div className="flex items-center text-base  space-x-2">
            <AiOutlineApi />
              <span>API</span>
            </div>
          }
        />
      </Tabs>
    </div>  
      </div>
      <div className="flex-1 p-4">

      {
          activeTab == 'dashboard' && <Dashboard />
        }  {
          activeTab == 'generations' && <Generations />
        }  {
          activeTab == 'explore' && <Explore />
        }  {
          activeTab == 'api' && <Api />
        }
     
      </div>
      <FormModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
      {/* fab */}
      <div className=" absolute  right-5 bottom-5 bg-indigo-500/50  rounded-full p-4" onClick={onOpen}>
        <FaPlus size={20} />
      </div>
    </div>

   </div>
  );
}
