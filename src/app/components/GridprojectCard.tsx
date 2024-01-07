/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const GitProjectCard = ({ project }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <img  src={project.img} alt="" height={"300px"}  />
        <Typography variant="body2">{project.description}</Typography>
        <Typography variant="body2">Language: {project.language}</Typography>
        <Typography variant="body2">
          Last updated: {project.updated_at}
        </Typography>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </CardContent>
    </Card>
  );
};

export default GitProjectCard;