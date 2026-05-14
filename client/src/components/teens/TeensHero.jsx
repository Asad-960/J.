import "./TeensHero.css";
import bannerImage from "../../assets/teenhero.webp";

const TeensHero = () => {
  return (
    <section className="teens-hero">
      <img
        src={bannerImage}
        alt="Girls collection"
        className="teens-hero-image"
      />
    </section>
  );
};

export default TeensHero;
