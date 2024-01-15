"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Head from "next/head";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const courses = [
  {
    title: "MERN Stack Development",
    description: "Learn the MERN stack for web development.",
  },
  {
    title: "DevOps",
    description: "Master the principles of DevOps and CI/CD.",
  },
  {
    title: "Machine Learning",
    description: "Explore the world of Machine Learning and AI.",
  },
];

const Courses = (): any => {
  const router = useRouter();
  const handelClick = () => {
  
    router.push("/");
  };
  return (
    <>
      <Container>
        <Head>
          <title>My Website - Courses</title>
        </Head>
        <Typography variant="h2" gutterBottom>
          Courses
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <Card key={index} elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {course.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <div className="flex items-center justify-between">
                  <Button onClick={handelClick}>buy course</Button>
                  <p>price $20000</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Courses;
