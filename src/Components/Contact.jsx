import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../assest/CSS/contact.css";

const initialState ={
  name:"",
  email:"",
  number:"",
  msg:""
}




function Contact() {

const [formData, setFormData] = useState(initialState);
const [err, setErr] = useState(false);
const {name,email,number,msg} = formData
  
const handleChange =(e)=>{
  const {name,value} = e.target
  setFormData({
    ...formData,
    [name]:value
  })
  
  
}

// validation function
const validate =(formData)=>{
  const {name,email,number,msg} = formData;
  if(name.length<3){
    return true
  }else if(email.length<1){
    return true
  }else if(number.length<10){
    return true
  } else if(msg.length < 10){
    return true
  }else{
    return false
  }
}

//form submit
const handleSubmit= (e)=>{
  e.preventDefault()
  console.log(formData)
  setErr(validate(formData))
  // setFormData({name:"",email:"",number:"",msg:""})
}

  return (
    <Grid
      container
      sx={{
        mt: 5,
        justifyContent: "space-around",
        "@media(max-width:450px)": { mt: 1 },
      }}
      spacing={2}
    >
      <Grid item md={10} xs={11}>
        <Typography
          variant="body1"
          textAlign="start"
          fontSize="40px"
          fontWeight="600"
          mb="45px"
          sx={{
            "@media(max-width:450px)": {
              fontSize: "20px",
              textAlign: "center",
              mb: "10px",
            },
          }}
          className="contactHeading"
        >
          Tell us about your project,
          <br />
         <small> please be descriptive.</small>
        </Typography>
      </Grid>

      {/* contact form start from here */}
      <Grid item xs={11} sm={10} md={11}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4} sx={{ justifyContent: "space-evenly" }} >
            <Grid item xs={12} md={10}>
              <TextField
                variant="standard"
                type="text"
                placeholder="Full Name"
                fullWidth
                className="contactFromItem"
                name="name"
                onChange={handleChange}
                value={name}
                error={err}
              />
             {
              err&&name.length<3? <Typography variant="body1" color="red">Name Field Required</Typography>:""
             }
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                variant="standard"
                type="email"
                placeholder="Email"
                fullWidth
                className="contactFromItem"
                name="email"
                onChange={handleChange}
                value={email}
              />
              {
              err&& email.length <1? <Typography variant="body1" color="red">Email Field Can't Empty Required</Typography>:""
             }
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                variant="standard"
                type="number"
                placeholder="Phone No"
                fullWidth
                className="contactFromItem"
                name="number"
                onChange={handleChange}
                value={number}
              />
              {
              err && number.length <10? <Typography variant="body1" color="red">Mobile Number Must Be 10 Digit</Typography>:""
             }
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                variant="standard"
                type="text"
                placeholder="Message"
                multiline
                rows={3}
                fullWidth
                className="contactFromItem"
                name="msg"
                onChange={handleChange}
                value={msg}
              />
              {
              err&& msg.length < 10? <Typography variant="body1" color="red">Message atleast 10 character long</Typography>:""
             }
            </Grid>
            <Grid item md={3} sm={4} xs={8}>
              <Button variant="contained" className="contactBtn" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
