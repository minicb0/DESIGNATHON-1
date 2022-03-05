import React from 'react'
import { Grid } from '@material-ui/core'
import { Card } from '../card'
import { useStyles } from './styles'

export const HotBirds = () => {
    const classes = useStyles()
    return (
        <>

            <Grid
                container
                className={classes.hotbird}
            >
                <div className={classes.header}>
                    Hot Bids
                </div>
                <Card
                    image={"assets/hotBirds/image_1.png"}
                    heading="Abstact Smoke Red Blue"
                    ETH={1.25}
                    likes={92}
                />
                <Card
                    image={"assets/hotBirds/image_2.png"}
                    heading="Mountain Landscape"
                    ETH={0.20}
                    likes={25}
                />
                <Card
                    image={"assets/hotBirds/image_3.png"}
                    heading="Paint Color on Wall"
                    ETH={0.55}
                    likes={55}
                />
                <Card
                    image={"assets/hotBirds/image_4.png"}
                    heading="Abstract Patern"
                    ETH={0.87}
                    likes={82}
                />
                <Card
                    image={"assets/hotBirds/image_5.png"}
                    heading="White Line Grafiti"
                    ETH={0.09}
                    likes={22}
                />
                <Card
                    image={"assets/hotBirds/image_6.png"}
                    heading="Abstract Triangle"
                    ETH={0.90}
                    likes={71}
                />
                <Card
                    image={"assets/hotBirds/image_7.png"}
                    heading="Lake Landscape"
                    ETH={0.52}
                    likes={63}
                />
                <Card
                    image={"assets/hotBirds/image_8.png"}
                    heading="Blue Red Art"
                    ETH={0.85}
                    likes={66}
                />
            </Grid>

        </>
    )
}