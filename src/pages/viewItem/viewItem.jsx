import { React, useState } from 'react'
import { Avatar, Tabs, Tab, Box, Container } from '@material-ui/core'
import creator from '../../assets/images/creatorProfile.svg'
import styles from './style.module.css'
// import item from '../../assets//item.svg'
import heartDark from '../../assets/Logos/heartDark.svg'
import { Checkout } from '../../components/checkout/Checkout'
import { Payment } from '../../components/payment/Payment'

export const ViewItem = () => {
  const [open, setOpen] = useState(false)
  const [payment, setpayment] = useState(false)
  const confirmDialog = (
    <Checkout 
      open={open}
      setOpen={setOpen}
      payment={payment}
      setpayment={setpayment}
    />
  );
  const paymentDialog = (
    <Payment 
      open={open}
      setOpen={setOpen}
      payment={payment}
      setpayment={setpayment}
    />
  );

  return (
    <Container className={styles.itemContain}>
      {paymentDialog}
      {confirmDialog}
      <div className={styles.itemImgContainer}>
<img src="assets/hotBirds/image_1.png" alt="item"className={styles.itemImg} />
      </div>
      
      <div className={styles.creatorContainer}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h1>Abstact Smoke Red Blue</h1>
          </div>
          <div>
            <span style={{border:'0.5px solid #888888',padding:'5px 10px',borderRadius:'22px'}}><img src={heartDark}alt="heart"></img> 92</span>
          </div>
        </div>
        
        <p>From <b>4.5 ETH </b><svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1" cy="1.5" r="1" fill="white"/>
        </svg> 20 of 25 available</p>
        
        <div>
          <p>Creater</p>
          <div style={{display:'flex',alignItems:"center",margin:"30px 0px"}}>
            <Avatar alt="Remy Sharp" src={creator} />
            <div style={{marginLeft:"20px"}}><b>Mia Ayana</b></div>
          </div>
         
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs aria-label="basic tabs example">
            <Tab label="Details"/>
            <Tab label="Offers"/>
            <Tab label="History"/>
          </Tabs>
        </Box>
        {/* Not working */}
        <div style={{fontSize:"16px",lineHeight:"26px",margin:"30px 0px"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </div>
        {/* <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
                </TabPanel> */}
        <div style={{display:'flex',justifyContent:'space-around'}}>
<button class={styles.createBtn} onClick={() => {setOpen(true)}}>Buy for 4.5 ETH</button>
          <button class={styles.connectBtn}>Make Offer</button>
        </div>
        
      </div>
    </Container>
  )
}