import React from 'react';
import Sider from "../../components/Layout/components/Sider";
import List from "../../components/List";

function Home() {
  return (
    <div className="layout-body flex flex-col md:flex-row justify-around w-full">
      <div className="main flex-1">
        <List />
      </div>
      <div className="side container mx-auto w-full md:w-1/3 md:ml-8 mt-5 md:mt-0 "><Sider /></div>
    </div>
  );
}

export default Home;
