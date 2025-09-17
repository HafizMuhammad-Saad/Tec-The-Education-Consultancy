import { motion } from "framer-motion";
import { useState } from "react";

type FlipCardProps = {
  image: string;
  title: string;
  description?: string;
    onClick?: () => void;
};
const cardStyle: React.CSSProperties = {
  perspective: "1000px",
  width: "100%",
  height: "400px",
};
const innerStyle = (flipped: boolean): React.CSSProperties => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
});

const faceStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "0.5rem",
};

const frontStyle: React.CSSProperties = {
  ...faceStyle,
  background: "linear-gradient(to right, #0f172a, #1e293b, #0f172a)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
};

const backStyle: React.CSSProperties = {
  ...faceStyle,
  background: "linear-gradient(135deg, rgba(14,165,233,0.95), rgba(6,182,212,0.9))", // cyan/sky blend
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1.5rem",
  transform: "rotateY(180deg)",
  borderRadius: "0.75rem",
  boxShadow: "0 0 30px rgba(6,182,212,0.6)", // cyan glow
  backdropFilter: "blur(6px)", // glassy look
  border: "1px solid rgba(255,255,255,0.2)", // subtle glass border
  textAlign: "center",
};

const FlipCard: React.FC<FlipCardProps> = ({ image, title, description, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      style={cardStyle}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)} // mobile support
    >
      <div style={innerStyle(flipped)}>
        {/* Front */}
        <div style={frontStyle}>
          <img
            src={image}
            alt={title}
            style={{ width: "260px", height: "260px", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "0.75rem", textAlign: "center" }}>
            {title}
          </h1>
        </div>

        {/* Back */}
        <div style={backStyle}>
          <h2 style={{
      fontSize: "1.75rem",
      fontWeight: 700,
      marginBottom: "0.75rem",
      textShadow: "0 0 10px rgba(255,255,255,0.6)",
    }}>
            {title}
          </h2>
          <p style={{
      fontSize: "1rem",
      lineHeight: "1.5rem",
      maxWidth: "220px",
      opacity: 0.95,
    }}>
            {description || "More details about this service."}
          </p>
          <button
    style={{
      marginTop: "1.25rem",
      padding: "0.5rem 1.25rem",
      borderRadius: "0.5rem",
      background:
        "linear-gradient(135deg, rgba(34,211,238,1), rgba(6,182,212,1))",
      color: "#000",
      fontWeight: 600,
      boxShadow: "0 0 10px rgba(34,211,238,0.6)",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s ease",
    }}
    onClick={onClick}
  >
    Learn More
  </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;
