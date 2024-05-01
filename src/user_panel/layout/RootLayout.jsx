<<<<<<< HEAD
import React from 'react'
import Navbar from './Navigation/navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = ({heroHeight, setBlurBackground, blurBackground}) => {
  return (
    <>
    <Navbar heroHeight={heroHeight} setBlurBackground={setBlurBackground}/>
    <Outlet />
    <Footer blurBackground={blurBackground}/>
    </>
  )
}

export default RootLayout
=======
import React from 'react';
import Navbar from './Navigation/navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = ({ heroHeight, setBlurBackground, blurBackground }) => {
  return (
    <>
      <Navbar heroHeight={heroHeight} setBlurBackground={setBlurBackground} />
      <Outlet />
      <Footer blurBackground={blurBackground} />
    </>
  );
};

export default RootLayout;
>>>>>>> ef28d929a132173140a497081765af48e849093b
