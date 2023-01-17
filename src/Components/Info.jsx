import { Grid, Typography } from "@mui/material";
import React from "react";

// images
import InfoImg1 from "../assest/Images/Info/item-1.jpg";
import InfoImg2 from "../assest/Images/Info/item-2.jpg";
import InfoImg3 from "../assest/Images/Info/item-3.jpg";
import InfoImg4 from "../assest/Images/Info/item-4.jpg";
import InfoImg5 from "../assest/Images/Info/item-5.jpg";
import InfoImg6 from "../assest/Images/Info/item-6.jpg";
import InfoImg7 from "../assest/Images/Info/item-7.jpg";
import InfoImg8 from "../assest/Images/Info/item-8.jpg";
import InfoImg9 from "../assest/Images/Info/item-9.jpg";

//css
import "../assest/CSS/info.css";


// info img data

// const dataArray = [
//     { img:InfoImg1, itemTitle:'What are you  Looking For', info:"Rebranding"},
//     { img:InfoImg2, itemTitle:'More than just a template', info:"Digital"},
//     { img:InfoImg3, itemTitle:'Minimalism attracts', info:"Picture"},
//     { img:InfoImg4, itemTitle:'Every minute is amazing', info:"Video"},
//     { img:InfoImg5, itemTitle:'Colour energy', info:"Rebranding"},
//     { img:InfoImg6, itemTitle:'The future has already come', info:"Picture"},
//     { img:InfoImg7, itemTitle:'The Digital word is beautiful', info:"Rebranding"},
//     { img:InfoImg8, itemTitle:'Give went to your feeling', info:"Digital"},
//     { img:InfoImg9, itemTitle:'Riots of emotions', info:"Rebranding"},
// ]


const InfoImg = ({img,itemTitle,info}) => {
  return (
    <Grid
      item
      md={4}
      sm={6}
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        width: "100%",
        height: "350px",
      }}
      className="Service"
    >
      <Grid
        container
        spacing={1}
        className="infoDetail"
        sx={{ justifyContent:"space-evenly",height:"100%",position:"relative",top:"8px",width:"100%",left:"8px"}}
      >
        <Grid item xs={11} sx={{ mt: 4,px:8 }}>
          <Typography
            variant="body1"
            fontSize="30px"
            fontWeight="700"
            color="white"
          >
           {itemTitle}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1" color="rgba(255,255,255,0.9)">
           {info}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

function Info() {
    
  return (
    <Grid container sx={{ py: 10 ,'@media(max-width:450px)':{py:0}}}>
        <InfoImg img={InfoImg1} itemTitle="What you were looking for" info="Rebranding"/>
        <InfoImg img={InfoImg2} itemTitle="More than just a template" info="Digital"/>
        <InfoImg img={InfoImg3} itemTitle="Minimalism attracts" info="Picture"/>
        <InfoImg img={InfoImg4} itemTitle="Every minute is amazing" info="Video"/>
        <InfoImg img={InfoImg5} itemTitle="Colour energy" info="Rebranding"/>
        <InfoImg img={InfoImg6} itemTitle="The future has already come" info="Picture"/>
        <InfoImg img={InfoImg7} itemTitle="The Digital word is beautiful" info="Rebranding"/>
        <InfoImg img={InfoImg8} itemTitle="Give went to your feeling" info="Digital"/>
        <InfoImg img={InfoImg9} itemTitle="Riots of emotions" info="Rebranding"/>
    </Grid>
  );
}

export default Info;
