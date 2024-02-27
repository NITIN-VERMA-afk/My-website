import {
  Container,
  TextField,
  Box,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Contactpage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <form action="post">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                background: "#9333EA",
                width: "600",
                paddingLeft: "30",
              }}
            >
              <TextField
                id="filled-basic-name"
                label="Your name"
                variant="filled"
              />
              <TextField
                id="filled-basic-email"
                label="Your email"
                variant="filled"
              />
              <TextField
                id="filled-basic-thoughts"
                label="Share your thoughts"
                variant="filled"
              />
              <Button sx={{ color: "white" }} type="submit">
                Share your thoughts
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box>
          <Button
            sx={{ backgroundColor: "#9333EA", padding: "12", color: "white" }}
          >
            Contact Us
          </Button>
          <Typography>
            i cherish every opportunity to connect with
            our visitors. Whether you have a question, an idea to share, or
            simply want to say hello, were all ears! Your feedback fuels our
            journey towards excellence, and were here to make your experience
            as seamless as possible. Feel free to reach out to us through the
            form below. We promise to respond promptly and with the utmost care.
            Your message is important to us, and were eager to hear from you.
            Lets embark on this journey together. Drop us a line, and lets
            create something remarkable!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contactpage;
