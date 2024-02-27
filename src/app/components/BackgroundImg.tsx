import React from "react";
import Image from "next/image";
import bgImage from "/images/background.jpg";

const BackgroundImg = () => {
  return (
    <div>
      <Image
        src={bgImage}
        alt="background"
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default BackgroundImg;
