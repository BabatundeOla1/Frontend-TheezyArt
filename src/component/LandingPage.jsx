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
  const overscan = 1.02; 

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); 
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
        {/* Underlay that always covers the viewport with the current image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            transform: `scale(${overscan})`,
            transition: "opacity 0.6s ease",
            willChange: "opacity",
          }}
        />

        {/* Sliding track (sideways) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            height: "100%",
            transition: "transform 2.5s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
            transform: `translateX(-${index * 100}vw)`,
          }}
        >
          {images.map((src, i) => (
            <figure
              key={i}
              style={{
                minWidth: "100vw",
                height: "100vh",
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={src}
                alt={`Artwork ${i + 1}`}
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: `scale(${overscan})`,
                  willChange: "transform",
                }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
