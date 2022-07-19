import React from 'react';
import './index.scss';
import SearchInput from "../SearchInput";

function Header() {
  return (
    <div className={`bg-white flex content-center text-2xl px-8 py-5 shadow `}>
      <div className="blog-title">咕Blog</div>
      <nav className='flex-1 text-xl'>
        <ul className='flex px-8 content-center h-full'>
          <li className='nav-li'>首页</li>
          <li className='nav-li'>归档</li>
        </ul>
      </nav>
      <div className='hidden md:block'>
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
