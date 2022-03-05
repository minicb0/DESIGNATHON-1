import React from 'react'
import { Grid } from '@material-ui/core'
import { SellersCard } from '../sellersCard'
import { useStyles } from './styles'

export const TopSellers = () => {
    const classes = useStyles()
    return (
        <>
            <Grid
                container
                className={classes.hotbird}
            >
                <div className={classes.header}>
                    Top Sellers
                </div>
                <SellersCard
                    image={"assets/topSellers/image_1.png"}
                    heading="Mia Ayana"
                    ETH={5.250}
                />
                <SellersCard
                    image={"assets/topSellers/image_2.png"}
                    heading="Rian Leon"
                    ETH={4.932}
                />
                <SellersCard
                    image={"assets/topSellers/image_3.png"}
                    heading="Lady Young"
                    ETH={4.620}
                />
                <SellersCard
                    image={"assets/topSellers/image_4.png"}
                    heading="Black Glass"
                    ETH={4.125}
                />
                <SellersCard
                    image={"assets/topSellers/image_5.png"}
                    heading="Budhiman"
                    ETH={3.921}
                />
            </Grid>
        </>
    )
}