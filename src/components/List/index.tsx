import React from 'react';
import Card from "../Card";
import {Link} from "react-router-dom";

function BlogList() {
  return (
    <div className='container mx-auto '>
      <Card>
        <Link to={'/article'}>
          <div className='text-2xl cursor-pointer hover:text-blue-400'>标题</div>
          <div className='text-gray-400 text-sm my-3'>2022-07-30</div>
          <div className='text-gray-400'>内容</div>
          <div className="tags">Vue</div>
        </Link>
      </Card>
    </div>
  );
}

export default BlogList;
