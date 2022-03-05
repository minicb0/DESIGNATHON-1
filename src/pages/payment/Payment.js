import React from 'react'
import { useStyles } from './PaymentStyle';

export const Payment = () => {
    const classes=useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.title}>Payment Successful</div>
         <div className={classes.img}></div>
         <div className={classes.textContainer}>
           <p>You successfully purchased <strong>Abstact Smoke Red Blue</strong> from <strong>Mia Aynana</strong></p>
           </div>
           <p className={classes.share}>Share</p>
           <div className={classes.icons}>
           <img className={classes.iconsImg} src="insta1.png"></img>
           <img className={classes.iconsImg} src="twitt.png"></img>
           <img className={classes.iconsImg} src="tele1.png"></img>
             </div>
    </div>
  )
}
