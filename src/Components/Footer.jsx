import React from "react";

//mui components
import { Button, Grid, Typography, Box } from "@mui/material";

//icon from material ui
import CopyrightIcon from "@mui/icons-material/Copyright";

//css
import "../assest/CSS/Footer.css";

// footer text design css
const footerText = {
  fontSize: "35px",
  fontWeight: "700",
  "@media(max-width:450px)": {
    fontSize: "28px",
    mb: 1,
  },
};

function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#191919",
        mt: 5,
        justifyContent: "space-evenly",
        color: "#FFFF",
        py: 10,
        "@media(max-width:450px)": {
          py: 3,
          mt: 1,
          textAlign: "center",
        },
      }}
      className="footer"
    >
      <Grid item md={10} xs={12} sm={11}>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={footerText} >
              Have an idea or Project?
            </Typography>
            <Typography variant="body1" sx={footerText}>
              Let's talk
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className="footerDis"
            sx={{
              height: "5vh",
              "@media(max-width:900px)": { display: "none" },
            }}
          >
            <Typography className="FooterArrow"></Typography>
            <Button
              variant="text"
              sx={{
                fontWeight: "700",
                fontSize: "15px",
                position: "relative",
                left: "150px",
                top: "-5px",
                color: "rgba(200,200,200,0.5)",
              }}
              className="footerBtn"
            >
              Let's be in touch
            </Button>
          </Grid>

          {/* mobile version Btn footer start here */}
          <Grid
            item
            xs={12}
            sx={{
              display: "none",
              "@media(max-width:900px)": { display: "block" },
            }}
          >
            <Button variant="outlined" sx={{ color: "white" }}>
              Let's be in touch
            </Button>
          </Grid>
          {/* mobile version btn end here */}

          {/* Footer copyright content strt here*/}
          <Grid item xs={12}>
            <Grid
              container
              // sx={{ justifyContent: "space-between" }}
              spacing={2}
            >

              <Grid item xs={12} sm={6} md={4} sx={{ color: "rgba(200,200,200,0.5)" }}>
                <Typography variant="body1">
                  <CopyrightIcon fontSize="small" /> 2022 BitWit IT - All rights
                  reserved
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} order={{sm:4,xs:2,md:2}}>
                <Typography variant="body1">+91 5555555555</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} >
                <Typography variant="body1">bitwit@test.com</Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={2} sx={{ color: "rgba(200,200,200,0.5)" }} order={{sm:2,xs:4,md:4}}>
                <Typography variant="body1">
                  Site created by{" "}
                  <Box component="span" color="#ffff">
                    Bitwit
                  </Box>
                </Typography>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
