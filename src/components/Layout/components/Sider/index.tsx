import React from 'react';
import Card from "../../../Card";
import "./index.scss";


function Side() {
  return (
    <div className=''>
      <Card title='最新文章'>
        <div className="flex justify-between items-center show-time">
          <p className='truncate '>最新啦啦啦最新啦啦啦最新啦啦啦</p>
          <span className='text-gray-300 text-sm hidden'>2022</span>
        </div>
      </Card>
      <Card title='Tags'>
        <h3 className='text-2xl mb-3 '></h3>

      </Card>
    </div>
  );
}

export default Side;
