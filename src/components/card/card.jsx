import React from 'react'

import { useStyles } from './styles'
import { Grid, Link } from '@material-ui/core'
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    const classes = useStyles()
    let navigate = useNavigate(); 
    return (
        <Grid
            item

            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.card}
            onClick={() => navigate("/item")}
        >
            <img src={props.image} alt="card"className={classes.img} />
            <div className={classes.heading}>{props.heading}</div>
            <div className={classes.eth}>
                <span>
                    <span className={classes.ethValue}>
                        {props.ETH}
                    </span>
                    {" ETH"}
                </span>
                <span className={classes.eth}>
                    <img src="assets/heart.svg"alt="sfs" />
                    <span className={classes.likes}>
                        {props.likes}
                    </span>
                </span>


            </div>
        </Grid>

    )
}