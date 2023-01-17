import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

//images
import Award from "../assest/Images/award-1.svg";
import Award2 from "../assest/Images/award-2.svg";

function Awards() {
  return (
    <Grid
      container
      sx={{
        py: 5,
        backgroundColor: "#F4F4F4",
        justifyContent: "space-evenly",
        "@media(max-width:600px)": { display: "none" },
      }}
      spacing={5}
    >
      <Grid item  md={10} sm={2}>
        <Typography variant="body1" fontSize="35px" fontWeight="700" textAlign="center">
          Awards
        </Typography>
      </Grid>

      <Grid item  sm={11} md={10}>

        <Grid container sx={{ justifyContent: "space-evenly" }} spacing={5}>

          <Grid item sm={5} md={4} >
            <Grid container spacing={1} sx={{ alignItem: "flex-start" }}>
              <Grid item>
                <Box component="img" src={Award} />
              </Grid>
              <Grid item sx={{ fontSize: "65px", alignItems: "baseline" }}>
                <Box component="span">5</Box>
                <Typography variant="span" fontSize="15px">
                  Rating digital design studios (TAGLINE)
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={5} md={4}>
            <Grid container spacing={1} sx={{ alignItem: "flex-start" }}>
              <Grid item>
                <Box component="img" src={Award2} />
              </Grid>
              <Grid item sx={{ fontSize: "65px", alignItems: "baseline" }}>
                <Box component="span">5</Box>
                <Typography variant="span" fontSize="15px">
                  Rating digital design studios (TAGLINE)
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sm={5} md={4}>
            <Grid container spacing={1} sx={{ alignItem: "flex-start" }}>
              <Grid item>
                <Box component="img" src={Award2} />
              </Grid>
              <Grid item sx={{ fontSize: "65px", alignItems: "baseline" }}>
                <Box component="span">5</Box>
                <Typography variant="span" fontSize="15px">
                  Rating digital design studios (TAGLINE)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Awards;
