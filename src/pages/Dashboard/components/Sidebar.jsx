import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {MdExpandMore} from 'react-icons/md';

import GoldenDuckLogo from "../../../assets/img/GoldenDuckLogo.png";
import { useStateContext } from '../../../contexts/ContextProvider';
import { contextMenuItems, links } from '../assets/img/dummy'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext();

  const activeClass = 'flex items-center gap-3 pl-4 py-2.5 rounded-lg text-white text-md m-2 no-underline bg-amber-400'
  const unactiveClass = 'flex items-center gap-3 pl-4 py-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 no-underline'

  const handleAutoClose = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const AccordionStyle = {
    '&:before': {
      backgroundColor: 'transparent !important',
      border: 'none',
      boxShadow: '0 !important'
    },
  };

  return (
    <div>
      <div className='h-screen ml-3 pb-10 md:overflow-hidden overflow-auto md:hover:overflow-auto'>
        {
          activeMenu && (
            <>
            <div className='flex justify-between items-center'>
              <Link to="/dashboard" onClick={()=>{
                setActiveMenu(false);
              }} 
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900 no-underline'>
                <img src={GoldenDuckLogo} width='64' alt='Golden Duck logo' /><span>Golden Duck</span>
              </Link>
              <Tooltip title="Cerrar" arrow>
                <button type='button' onClick={ () => setActiveMenu((prevActiveMenu) => !prevActiveMenu) }
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:visible'>
                  <MdOutlineCancel />
                </button>
              </Tooltip>
            </div>
            <div className='mt-10'>
                {links.map((item) => (
                  <Accordion key={item.title} sx={AccordionStyle} elevation={0}>
                    <AccordionSummary className='mx-3 my-1' expandIcon={<MdExpandMore />} aria-controls="panel-content">
                      <p className='text-gray-400 capitalize font-bold mb-0'>
                        {item.title}
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                    {
                      item.links.map((link)=>(
                          <NavLink
                            key={link.name}
                            to={`/dashboard/${link.link}`}
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
                    </AccordionDetails>
                  </Accordion>
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