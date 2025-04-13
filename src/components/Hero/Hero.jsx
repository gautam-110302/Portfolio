import heroImage from "../../assets/hero/heroImage.png";

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex flex-col-reverse sm:flex-row items-center justify-between mt-[49px] z-10 mx-[10%] py-[60px]"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-color/30 via-secondary-color/20 to-bg-color/10 blur-2xl opacity-70 rounded-3xl" />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary-color/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[200px] h-[200px] bg-secondary-color/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center sm:items-start z-10 text-neutral-50 max-w-[650px]">
        <h1 className="text-5xl sm:text-7xl font-bold font-roboto mb-[33px] leading-tight text-center sm:text-left">
          Hi, I’m Gautam.
        </h1>
        <p className="text-2xl sm:text-3xl font-roboto mb-[52px] text-center sm:text-left">
          Full-stack developer crafting experiences with React and Node.js.
          Let’s build something cool.
        </p>
        <a
          className="no-underline bg-primary-color text-xl sm:text-3xl font-semibold rounded-[100px] py-[17px] px-[26px] transition-all duration-300 hover:bg-white hover:text-primary-color hover:scale-105"
          href="mailto:gautamvr11@gmail.com"
        >
          Contact me
        </a>
      </div>

      <img
        className="w-[60%] sm:w-[50%] z-10 rounded-full animate-float"
        src={heroImage}
        alt="profile image"
      />
    </section>
  );
};

export default Hero;
