import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="bg-secondary-color flex flex-col sm:flex-row text-neutral-50 mt-[120px] px-[10%] py-[58px] justify-evenly gap-[23px] sm:gap-[10px] scroll-mt-28"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-7xl">Contact</h2>
        <h4 className="font-normal text-4xl">Feel free to reach out!</h4>
      </div>

      <div className="flex flex-col items-center sm:items-start gap-[26px]">
        <div className="flex flex-row items-center gap-[25px]">
          <img src={emailIcon} />
          <a
            href="mailto:gautamvr11@gmail.com"
            className="transition-colors duration-300 hover:underline hover:text-primary-color"
          >
            gautamvr11@gmail.com
          </a>
        </div>

        <div className="flex flex-row items-center gap-[25px]">
          <img src={linkedinIcon} />
          <a
            href="https://www.linkedin.com/in/gautam-sarda-b128321b6/"
            className="transition-colors duration-300 hover:underline hover:text-primary-color"
          >
            linkedin.com/in/gautam-sarda
          </a>
        </div>

        <div className="flex flex-row items-center gap-[25px]">
          <img src={githubIcon} />
          <a
            href="https://github.com/gautam-110302"
            className="transition-colors duration-300 hover:underline hover:text-primary-color"
          >
            github.com/gautam-110302
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
