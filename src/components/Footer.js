import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <section>
            <h3 className='footerSocials'>Socials</h3>
            <ul className='footerLinks'>
              <li className='socialLinks'>
                <a href='https://github.com/BimRai' target="_blank" rel="noreferrer">GITHUB</a>
              </li>
              <li className='socialLinks'>
                <a href='https://www.instagram.com/bim_rai' target="_blank" rel="noreferrer">INSTAGRAM</a>
              </li>
              <li className='socialLinks'>
                <a href='https://www.twitter.com/bim_rai' target="_blank" rel="noreferrer">TWITTER</a>
              </li>
              <li className='socialLinks'>
                <a href='https://www.linkedin.com/in/bimrai/' target="_blank" rel="noreferrer">LINKEDIN</a>
              </li>
            </ul>
        </section>
    </div>
  );
};

export default Footer;
