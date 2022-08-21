import { Container } from '@mui/system'
import React from 'react'
import PrimarySearchAppBar from '../components/PrimarySearchAppBar'
import RecipeReviewCard from '../components/CardInformation'
import { Grid } from '@mui/material'

export default function Home() {
    const placeholder = [
        {
            name:"1"
        },
        {
            name:"2"
        },
        {
            name:"3"
        },
        {
            name:"3"
        },
        {
            name:"3"
        }
    ]
  return (
    <div>
        <PrimarySearchAppBar />
        <Container style={{marginTop:"20px"}}>
            <Grid container spacing="2">
                {placeholder.map(item => {
                    return (
                    <Grid item xs={12} md={4} spacing="1">
                        <RecipeReviewCard />
                    </Grid>
                    )
                })}
            </Grid>
            {/* <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard /> */}
        </Container>
    </div>
  )
}
