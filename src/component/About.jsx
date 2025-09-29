import React from 'react';
import styles from './About.module.css';
import babatundeImg from '../assets/Artwork 1.png';

const About = () => {
  return (
    <div className={styles.container}>
      <img
        src={babatundeImg}
        alt="Babatunde"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h3>Babatunde Olaleye (b. 1997)</h3>
        <p>
          I'm Babatunde Olaleye Abdullahi, a visual artist from Nigeria. My work is rooted in
          conceptual painting, and I use it to explore themes like identity, culture, and resilience.
          Through my art, I try to reflect the human experience the things we go through, the
          stories we carry, and the strength we often don’t realize we have. 
          <br /><br />
          I am a conceptual figurative painter whose work centers on solitude not as absence,
          but as presence. I depict solitary Black figures in introspective environments, using
          Prussian blue as both a skin tone and a symbol of depth, strength, and heritage. My art
          explores themes of identity, emotional vulnerability, and the silent strength of
          marginalized voices. Through symbolism, pose, and stillness, I aim to create spaces
          where viewers can reflect and feel deeply.
          <br /><br />
          As an artist deeply committed to exploring solitude, identity, and emotional truth, I
          aim to expand my practice through thoughtful exhibitions, meaningful collaborations,
          and impactful public works. My work speaks for those often unheard, offering quiet
          spaces for reflection and connection. I strive to use my art to inspire a deeper sense of
          empathy, ignite conversations around Black resilience, and create visual stories that
          honor both personal and collective journeys.
          <br /><br />
          I believe art should speak to people, not over them. That’s why I aim to create pieces
          that connect across background, color, and place something that feels real, that
          reaches people wherever they are. At the heart of it all, I want my work to inspire
          hope and open up space for understanding.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="/cv"
            style={{
              display: 'inline-block',
              marginTop: '6rem',
              padding: '0.75rem 1.5rem',
              border: '1px solid #000',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              color: '#ebebeb',
              letterSpacing: '0.5px',
              backgroundColor: "#3b3b3b"
            }}
          >           
                CLICK TO VIEW CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
