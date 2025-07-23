import React from "react";

interface ImageCardProps {
  src: string;
  alt?: string | ;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt || "Image"} style={{ width: "100%", borderRadius: "8px" }} />
    </div>
  );
}
  
  export default ImageCard;