"use client";
/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';


import GitProjectCard from "../components/GridprojectCard";


const projects = [
  {
    id: 1,
    name: "Project 1",
    img: "https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-123902.jpg",
    description: "A cool project",
    language: "JavaScript",
    updated_at: "2023-10-12",
    html_url: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    name: "Project 2",
    img: "https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-123902.jpg",
    description: "Another awesome project",
    language: "Python",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    name: "Project 3",
    img: "https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-123902.jpg",
    description: "Another awesome project",
    language: "TypeScript",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
  {
    id: 4,
    name: "Project 4",
    img: "https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-123902.jpg",
    description: "Another awesome project",
    language: "TypeScript",
    updated_at: "2023-10-10",
    html_url: "https://github.com/yourusername/project2",
  },
];

const Item = styled(Paper)(({ theme }):any => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Projects() {
  return (
    <Box className="m-24" sx={{ flexGrow: 1, marginTop: "30px" }}>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={3} key={index}>
            <GitProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
