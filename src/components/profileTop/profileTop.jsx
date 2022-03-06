import React from 'react'

import { useStyles } from './styles'

export const ProfileTop = (props) => {
    const classes = useStyles()

    return (
        <>
            <img src="assets/profile/profile_bg.svg" alt="fsfsd"className={classes.img} />
            <div className={classes.heading}>{props.heading}</div>
            <div className={classes.eth}>
                <span>
                    <span className={classes.ethValue}>
                        {props.ETH}
                    </span>
                    {" ETH"}
                </span>
                <span className={classes.eth}>
                    <img src="assets/heart.svg" alt="heart" />
                    <span className={classes.likes}>
                        {props.likes}
                    </span>
                </span>


            </div>
        </>


    )
}