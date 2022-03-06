import React from 'react'

import { HotBirds } from '../../components/hotBirds'
import { TopSellers } from '../../components/sellers'
import { useStyles } from './styles'
export const Home = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.home}>
        <div className={classes.wrapper}>
          <TopSellers />
          <div className={classes.header}>
            Hot Bids
          </div>
          <HotBirds />
        </div>
      </div>

    </>
  )
}