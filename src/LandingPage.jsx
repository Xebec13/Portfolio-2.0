import profilePhoto from "./assets/portfolio-av1.png";
const LandingPage = () => {
  return (
    <section className="mimi-pink-text p-15 h-screen flex justify-center items-center">
      <div className="w-full h-1/2 text-5xl flex items-center justify-center flex-col">
        <p>Iam David</p>
        <p>Front-End Developer</p>
        <p>Three, Words, Words</p>
      </div>
      <div className="size-50 rounded-full p-5">
        <img
          src={profilePhoto}
          alt="profile-photo"
          height={"350px"}
          width={"350px"}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default LandingPage;
