import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import icons from "./pics/icons.png";

function Footer() {
  return (
    <Card style={{ borderRadius: '0px', backgroundColor: '#000' }}>
      <Grid container>
        <Grid item xs={4}>
          <Typography style={{ color: '#fff', fontSize: '30px', fontWeight: 500, marginTop: '50px', marginBottom: '20px',cursor:'pointer' }}>Explorely</Typography>
          <img src={icons} alt="icons" style={{cursor:'pointer'}} />
        </Grid>
        <Grid item xs={4} style={{cursor:'pointer'}}>
          <Typography style={{ color: '#fff', marginBottom: '10px',marginTop:'20px' }}>Home</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>About Us</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>Contact Us</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>Terms of Service</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>Privacy Policy</Typography>
          <Typography style={{ color: '#fff', marginBottom: '30px' }}>Copyright Info</Typography>
        </Grid>
        <Grid item xs={4} style={{cursor:'pointer'}}>
          <Typography style={{ color: '#fff', marginBottom: '10px',marginTop:'20px'  }}>Archives</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>Tags</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>Advertise with Us</Typography>
          <Typography style={{ color: '#fff', marginBottom: '10px' }}>FAQ</Typography>
          <Typography style={{ color: '#fff', marginBottom: '30px' }}>Support</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Footer;
