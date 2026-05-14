import heroVideo from "../../assets/hero.mp4";
import "./HeroVideo.css";

function HeroVideo() {
  return (
    <section className="hero-video-section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

      <button className="hero-btn">SHOP NOW</button>
    </section>
  );
}

export default HeroVideo;
