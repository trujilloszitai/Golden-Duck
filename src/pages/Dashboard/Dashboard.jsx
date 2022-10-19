import React, { Component } from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../../contexts/ContextProvider";
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import { Outlet } from 'react-router-dom';

/* import GoldenDuckLogo from "../../assets/img/logo512.png";
import profilePhoto from "./assets/img/defaultProfilePhoto.jpg"; */
import { AutoDebit, Calendar, Cards, Claims, Editor, Expenses, FixedTerm, Insurances, Investment, Loan, Money, Payment, Settings, Support, Transfer, Wallet } from '../';
import { Area, Bar, Financial, Line, Pie, Pyramid, Stacked} from '../Charts';
import { Sidebar, Navbar } from './components';
/* import PanelOption from "./components/mainPanelSelect";
import darkMode from "../../utils/darkMode";
import { act } from "react-dom/test-utils"; */

const Dashboard = () => {
    const { activeMenu } = useStateContext();
    
    return (
      <div>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"></div>
          )}
          <div
            className={
              activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full' : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }
          >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                <Outlet />
              </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;