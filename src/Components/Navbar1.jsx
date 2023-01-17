import { Button, Grid, Typography } from "@mui/material";
import React from "react";

import { useRef } from "react";

//icon from mui
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "../assest/CSS/nav.css";
//images
import NavBg1 from "../assest/Images/NavImg/navBg1.jpg";
import NavBg4 from "../assest/Images/NavImg/slide__4.jpg";
import NavBg3 from "../assest/Images/NavImg/slide__3.jpg";
import NavBg2 from "../assest/Images/NavImg/slide__2.jpg";

function Navbar1() {
  const scrollNavBg = useRef();

  const scroll = (slide) => {
    scrollNavBg.current.scrollLeft += slide;
    console.log("scrolled function");
  };

  const NavBgImg = ({ img }) => {
    return (
      <>
        <Grid
          sx={{
            background: `url(${img}) center center no-repeat`,
            height: "100%",
            width: "90vw",
            backgroundSize: "cover",
            "@media(max-width:900px)": {
              width: "100vw",
            },
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
            "@media(max-width:450px)": {
              height: "200px",
              width: "200px",
              top: "45px",
            },
          }}
          className="navContentBG"
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
            "@media(max-width:450px)": {
              width: "350px",
              pt: "20px",
              left: "-45%",
            },
          }}
          className="NavHeroSection"
        >
          <Grid item xs={12}>
            <Typography
              variant="body1"
              fontSize="35px"
              fontWeight="500"
              color="white"
              position="relative"
              top="10px"
              sx={{
                "@media(max-width:450px)": {
                  fontSize: "25px",
                  zIndex: 1,
                  top: "40px",
                  mb: 4,
                },
              }}
            >
              BitWit Tech
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Grid container>
              <Grid item md={9}>
                <Typography
                  variant="body1"
                  fontSize="25px"
                  color="white"
                  fontWeight="400"
                  sx={{ "@media(max-width:450px)": { fontSize: "15px" } }}
                >
                  We Develop Experiences that make people's life easier.
                </Typography>
                <Grid item md={9}>
                  {/* Desktop version Nav Explore Button */}
                  <Grid
                    container
                    sx={{
                      mt: 4,
                      "@media(max-width:900px)": { display: "none" },
                    }}
                  >
                    <Grid item>
                      <Typography
                        variant="span"
                        className="navArrow"
                      ></Typography>
                    </Grid>
                    <Grid item md={8}>
                      <Typography variant="span" className="navDiscover">
                        Discover Now
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Mobile version Nav btn Explore Btn*/}
                  <Grid
                    container
                    sx={{
                      justifyContent: "space-evenly",
                      display: "none",
                      "@media(max-width:900px)": { display: "flex" },
                    }}
                  >
                    <Grid item xs={8} sm={10}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ mt: 2, fontSize: "8px", color: "white" }}
                       className="navBtnMobile"
                      >
                        Discover Now
                      </Button>
                    </Grid>
                  </Grid>
                  {/* Mobile verison Nav Explore Btn Ends Here */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          flexDirection: "column",
          overflowX: "scroll",
          "@media(max-width:450px)": { height: "300px", width: "100vw", mt: 6 },
        }}
        ref={scrollNavBg}
        className="navWrappper"
      >
        <NavBgImg img={NavBg4} />
        <NavBgImg img={NavBg2} />
        <NavBgImg img={NavBg3} />
        <NavBgImg img={NavBg1} />
      </Grid>
      <Grid
        container
        sx={{
          position: "absolute",
          top: "85vh",
          "@media(max-width:450px)": { display: "none" },
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            position: "sticky",
          }}
        >
          <Grid
            item
            md={2}
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            <Button
              variant="text"
              onClick={() => scroll(-1116)}
              className="NavBtnLeftScroll"
            ></Button>
          </Grid>

          <Grid item sm={8}>
            <Typography
              variant="body1"
              fontSize="25px"
              color="rgba(255,255,255,0.49)"
              mt="5px"
            >
              Scroll to explore
            </Typography>
            <Grid className="scrollToExplore">
              <ArrowDropDownIcon />
            </Grid>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              textAlign: "center",
            }}
          >
            <Button
              variant="text"
              sx={{ color: "white", fontWeight: "600" }}
              onClick={() => scroll(1118)}
              className="NavBtnLeftScroll rightScrollBtn"
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar1;
