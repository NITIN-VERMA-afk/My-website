
import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Resume: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          NITIN VERMA
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Web Developer | MERN Stack
        </Typography>

        <Divider sx={{ marginY: 2 }} />

       

        <Divider sx={{ marginY: 2 }} />

        <section className="technical-skills">
          <Typography variant="h5">Technical Skills</Typography>
          <List>
            <ListItem>
              <ListItemText primary="JavaScript (ES6+)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="TypeScript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="React.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Node.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Express.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="MongoDB" />
            </ListItem>
            <ListItem>
              <ListItemText primary="HTML5, CSS3" />
            </ListItem>
            
          </List>
        </section>

        <Divider sx={{ marginY: 2 }} />

        <section className="professional-skills">
          <Typography variant="h5">Professional Skills</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Team Collaboration" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Problem Solving" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communication" />
            </ListItem>
           
          </List>
        </section>

        <Divider sx={{ marginY: 2 }} />

        <section className="projects">
          <Typography variant="h5">Projects</Typography>
          <List>
            <ListItem>
              <Typography variant="h6">my-website</Typography>
              <ListItemText primary="it show details about me" />
            </ListItem>
            <ListItem>
              <Typography variant="h6">zomato clone</Typography>
              <ListItemText primary="its a zomato clone" />
            </ListItem>
         
          </List>
        </section>

        <Divider sx={{ marginY: 2 }} />

        <section className="courses">
          <Typography variant="h5">Courses</Typography>
          <List>
            <ListItem>
              <ListItemText primary="full stack development course" />
            </ListItem>
           
            
          </List>
        </section>

        <Divider sx={{ marginY: 2 }} />

        <section className="languages">
          <Typography variant="h5">Languages</Typography>
          <List>
            <ListItem>
              <ListItemText primary="English (Fluent)" />
            </ListItem>
            
          </List>
        </section>
        <section className="contact">
          <Typography variant="h5">Contact Information</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Email:nitinvermanv61506@gmail.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="LinkedIn: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="GitHub: " />
            </ListItem>
          </List>
        </section>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="body2" color="textSecondary">
          feel free to contact
        </Typography>
      </Paper>
    </Container>
  );
};

export default Resume;


