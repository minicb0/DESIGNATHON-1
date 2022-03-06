import React from 'react'

import { useStyles } from './styles'
import { Grid } from '@material-ui/core'
// import { image1 }  from '../../assets/hotBirds/image_1.svg'
export const SellersCard = (props) => {
    const classes = useStyles()

    return (
        <Grid
            item
            xs={12}
            sm={3}
            md={2}
            lg={2}
            className={classes.card}
        >
            <div className={classes.avatarWrap}>
                <img src={props.image} alt="card"className={classes.avatar} /> 
                <span className={classes.tick}>
                    <img src={"assets/tick.svg"}alt="card" />
                </span>
            </div>
            {/* <img src={props.image} className={classes.img} /> */}
            <div className={classes.heading}>{props.heading}</div>
            <div className={classes.eth}>
                <span>
                    <span className={classes.ethValue}>
                        {props.ETH}
                    </span>
                    {" ETH"}
                </span>
            </div>
        </Grid>

    )
}