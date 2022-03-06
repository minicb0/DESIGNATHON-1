import React from 'react'
import { useStyles } from './PaymentStyle';
import {Dialog} from '@material-ui/core'
export const Payment = (props) => {
  const classes = useStyles();
  return (
    // <div className={classes.container}>
    <>
      <Dialog
        open={props.payment}
        onClose={() => props.setpayment(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <div className={classes.dialogText}>
          <div className={classes.title}>Payment Successful</div>
          <div className={classes.img}></div>
          <div className={classes.textContainer}>
            <p>You successfully purchased <strong>Abstact Smoke Red Blue</strong> from <strong>Mia Aynana</strong></p>
          </div>
          <p className={classes.share}>Share</p>
          <div className={classes.icons}>
            <img className={classes.iconsImg} alt="fskdjfh"src="insta1.png"></img>
            <img className={classes.iconsImg} alt="imsdfsdage"src="twitt.png"></img>
            <img className={classes.iconsImg} alt="imfsdfage"src="tele1.png"></img>
          </div>
        </div>

      </Dialog>

    </>

    // </div>
  )
}
