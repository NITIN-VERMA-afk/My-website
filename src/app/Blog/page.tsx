

import React from 'react';
import Head from 'next/head';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Blog = () => {
  
  const blogPosts = [
    {
      title: 'Web 1.o',
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
    <Container className="m-5">
      <Head>
        <title>my blog Blog</title>
      </Head>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Welcome to my Blog
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
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

