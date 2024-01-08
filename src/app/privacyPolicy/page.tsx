import React from "react";

import { Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const page = () => {
  return <>
   <Container maxWidth="md" className="my-8">
      

      <Typography variant="h4" className="mb-4">
        Privacy Policy
      </Typography>

      <Typography variant="subtitle1" color="textSecondary" className="mb-4">
         {new Date().getFullYear()}
      </Typography>

      <Typography variant="body1" className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
        personal information. Please read this Privacy Policy carefully before using our services.
      </Typography>

      
      <Divider className="my-4" />
      <Typography variant="h5" className="mb-2">
        Contact Us
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="By email:nitinvermanv61506@gmail.com" secondary="nitinvermanv61506@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemText primary="By visiting this page on our website:contact" secondary="yourwebsite.com/contact" />
        </ListItem>
      </List>
    </Container>
  </>;
};

export default page;
