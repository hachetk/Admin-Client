/*eslint-disable*/
import React, { useState } from 'react';
import {
  RiDashboard3Line,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiFileUserLine,
  RiSwapBoxLine,
} from "react-icons/ri";
import { GiGreenhouse } from "react-icons/gi";
import { Link } from 'react-router-dom';

export function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <>
      <div
        className={`bg-[#0b300c] fixed ${
          showMenu ? "-left-0" : "-left-full"
        } lg:left-0 top-0 w-64 h-full py-4 px-6 flex z-10 flex-col justify-between transition-all`}
      >
        {/* Menu */}
        <div>
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-white text-center uppercase font-bold text-2xl tracking-[4px]">
              MHGlobal
            </h1>
            
          </div>
          <hr className="my-14 md:min-w-full" />
          {/* Nav */}
          <nav className="p-1" >
            <ul>
              <li>
                  <Link
                    to={'/dashboard'}
                    className="hover:bg-slate-400 rounded-lg mt-20 mb-1 flex font-bold text-lg items-center gap-4 text-gray-200 py-2 transition-colors"
                  >
                    <RiDashboard3Line className="ml-2" /> Dashboard
                  </Link>
              </li>
              <li>
                  <Link
                    to={'usuarios'}
                    className="hover:bg-slate-400 rounded-lg mb-1 flex font-bold text-lg items-center gap-4 text-gray-200 py-2 transition-colors"
                  >
                    <RiFileUserLine className="ml-2"/>
                    <span className="flex-1 flex items-center justify-between gap-4">
                      Usuarios
                    </span>
                  </Link>
              </li>
              <li>
                  <Link
                    to={'invernaderos'}
                    className="hover:bg-slate-400 rounded-lg mb-1 flex font-bold text-lg items-center gap-4 text-gray-200 py-2 transition-colors"
                  >
                  <GiGreenhouse className="ml-2"/> Invernaderos  
                  </Link>
              </li>    
              <li>
                  <Link
                    to={'kits'}
                    className="hover:bg-slate-400 rounded-lg flex mb-1 font-bold text-lg items-center gap-4 text-gray-200 py-2 transition-colors"
                  >
                    <RiSwapBoxLine className="ml-2" /> Kit's
                  </Link>
              </li>    
              <li>
                  <Link
                    to={''}
                    className="hover:bg-slate-400 rounded-lg flex font-bold text-lg items-center gap-4 text-gray-200 py-2 transition-colors"
                  >
                    <GiGreenhouse className="ml-2"/> Sensores
                  </Link>
              </li>     
            </ul>
          </nav>
        </div>
        {/* Logout */}
        <div>
          <a
            href="#"
            className="flex items-center gap-4 text-lg text-gray-400 hover:text-gray-200 transition-colors"
          >
            <RiLogoutCircleRLine /> Logout
          </a>
        </div>
      </div>
      {/* Btn menu movile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#664EFA] ring-4 ring-[#141517] text-white text-xl p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
}