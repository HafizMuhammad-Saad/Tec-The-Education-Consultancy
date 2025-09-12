import videos from "../assets/footage.mp4";
import falBackImage from '../assets/fallbackimg.png'
const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed h-[100%] w-screen left-0 top-0 object-cover -z-10"
      poster={falBackImage }
    >
      <source src={videos} type="video/mp4" />
    </video>
  );
};

export default Video;
