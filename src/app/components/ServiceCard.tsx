
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Servicedata = [
  {
    id: 1,
    img: "https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg",
    services: "Web Development",
    content: "Crafts custom websites tailored to your unique needs, ensuring seamless functionality and a standout online experience for your visitors.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx3s0bESqvExJrdVfUt0x9YDJj2n8YOZ4GQ&usqp=CAU",
    services: "App Development",
    content: "Create custom web and mobile apps tailored to your unique needs, ensuring seamless functionality and a standout online experience for your visitors.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt837j6snOsLVW2dUlgpxyhLM5jpW19F9CA&usqp=CAU",
    services: "Hosting and Maintenance",
    content: "Enjoy worry-free hosting and regular maintenance to keep your website running smoothly. We handle the technical details so you can focus on your business.",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqDWkqXpa5oBwcapDf7IhclbH_7iXnVoq3u7XIsRtGRarkwiJ7LrWZCi-j4YZxNKntAk&usqp=CAU",
    services: "SEO Optimization",
    content: "Boost your visibility on search engines and drive organic traffic. Our SEO strategies optimize your website to rank higher, attracting the right audience to your digital doorstep.",
  },
];

export default function ServiceCard() {
  return (
    <>
      {Servicedata.map((service, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={service.img}  
            title={service.services}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {service.services}  
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {service.content}  
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}