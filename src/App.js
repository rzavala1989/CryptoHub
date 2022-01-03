import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space, Image } from 'antd';
import Navbar from './components/Navbar';
//pages
import {
  Cryptocurrencies,
  News,
  Exchanges,
  Homepage,
  CryptoDetails,
} from './pages';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />

              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/exchanges' component={Exchanges} />

              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Image
            style={{ position: 'absolute', top: '-10px', right: '100px' }}
            width={60}
            src='/crypto-logo.png'
          />
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Copyright © 2022 <br />
            <Link style={{ color: '#001529' }} to='/'>
              CryptoHub LLC
            </Link>{' '}
            <br />
            All Rights Reserved (Ricardo Zavala)
          </Typography.Title>
          <Space>
            <Link className='footer-links' to='/'>
              Home
            </Link>
            <Link className='footer-links' to='/exchanges'>
              Exchanges
            </Link>
            <Link className='footer-links' to='/news'>
              News
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
