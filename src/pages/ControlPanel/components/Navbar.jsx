import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdContactSupport } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Tooltip from '@mui/material/Tooltip';

import avatar from '../assets/img/avatar.jpg';
import { Chat, Notification, Profile, Support, Wallet } from '.';
import { useStateContext } from '../../../contexts/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(()=>{
    const handleWindowSize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleWindowSize);

    return ()=> window.removeEventListener('resize', handleWindowSize);
  }, []);

  useEffect(()=>{
    if(screenSize <= 900) {
      setActiveMenu(false);
    }
    else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavbarButton
        title="Menú"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className='inline-flex'>
        <NavbarButton
          title="Tu billetera"
          customFunc={() => handleClick("wallet")}
          color="blue"
          icon={<FaWallet />}
        />
        <NavbarButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavbarButton
          title="Notificaciones"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}  
        />
        <NavbarButton
          title="Soporte técnico"
          customFunc={() => handleClick("support")}
          color="blue"
          icon={<MdContactSupport />}  
        />
        <Tooltip
          title="Perfil"
          placement='bottom'
          >
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick("profile")}>
              <img
                src={avatar}
                className='rounded-full w-8 h-8'
                alt='Profile'
              />
              <p>
                <span className='text-gray-400 text-14'>Hola, </span> {' '}
                <span className='text-gray-400 text-14 font-bold ml-1'>Omar</span>
              </p>
              <MdKeyboardArrowDown
                className='text-gray-400 text-14'
              />
            </div>
        </Tooltip>

        {isClicked.wallet && ( <Wallet /> )}
        {isClicked.chat && ( <Chat /> )}
        {isClicked.notification && ( <Notification /> )}
        {isClicked.profile && ( <Profile /> )}
        {isClicked.support && ( <Support /> )}
      </div>
    </div>
  )
}

// Additional components
const NavbarButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement='bottom'>
    <button 
      type='button' 
      onClick={customFunc} 
      style={{ color }}
      className='relative text-xl p-3 rounded-full hover:bg-light-gray'
      >
        <span 
          className='absolute inline-flex rounded-full h-2 w-2  right-2 top-2'
          style={{ background: dotColor }}
        />
        { icon }
    </button>
  </Tooltip>
)

export default Navbar