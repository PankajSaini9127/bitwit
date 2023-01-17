import { Box, Grid, Typography } from "@mui/material";
import React from "react";

//images
import NavBgImg from "../assest/Images/NavImg/slide__4.jpg";

// css
import '../assest/CSS/Navbar.css'


function Navbar() {

const NavBg = ()=>{
    return(
      <>
      <Grid
        
      sx={{
        height:"100%",
        // width:"100vw",
        backgroundImage: `url(${NavBgImg})`,
        backgroundSize: "cover",
      }}
    ></Grid>
  <Grid
        container
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "70vh",
          width: "70vh",
          backgroundColor: "#24005A",
          opacity: "0.3",
          // paddingLeft:"20%",
          // paddingTop:"100px"
        }}

      ></Grid>
      <Grid
        container
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          pt: "100px",
          pl: "25vh",
          width: "70vh",
        }}
        className="NavHeroSection"
      >
        <Grid item xs={12}>
          <Typography
            variant="body1"
            fontSize="35px"
            fontWeight="500"
            color="white"
            position="static"
            top="40px"
          >
            Bitwit-Tech
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Grid container>
            <Grid item ms={3}></Grid>
            <Grid item ms={9}>
              <Typography
                variant="body1"
                fontSize="25px"
                color="white"
                fontWeight="400"
              >
                We Develop Experiences that make people's life easier.
              </Typography>
              <Grid item md={9}>
              <Grid container sx={{mt:4}}>
                <Grid item >
                  <Typography
                  variant="span"
                  className="navArrow"
                 ></Typography>
                 </Grid>
                <Grid item md={6}  >
                <Typography variant="span" className="navDiscover" >Discover Now</Typography>
                </Grid>
              </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    </>
    )
  }

  return (
    <>
    <Grid container
     sx={{
      height:"100vh",
      display:"flex",
      flexDirection:"column"
     }}>
        <NavBg/>
     </Grid>
      {/* <Grid
        container
        sx={{
          height: "100vh",
          backgroundImage: `url(${NavBgImg})`,
          backgroundSize: "cover",
        }}
      ></Grid> */}
      
      {/* </Grid> */}
    </>
  );
}

export default Navbar;
