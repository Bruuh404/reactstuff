import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./footer.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    boxShadow: "none",
  }));


const Footer = () => {
  return (
    <Box sx={{ maxwidth: '100%', color:"white", bgcolor: "#1976d2", p: 4 }}>
    <Item>
      <h1>Footer</h1>
      </Item>
      {/* Grid container */}
      <Grid container spacing={2} justifyContent="center">
        {/* First column: Takes 6/12 width on small screens, 3/12 width on medium */}
        <Grid item xs={12} sm={6} md={3}>
        <Item><h3>About Us</h3></Item>
          <Item><a href="/">Thing 1</a></Item>
          <Item><a href="./page2">Thing 2</a></Item>
          <Item><a href="./page3">Thing 3</a></Item>
        </Grid>

        {/* Second column */}
        <Grid item xs={12} sm={6} md={3}>
        <Item><h3>Services</h3></Item>
           <Item><a href="/">Thing 1</a></Item>
          <Item><a href="./page2">Thing 2</a></Item>
          <Item><a href="./page3">Thing 3</a></Item>
        </Grid>

        {/* Third column */}
        <Grid item xs={12} sm={6} md={3}>
        <Item><h3>Contact Us</h3></Item>
           <Item><a href="/">Thing 1</a></Item>
          <Item><a href="./page2">Thing 2</a></Item>
          <Item><a href="./page3">Thing 3</a></Item>
        </Grid>

        {/* Fourth column */}
        <Grid item xs={12} sm={6} md={3}>
          <Item><h3>Social Media</h3></Item>
           <Item><a href="/">Thing 1</a></Item>
          <Item><a href="./page2">Thing 2</a></Item>
          <Item><a href="./page3">Thing 3</a></Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
