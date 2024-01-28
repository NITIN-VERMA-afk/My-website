"use client"
import { Container,TextField,Box,Button,Typography } from "@mui/material"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Contactpage = () => {
  return (
    <>
    <Container sx={{display:'flex'}}>
      <Box sx={{display:"flex",flexDirection:"column", backgroundColor:"#FBF6EE",width:"500px",padding:"20px",gap:"10px"}}>
      <TextField helperText="plz enter your name" label="name" variant="standard"   />
      <TextField helperText="plz enter your email" label="email" variant="standard"   />
      <TextField
          id="outlined-multiline-static"
          label="message"
          multiline
          rows={4}
          defaultValue="Enter your text here"
        />
      <Button  size="small"variant="contained" color="error">send</Button>
      

      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column",backgroundColor:"tomato",gap:"6px"}}>
        <Typography variant="h1" >Contact us</Typography>
        <Typography variant="h6"><AddLocationIcon/>  32,d5,laptanager</Typography>
        <Typography variant="h6"> <EmailIcon/> nitinvermanv61506@gmail.com</Typography>
        <Typography variant="h6"> <PhoneAndroidIcon/>  0987654321</Typography>
        <Typography variant="h6" > <LocalPhoneIcon/> 54678</Typography>
      </Box>
   

    </Container>
      
    </>
  )
}

export default Contactpage
