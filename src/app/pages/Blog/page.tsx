

import React from 'react';

import { Metadata } from 'next';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export const metadata:Metadata={
  title:"blog",
}

const Blog = () => {
  
  const blogPosts = [
    {
      title: 'Web 1.0',
      content: 'The first version of the web, often referred to as Web 1.0, was primarily static and focused on information retrieval.Websites were largely read-only, and users were mainly consumers of content.The early stages of online commerce emerged during Web 1.0, with the establishment of basic e-commerce websites for selling products and services',
    },
    {
      title: 'Web 2.0',
      content: 'Web 2.0 represents a shift in the way people interact with the web. It introduced more dynamic and interactive elements.Key characteristics include user-generated content, social media platforms, collaboration tools, and a more participatory web experience.Examples of Web 2.0 technologies include blogs, wikis, social networking sites (e.g., Facebook, Twitter), and content-sharing platforms (e.g., YouTube)',
    },
    
    {
      title: 'Web 3.0',
      content: 'Web 3.0, also known as the Semantic Web, is an evolving concept that envisions a more intelligent, connected, and personalized web experienceIt aims to make information more easily understandable by machines, enabling better automation, integration, and interaction between different applications and servicesTechnologies associated with Web 3.0 include artificial intelligence, machine learning, blockchain, decentralized applications (DApps), and enhanced data interoperability',
    },
    
  ];

  return (
    <Container className="m-16">
    
      <Typography  variant="h3" component="h1" align="center" gutterBottom>
        Welcome to my Blog
      </Typography>
      <Typography variant='h3'>Todays topic is web3</Typography>
      <Typography variant='h6'>generations of web3</Typography>
      <Grid container spacing={6}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={9} sm={6} md={4}>
            <Card className='rounded drop-shadow-sm'>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;

