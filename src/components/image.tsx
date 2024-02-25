"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

const MyImage = ({
  defaultImage,
  ...props
}: ImageProps & { defaultImage: string }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {!imageError ? (
        <Image {...props} onError={handleImageError} />
      ) : (
        <Image {...props} alt="default" src={defaultImage} />
      )}
    </>
  );
};

export default MyImage;
