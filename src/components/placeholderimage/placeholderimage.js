import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const Placeholderimage = ({ src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="MhJu7SMxNJX9t6~qRjWAozt8t7%Mt7jYt7"
          width="100%"
          height="100%"
          punch={1}
          resolutionX={32}
          resolutionY={32}
        />
      )}
      {imageLoaded && (
        <img src={src} alt="" className="hover:scale-110 duration-500" />
      )}
    </>
  );
};

export default Placeholderimage;
