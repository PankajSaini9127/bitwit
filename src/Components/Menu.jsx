import { Button, Grid } from '@mui/material'
import React from 'react'

function Menu() {
    const div = {justifyContent:"center",alignItems:"center",height:"100%"};
    const btn ={color:"white",fontWeight:"800",fontSize:"40px",display:"block"}
  return (
    <Grid container sx={{height:"100vh",background:"#3D0082"}}>
        <Grid item container md={6} sx={div} order={{xs:2,md:1}}>
            <Grid>
             <Button variant="text" sx={btn}>Contact</Button>
            </Grid>
        </Grid>
        <Grid item container md={6} sx={div} order={{xs:1,md:2}}>
            <Grid>
            <Button variant="text" sx={btn}>Home</Button>
            <Button variant="text" sx={btn}>Service</Button>
            <Button variant="text" sx={btn}>Info</Button>
            <Button variant="text" sx={btn}>Our Project</Button>
            <Button variant="text" sx={btn}>Contact Us</Button>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Menu