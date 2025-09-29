// import { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import styles from './Paintings.module.css';

// const Paintings = () => {
//   const [paintings, setPaintings] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const touchStartX = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/admin/viewAllArtworks')
//       .then(res => setPaintings(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (selectedIndex !== null) {
//         if (e.key === 'Escape') setSelectedIndex(null);
//         if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % paintings.length);
//         if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
//       }
//     };
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [selectedIndex, paintings]);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (!touchStartX.current) return;
//     const diff = e.changedTouches[0].clientX - touchStartX.current;
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         setSelectedIndex((prev) => (prev - 1 + paintings.length) % paintings.length); 
//       } else {
//         setSelectedIndex((prev) => (prev + 1) % paintings.length); 
//       }
//     }
//     touchStartX.current = null;
//   };

//   const handleImageWheel = (e) => {
//     if (imageRef.current) {
//       e.preventDefault();
//       const scale = Math.min(Math.max(1, 1 + e.deltaY * -0.005), 3);
//       imageRef.current.style.transform = `scale(${scale})`;
//     }
//   };

//   const selectedPainting = selectedIndex !== null ? paintings[selectedIndex] : null;

//   return (
//     <div className={styles.paintingsContainer}>
//       <h2 className={styles.paintingsHeading}>GALLERY</h2>

//       <div className={styles.divider}></div>

//       <div className={styles.galleryGrid}>
//         {paintings.map((painting, index) => (
//           <div
//             key={painting.id}
//             className={styles.paintingCard}
//             onClick={() => setSelectedIndex(index)}
//           >
//             <img
//               src={painting.imageUrl}
//               alt={painting.title}
//               className={styles.paintingImage}
//             />
//             <h4 className={styles.paintingTitle}>{painting.title}</h4>
//             <p className={styles.paintingDescription}>{painting.description}</p>
//             <small className={styles.paintingYear}>{painting.year}</small>
//           </div>
//         ))}
//       </div>

//       {selectedPainting && (
//         <div
//           className={styles.fullscreenOverlay}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div className={styles.fullscreenContent}>
//             <button
//               className={styles.fullscreenClose}
//               onClick={() => setSelectedIndex(null)}
//             >
//               &times;
//             </button>

//             <img
//               ref={imageRef}
//               onWheel={handleImageWheel}
//               src={selectedPainting.imageUrl}
//               alt={selectedPainting.title}
//               className={styles.fullscreenImage}
//             />

//             <div className={styles.fullscreenDetails}>
//               <h2>{selectedPainting.title}</h2>
//               <p>{selectedPainting.description}</p>
//               <small>{selectedPainting.year}</small>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Paintings;



import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import styles from './Paintings.module.css';

const Paintings = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [detailsVisibleIndex, setDetailsVisibleIndex] = useState(null); // NEW
  const touchStartX = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    axios.get('https://theezy-art-website-backend.onrender.com/api/admin/viewAllArtworks')
      .then(res => setPaintings(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'Escape') setSelectedIndex(null);
        if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % paintings.length);
        if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + paintings.length) % paintings.length);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, paintings]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setSelectedIndex((prev) => (prev - 1 + paintings.length) % paintings.length); 
      } else {
        setSelectedIndex((prev) => (prev + 1) % paintings.length); 
      }
    }
    touchStartX.current = null;
  };

  const handleImageWheel = (e) => {
    if (imageRef.current) {
      e.preventDefault();
      const scale = Math.min(Math.max(1, 1 + e.deltaY * -0.005), 3);
      imageRef.current.style.transform = `scale(${scale})`;
    }
  };

  const selectedPainting = selectedIndex !== null ? paintings[selectedIndex] : null;

  return (
    <div className={styles.paintingsContainer}>
      <h2 className={styles.paintingsHeading}>GALLERY</h2>

      <div className={styles.divider}></div>

      <div className={styles.galleryGrid}>
        {paintings.map((painting, index) => (
          <div
            key={painting.id}
            className={styles.paintingCard}
          >
            <img
              src={painting.imageUrl}
              alt={painting.title}
              className={styles.paintingImage}
              onClick={() => setSelectedIndex(index)} // still opens fullscreen when image is clicked
            />

            {/* Button to toggle details */}
            <button 
              className={styles.detailsButton} 
              onClick={() =>
                setDetailsVisibleIndex(detailsVisibleIndex === index ? null : index)
              }
            >
              {detailsVisibleIndex === index ? "Hide Details" : "Show Details"}
            </button>

            {/* Conditionally render details */}
            {detailsVisibleIndex === index && (
              <div className={styles.paintingDetails}>
                <h4 className={styles.paintingTitle}>{painting.title}</h4>
                <p className={styles.paintingDescription}>{painting.description}</p>
                <small className={styles.paintingYear}>{painting.year}</small>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPainting && (
        <div
          className={styles.fullscreenOverlay}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.fullscreenContent}>
            <button
              className={styles.fullscreenClose}
              onClick={() => setSelectedIndex(null)}
            >
              &times;
            </button>

            <img
              ref={imageRef}
              onWheel={handleImageWheel}
              src={selectedPainting.imageUrl}
              alt={selectedPainting.title}
              className={styles.fullscreenImage}
            />

            <div className={styles.fullscreenDetails}>
              <h2>{selectedPainting.title}</h2>
              <p>{selectedPainting.description}</p>
              <small>{selectedPainting.year}</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paintings;

