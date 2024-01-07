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

  


 
  
  const Icons = [
    { id: 1, name: "Games", icons: <SportsEsportsIcon/> },
    { id: 2, name: "Books", icons: <MenuBookIcon/> },
    { id: 3, name: "Music", icons: <LibraryMusicIcon/> },
    { id: 4, name: "Movies", icons: <LiveTvIcon/> },
    { id: 5, name: "Sports", icons: <SportsBasketballIcon/>},
    { id: 6, name: "Travel", icons: <FlightTakeoffIcon/> },
  ];

  return (
    <div>
      <Box className=" flex flex-col items-center  mt-2 justify-center">
        <Box className="p-3 border-2 rounded-sm bg-white text-black">
          <InfoIcon />
        </Box>
        <Typography variant="h1">About me</Typography>
        <Typography variant="subtitle1">its a intro</Typography>
      </Box>
      <Box className="mx-32 my-5" >
        <Typography variant="subtitle1">
        MERN stack enthusiast here! I specialize in crafting seamless web experiences with MongoDB, Express.js, React.js, and Node.js. From robust backend solutions to sleek frontend interfaces, Im passionate about turning ideas into high-quality code. Lets build something amazing together! 
        </Typography>
      </Box>
      
      
      <Box className="flex flex-col md:flex-row items-center justify-around">
  <Box>
    <Typography variant="h2">Personal Details</Typography>
    <Box className="flex flex-col md:flex-row">
      <ul className="list-none md:mr-8">
        <li>Phone no.</li>
        <li>Email</li>
        <li>Address</li>
        <li>Website</li>
        <li>Job Status</li>
      </ul>
      <ul className="list-none">
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
      <Typography variant="h2">My Interests</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Icons.map((icon, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item sx={{ background: "", color: "" }}>
              {icon.icons}
              <br /> {icon.name}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
</Box>

      <Box className="flex items-center justify-center">
      <Button className="bg-blue-500 m-3" variant="contained">Dowenload Cv</Button>
      </Box>
    </div>
  );
};

export default About;