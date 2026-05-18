import "./HeroVideo.css";

function HeroVideo({ video, isBtn }) {
  return (
    <section className="hero-video-section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={video} type="video/mp4" />
      </video>

      {isBtn && <button className="hero-btn">SHOP NOW</button>}
    </section>
  );
}

export default HeroVideo;
