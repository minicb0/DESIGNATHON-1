import React from 'react';
import { useStyles } from './styleFile';
import {Link} from "react-router-dom";

export const Checkout = () => {
  const classes=useStyles();

  return (
    <>
    <div className={classes.container}>
    <div className={classes.title}>Check Out</div>
      <div className={classes.container2}>
       <p className={classes.item}>Item</p>
       <p className={classes.subtotal}>Subtotal</p>
       </div>
       <div className={classes.container3}>
       <div className={classes.image}></div>
       <div className={classes.text}>
         <p className={classes.name}>Mia Ayana</p>
         <p className={classes.para}>Abstract Red Smoke Blue</p>
       </div>
       <p className={classes.value}>4.5ETH</p>
       </div>
       <div className={classes.space}>
         <p className={classes.total}>Total <span className={classes.value1}>4.5ETH</span></p>
       </div>
       <div className={classes.container5}>
         <div className={classes.checkOut}>
           <Link to='/payment' className={classes.link}>Checkout</Link></div>
         <div className={classes.cancel}><Link to="/"  className={classes.link}>Cancel</Link></div>
       </div>
    </div>
    </>
  )
}

