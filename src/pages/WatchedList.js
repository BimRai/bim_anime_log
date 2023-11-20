import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import naruto from 'C:/Users/birah/my_anime_list/src/images/naruto.jpg'
import narutoshippuden from 'C:/Users/birah/my_anime_list/src/images/narutoshippuden.jpg'
import aot from 'C:/Users/birah/my_anime_list/src/images/aot.jpg'
import baki from 'C:/Users/birah/my_anime_list/src/images/baki.jpg'

function WatchedList() {
  return (
    <div>
      <Nav></Nav>
      <div className='current'>
        <h2>WATCHED</h2>
        <table>
          <div className='card'>
            <h3>NARUTO</h3>
            <img src={naruto} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>NARUTO SHIPPUDEN</h3>
            <img src={narutoshippuden} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>ATTACK ON TITAN</h3>
            <img src={aot} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>BAKI THE GRAPPLER</h3>
            <img src={baki} className='imglist' alt=''/>
          </div>
        </table>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default WatchedList;
