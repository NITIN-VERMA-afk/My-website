import React from "react";
import { Avatar } from "@mui/material";

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <div className="flex items-center">

      <Avatar alt="nitin verma" src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" />
       
        <div>
          <p className="text-lg font-semibold">nitin verma</p>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Welcome to my profile! Im a passionate web developer with expertise in
          Next.js, TypeScript, Tailwind CSS, and Material-UI but i use mern stack.
        </p>
      </div>
    </div>
  );
};

export default Profile;
