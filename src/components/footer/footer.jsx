import React from 'react'
import twitter from '../../assets/Logos/Group 13.svg';
import telegram from '../../assets/Logos/Group 14.svg';
import discord from '../../assets/Logos/Group 15.svg';
import instagram from '../../assets/Logos/Group 16.svg';
import Logo from '../../assets/Logos/dark.svg'
import { Box,Divider } from '@material-ui/core'
// import Link from '@mui/material/Link';
import styles from './footer.module.css';
export const Footer = () => {
  return (
    <Box fluid className={styles.bg}>
      <Divider className={styles.divider}/>
      <div className={styles.foot_about}>
        <div style={{position:'relative',top:'40px'}}>
          <img src={Logo} alt="logo" />
          <h3>Get the latest updates</h3>
          <input label='Your Email' placeholder='Your Email'className={styles.email_field}/>
          <button className={styles.email_me}><b>Email Me!</b></button>
        </div>
        <div className={styles.foot_details}>
          <div>
            <h2>
              Graphique NFT
            </h2>
            <p>Explore</p>
            <p>How it Works</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h2>
              Support
            </h2>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
          </div>
        </div>
        
      </div>
      <Divider className={styles.divider}/>
      <div className={styles.foot_rights}>
        <div>
          <h3>Graphique, NITT. All Rights Reserved</h3>
          </div>
        <div>
          <img className={styles.foot_social} src={discord} alt="twitter" />
          <img  className={styles.foot_social}src={telegram} alt="instagram" />
          <img  className={styles.foot_social}src={twitter} alt="discord" />
          <img  className={styles.foot_social}src={instagram} alt="telegram" />
          </div>
      </div>
    </Box>
  )
}