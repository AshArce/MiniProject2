import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <footer style={{ 
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: 'white', 
        paddingTop: '5%',
        paddingBottom: '8%',
        paddingLeft: '10%',
        paddingRight: '10%',
        marginTop: '20px', 
        display: 'flex', 
        justifyContent: 'center' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        maxWidth: '1200px', 
        width: '100%' }}>

      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom style={{fontSize: '16px', fontWeight: 'bold'}}>
            SHOP
          </Typography>
          <ul style={listStyle}>
            <li>Category</li>
            <li>Home</li>
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li>
          </ul>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom style={{fontSize: '16px', fontWeight: 'bold'}}>
            HELP
          </Typography>
          <ul style={listStyle}>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Accessibility</li>
          </ul>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={6} md={3} >
          <Typography variant="h6" gutterBottom style={{fontSize: '16px', fontWeight: 'bold'}}>
            SUPPORT
          </Typography>
          <ul style={listStyle}>
            <li>Order Status</li>
            <li>Courier</li>
            <li>Delivery</li>
            <li>Returns</li>
          </ul>
        </Grid>

        {/* Fourth Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom style={{fontSize: '16px', fontWeight: 'bold'}}>
            SUBSCRIBE
          </Typography>
          <p>Subscribe to get 10% off your first order</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input placeholder="Enter your email" />
            <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
              Subscribe
            </Button>
          </div>
          <p>Follow us on:</p>
          <div style={{ display: 'flex' }}>
            <FacebookIcon style={{ marginRight: '10px' }} />
            <TwitterIcon style={{ marginRight: '10px' }} />
            <InstagramIcon style={{ marginRight: '10px' }} />
            <LinkedInIcon />
          </div>
        </Grid>
      </Grid>
    </div>
    </footer>
  );
};

export default Footer;
