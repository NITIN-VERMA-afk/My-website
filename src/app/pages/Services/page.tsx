"use client";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ServiceCard from "../../components/ServiceCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  return (
    <div className="m-8">
      <Typography style={{ textAlign: "center", color: "white" }} variant="h1">
        services we provide
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "15px",
                backgroundColor: "black",
              }}
            >
              <ServiceCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
