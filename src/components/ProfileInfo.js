import { Avatar,Paper, Typography,Chip, Grid,Card, Accordion } from '@mui/material'
import React from 'react'

export default function ProfileInfo() {
  return (
    <Grid style={{margin:"auto"}}>

        <Avatar
             alt="profile image missing" 
             src={"https://lh3.googleusercontent.com/a-/AOh14Gih-MycHGGFQhsmcbkc4Y6QFgdNwiwcHQa0bSol5A=s96-c"}
             sx={{ width: 112, height: 112 }}
        />
        <Typography variant='h4' component={"h5"}>Paras mani</Typography>
        <Chip
            avatar={<Avatar alt="Natacha" src="https://lh3.googleusercontent.com/a-/AOh14Gih-MycHGGFQhsmcbkc4Y6QFgdNwiwcHQa0bSol5A=s96-c" />}
            label="Gold Memeber"
            // variant="outlined"
            color='primary'
        />
        <p></p>
        <Chip
            avatar={<Avatar>@</Avatar>}
            label="Parasmani300@gmail.com"
        />
        <p></p>
        <Chip
            avatar={<Avatar>#</Avatar>}
            label="+91-9546539823"
        />
    </Grid>
  )
}
