"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

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
        marginBottom:0
      }}
    >
      <Container className="flex items-center gap-7" maxWidth="xl">
        <Avatar
          alt="NITIN VERMA"
          src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
        />

        <Typography variant="body2" align="center">
          NITIN VERMA
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()}NITIN VERMA.COM
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
