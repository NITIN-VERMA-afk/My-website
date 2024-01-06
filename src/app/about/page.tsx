"use client"
import { Box, Typography, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';



import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const iconBox = {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #000",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "black",
  };

  const AboutText = {
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "60%",
    margin: "3% 20% ",
  };
 
  
  const Icons = [
    { id: 1, name: "Games", icons: <SportsEsportsIcon/> },
    { id: 2, name: "Books", icons: <MenuBookIcon/> },
    { id: 3, name: "Music", icons: <LibraryMusicIcon/> },
    { id: 4, name: "Movies", icons: <LiveTvIcon/> },
    { id: 5, name: "Sports", icons: <SportsBasketballIcon/>},
    { id: 6, name: "Travel", icons: <FlightTakeoffIcon/> },
  ];

  return (
    <div style={{ color: "white" }}>
      <Box className=" flex flex-col items-center  mt-2 justify-center">
        <Box style={iconBox}>
          <InfoIcon />
        </Box>
        <Typography variant="h1">About me</Typography>
        <Typography variant="subtitle1">its a intro</Typography>
      </Box>
      <Box style={AboutText}>
        <Typography variant="subtitle1">
        MERN stack enthusiast here! I specialize in crafting seamless web experiences with MongoDB, Express.js, React.js, and Node.js. From robust backend solutions to sleek frontend interfaces, Im passionate about turning ideas into high-quality code. Lets build something amazing together! 
        </Typography>
      </Box>
      
      
      <Box sx={{ display: "flex", alignContent: "center",justifyContent:"space-around" }}>
     
        <Box
        sm={{
          display:"flex",
          flexDirection:"row"
        }}
        xs={{
          display:"flex",
          flexDirection:"column",
          
        }}
          sx={{
            display: "flex",
            flexDirection:"column",
            listStyle: "none",
           
          }}
        >
          <Typography variant="h2">Personal Details</Typography>
          <Box sx={{display:"flex"}}>
          <ul style={{ listStyle: "none" }}>
            <li>Phone no.</li>
            <li>Email </li>
            <li>address</li>
            <li>website</li>
            <li>job-status</li>
          </ul>
          <ul style={{ listStyle: "none" }}>
            <li>9015308881</li>
            <li>nitinvermanv61506@gmail.com</li>
            <li>HP-24</li>
            <li>www.nitinverma.com</li>
            <li>Freelancer</li>
          </ul>

          </Box>
        
        </Box>

        <Box>
          <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h2">My intrests</Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              
            {Icons.map((icon, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item sx={{ background: "", color: "" }}>
                  {icon.icons}<br/> {icon.name}
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box sx={{display:"flex",alignContent:"center",justifyContent:"center"}}>
      <Button variant="contained">Dowenload Cv</Button>
      </Box>
    </div>
  );
};

export default About;