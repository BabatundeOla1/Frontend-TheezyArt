import React, { useEffect, useState } from "react";
import img1 from "../assets/Artwork 1.png";
import img2 from "../assets/Artwork2.jpg";
import img3 from "../assets/Artwork3.jpg";
import img4 from "../assets/Artwork4.jpg";
import img5 from "../assets/Artwork5.jpg";

export default function LandingPage() {
  const images = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);
  const angle = 360 / images.length;
  const radius = 900; 

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section style={{ width: "100%", height: "100vh", margin: 0 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          perspective: "1200px",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transformStyle: "preserve-3d",
            transition: "transform 1.2s ease-in-out",
            transform: `translateZ(-${radius}px) rotateY(${index * angle}deg)`,
          }}
        >
          {images.map((src, i) => (
            <figure
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={src}
                alt={`Artwork ${i + 1}`}
                style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
