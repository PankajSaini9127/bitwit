import { Button, Grid, Typography } from "@mui/material";
import React from "react";

//css
import "../assest/CSS/Services.css";

function Service({ service, discrption }) {
  return (
    <Grid item md={4} sm={6} className="ServiceSection">
      <Grid container sx={{ justifyContent: "space-evenly" }}>
        <Grid item xs={6} sm={12} >
          <Typography
            variant="h6"
            fontSize="25px"
            fontWeight="500"
            mb="8px"
            sx={{ "@media(max-width:450px)": { textAlign: "center" } }}
          >
            {service}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            color="rgba(25,25,25,0.5)"
            mb="10px"
            sx={{ "@media(max-width:450px)": { textAlign: "center" } }}
          >
            {discrption}
          </Typography>
        </Grid>

        {/* medium screen Service Discover Btn */}
        <Grid item md={12} sx={{ "@media(max-width:900px)": { display: "none" } }}>
          <Typography className="servicesArrow"></Typography>
          <Button
            variant="text"
            className="serviceBtn"
            sx={{
              fontWeight: "700",
              fontSize: "15px",
              position: "relative",
              left: "150px",
              color: "black",
            }}
          >
            Discover Now
          </Button>
        </Grid>

        {/* mobile version service button */}
        <Grid
          item
          xs={6}
          sm={12}
          sx={{
            display: "none",
            mt: 2,
            "@media(max-width:900px)": { display: "block" },
          }}
          
        >
          <Button variant="outlined" className="serviceBtnMobile">Discover Now</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Service;
