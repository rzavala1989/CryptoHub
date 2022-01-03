import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <div className='loader'>
    <h2>Loading...</h2>
    <br />
    <br />
    <Spin size='large' />
  </div>
);

export default Loader;
