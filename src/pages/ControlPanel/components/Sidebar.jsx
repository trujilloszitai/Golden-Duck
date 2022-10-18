import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { IoMdHeartEmpty } from 'react-icons/io';

import GoldenDuckLogo from "../../../assets/img/logo512.png";
import { useStateContext } from '../../../contexts/ContextProvider';
import { contextMenuItems, links } from '../assets/img/dummy'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext();

  const activeClass = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const unactiveClass = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleAutoClose = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div>
      <div className='h-screen ml-3 pb-10 md:overflow-hidden overflow-auto md:hover:overflow-auto'>
        {
          activeMenu && (
            <>
            <div className='flex justify-between items-center'>
              <Link to="/control-panel" onClick={()=>{
                setActiveMenu(false);
              }} 
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate 900'>
                <img src={GoldenDuckLogo} width='64' alt='Golden Duck logo' /><span>Golden Duck</span>
              </Link>
              <TooltipComponent content="Menu" position='BottomCenter'>
                <button type='button' onClick={ () => setActiveMenu((prevActiveMenu) => !prevActiveMenu) }
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className='mt-10'>
                {links.map((item) => (
                  <div key={item.title}>
                    <p className='text-gray-400 m-3 mt-4 uppercase'>
                      {item.title}
                    </p>
                    {
                      item.links.map((link)=>(
                        <NavLink
                          key={link.name}
                          to={`/control-panel/${link.link}`}
                          onClick={handleAutoClose()}
                          className={
                            ( { isActive } ) => 
                            isActive ? activeClass : unactiveClass
                          }
                        >
                          {link.icon}
                          <span className='capitalize'>{link.name}</span>
                        </NavLink>
                      ))
                    }
                  </div>
                ))}
            </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Sidebar