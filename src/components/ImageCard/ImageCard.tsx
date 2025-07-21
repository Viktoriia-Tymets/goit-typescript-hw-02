import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
}
export default function ImageCard: React.FC<ImageCardProps> = ({ src, alt }) {
    return (
      <div>
        <img src={src} alt={alt} style={{ width: "100%", borderRadius: "8px" }} />
      </div>
    );
  }
  
  