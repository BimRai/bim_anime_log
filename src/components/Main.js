import React from 'react'
import demonslayer from  'C:/Users/birah/my_anime_list/src/images/demonslayer.jpg'
import juju from  'C:/Users/birah/my_anime_list/src/images/juju.jpg'
import chainsaw from  'C:/Users/birah/my_anime_list/src/images/chainsaw.jpg'
import opm from  'C:/Users/birah/my_anime_list/src/images/opm.jpg'
import bnha from 'C:/Users/birah/my_anime_list/src/images/bnha.jpg'


function Main() {
  return (
    <div>
    <div className='current'>
        <h2>CURRENTLY WATCHING</h2>
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
          <div className='card'>
            <h3>MY HERO ACADEMY</h3>
            <img src={bnha} className='imglist' alt=''/>
          </div>
          <button className='hiddenbtn'>
            <a href="findoutmore">FIND<br></br>OUT<br></br>MORE</a>
          </button>
        </table>
    </div>
  </div>
  );
};

export default Main;
