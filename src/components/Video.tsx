import videos from "../assets/footage.mp4";
const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed h-[100%] w-screen left-0 top-0 object-cover -z-10"
    >
      <source src={videos} type="video/mp4" />
    </video>
  );
};

export default Video;
