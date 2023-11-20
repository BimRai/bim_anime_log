import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import demonslayer from  'C:/Users/birah/my_anime_list/src/images/demonslayer.jpg'
import juju from  'C:/Users/birah/my_anime_list/src/images/juju.jpg'
import chainsaw from  'C:/Users/birah/my_anime_list/src/images/chainsaw.jpg'
import opm from  'C:/Users/birah/my_anime_list/src/images/opm.jpg'
import bnha from 'C:/Users/birah/my_anime_list/src/images/bnha.jpg'
import kenganashura from 'C:/Users/birah/my_anime_list/src/images/kenganashura.jpg'
import rurounikenshin from 'C:/Users/birah/my_anime_list/src/images/rurounikenshin.jpg'

function Watching() {
  return (
    <div>
        <Nav></Nav>
        <h2>WATCHING</h2>
        <div className='current'>
        <table>
          <div className='card'>
            <h3>DEMON SLAYER</h3>
            <img src={demonslayer} className='imglist' alt=''/>
          </div>
          <div className='card'>
          <h3>JUJUTSU KAISEN</h3>
          <img src={juju} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>CHAINSAW MAN</h3>
            <img src={chainsaw} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>ONE PUNCH MAN</h3>
            <img src={opm} className='imglist' alt=''/>
          </div>
        </table>
        <table>
        <div className='card'>
            <h3>MY HERO ACADEMY</h3>
            <img src={bnha} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>KENGAN ASHURA</h3>
            <img src={kenganashura} className='imglist' alt=''/>
          </div>
          <div className='card'>
            <h3>RUROUNI KENSHIN</h3>
            <img src={rurounikenshin} className='imglist' alt=''/>
          </div>
        </table>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default Watching
