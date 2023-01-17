import { Grid, Typography } from "@mui/material";
import React from "react";
import Service from "./Service";

function Services() {
  return (
    <Grid container sx={{ justifyContent: "space-evenly", my: 3 ,'@media(max-width:450px)':{my:2}}}>
      <Grid item md={10} xs={11}>
        <Grid container sx={{justifyContent:"space-evenly"}}>
          <Grid item md={5} sm={8} >
            <Typography
              variant="body1"
              my="50px"
              fontSize="40px"
              fontWeight="600"
              sx={{'@media(max-width:450px)':{my:"10px",fontSize:"25px",fontWeight:"700",textAlign:"center"}}}
              className="serviceHeading"
            >
              These are the premium service we provide
            </Typography>
          </Grid>
          <Grid container spacing={10} >
            <Service
              service="Website Development"
              discrption="We start from idea to its development 
              and provide end to end solution. We guide our 
              valued clients through all stages in the production"
            />
            <Service
              service="Digital Marketing"
              discrption="Social media can be a great place to 
              advertise your product, services, and business.
              We provide excellent social media marketing services."
            />
            <Service
              service="Mobile Development"
              discrption="Over the years, we’ve built up specific
               knowledge and expertise in creating applications for
               almost all the niches providing best Mobile Solutions."
            />
            <Service
              service="Ui/UX Design"
              discrption="We deliver easy-to-use interfaces while providing 
              the enterprise-grade code quality."
            />
            <Service
              service="SEO"
              discrption="We are specialized in achieving top ranking in search 
              engine results by using proven,."
            />
            <Service
              service="Dedicated Server"
              discrption="We add a value to website to meet all online needs at one stop with tangible results."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
