import { Typography, Button } from "@mui/material";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="text-center mt-32">
      <Typography variant="h1">Thanks for visiting</Typography>
      <button>
        <Link href="https://www.google.com">
          GO TO GOOGLE
        </Link>
      </button>
    </div>
  );
};

export default page;
