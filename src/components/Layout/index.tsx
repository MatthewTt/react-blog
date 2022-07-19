import React from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <>
      <div className='layout-container flex flex-col'>
        <div className="layout-header">
          <Header />
        </div>
        <div className='pt-6 px-5 mx-auto w-full md:w-2/3'>
          <Outlet />
        </div>
      </div>
    </>

  );
}

export default Layout;
