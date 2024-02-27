"use client"
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const serviceData = [
  {
    id: 1,
    img: "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
    services: "Web Development",
    content:
      "Crafts custom websites tailored to your unique needs, ensuring seamless functionality and a standout online experience for your visitors.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx3s0bESqvExJrdVfUt0x9YDJj2n8YOZ4GQ&usqp=CAU",
    services: "App Development",
    content:
      "Create custom web and mobile apps tailored to your unique needs, ensuring seamless functionality and a standout online experience for your visitors.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt837j6snOsLVW2dUlgpxyhLM5jpW19F9CA&usqp=CAU",
    services: "Hosting and Maintenance",
    content:
      "Enjoy worry-free hosting and regular maintenance to keep your website running smoothly. We handle the technical details so you can focus on your business.",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqDWkqXpa5oBwcapDf7IhclbH_7iXnVoq3u7XIsRtGRarkwiJ7LrWZCi-j4YZxNKntAk&usqp=CAU",
    services: "SEO Optimization",
    content:
      "Boost your visibility on search engines and drive organic traffic. Our SEO strategies optimize your website to rank higher, attracting the right audience to your digital doorstep.",
  },
];

const Services = () => {
  return (
    <div className="mt-16">
      <Typography style={{ textAlign: "center", color: "white" }} variant="h1">
        services we provide
      </Typography>

      <Box>
        <Grid container spacing={2}>
          {serviceData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "15px",
                  backgroundColor: "black",
                }}
              >
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.img}
                    title={item.services}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.services}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href="/contact">
                      <Button size="small">Contact</Button>{" "}
                    </Link>
                    <Link href="/contact">
                      <Button size="small">Learn More</Button>{" "}
                    </Link>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Services;

