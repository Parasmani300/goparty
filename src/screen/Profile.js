import { Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ControlledAccordions from '../components/ControlledAccordions'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import ProfileInfo from '../components/ProfileInfo'

export default function Profile() {
  return (
    <div>
      <PrimarySearchAppBar />
        {/* <Paper elevation={3}> */}
          <Grid container spacing={0} style={{marginTop:"40px"}}>
            <Grid item xs={6} style={{margin:"auto"}}>
                <ProfileInfo />
            </Grid>
            <Grid item xs={4}>
                <ControlledAccordions />
            </Grid>
          </Grid>
        {/* </Paper> */}
    </div>
  )
}
