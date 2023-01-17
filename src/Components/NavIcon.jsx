import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import "../assest/CSS/navIcon.css";

//icon from material ui
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import CloseIcon from '@mui/icons-material/Close';

function NavIcon({isOpen, setIsOpen}) {
  return (
    <>
      <Grid
        container
        sx={{ justifyContent: "space-evenly", position: "fixed", top: "20px" }}
      >
        <Grid
          item
          xs={11}
          sx={{ "@media(max-width:450px)": { display: "none" } }}
        >
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={1}>
              <Button variant="contained" className="navIconBtn">
                <WindowIcon fontSize="medium" className="navIconItem" />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" className="navIconBtn" onClick={()=>setIsOpen(!isOpen)}>
                {
                  isOpen?<CloseIcon className="navIconItem" />:<MenuIcon />
                }
                
                  
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* mobile version NavBar */}
      <Grid container sx={{display:"none",'@media(max-width:450px)':{display:"block"}}}>
        <Grid
          item
          sx={{
            display: "flex",
            height: "50px",
            backgroundColor: "white",
            width: "100%",
            borderBottom: "1px solid rgba(0,0,0,0.29)",
            position:"fixed",
            top:"0",
            left:"0",
            zIndex:2,
          }}
        >
            <Grid container sx={{justifyContent:"space-evenly",alignItems:"center",textAlign:"center"}}>
                <Grid item xs={2}>
                <WindowIcon fontSize="large" />  
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" fontSize="20px" fontWeight="800">BitWit Tech</Typography>
                </Grid>
                <Grid item xs={2}  onClick={()=>setIsOpen(!isOpen)}>
                {
                  isOpen?<CloseIcon className="navIconItem" />:<MenuIcon />
                }
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default NavIcon;
