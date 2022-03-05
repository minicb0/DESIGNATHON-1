import React from 'react'

import { useStyles } from './styles'
import { Grid } from '@material-ui/core'

export const Card = () => {
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <Grid container>
                <Grid item xs={4} lg={4}>
                    Hello
                </Grid>
                <Grid item xs={4} lg={4}>
                    Hello
                </Grid>
                <Grid item xs={4} lg={4}>
                    Hello
                </Grid>
                <Grid item xs={4} lg={4}>
                    Hello
                </Grid>
            </Grid>
        </div>
    )
}