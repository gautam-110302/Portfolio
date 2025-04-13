import { useSelector } from "react-redux";
import aboutImage from "../../assets/about/aboutImage.png";
import Roles from "./Roles";


const About = () => {
  const about = useSelector((store)=>store.about);
  return (
    <section
      id="About"
      className="flex flex-col bg-neutral-900 text-neutral-50 mx-[10%] px-4 sm:px-[35px] py-6 sm:py-[30px] scroll-mt-[215px] sm:scroll-mt-28"
    >
      <h2 className="font-bold text-4xl uppercase tracking-wide">ABOUT</h2>
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
        <img
          className="hidden sm:block w-[35%] mr-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-color/30"
          src={aboutImage}
          alt="Illustration of developer"
        />
        <div className="flex flex-col">
          {about.map((data)=>{
            return(
              <Roles key={data.id}   data={data} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
