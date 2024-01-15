"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

function Footer() {
  return (
    <Box 
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "rgb(147,51,234)",
        color: "white",
        
       
      }}
    >
      <Container
        className="flex items-center gap-7 justify-around"
        maxWidth="xl"
      >
        <Box className="flex align-middle items-center gap-5">
          <Avatar
            alt="NITIN VERMA"
            src="https://i.pinimg.com/236x/37/f4/03/37f4034a0ecd49db145e5ef69db79fa1.jpg"
          />

          <Typography variant="body2" align="center">
            NITIN VERMA
          </Typography>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()}NITIN VERMA.COM
          </Typography>
        </Box>

        <Box className="flex align-middle items-center gap-5">
          <Typography variant="body2">
            {" "}
            <Link href="/disclamer">disclamer</Link>{" "}
          </Typography>
          <Typography variant="body2">
            {" "}
            <Link href="/privacyPolicy"> PrivacyPolicy</Link>{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
