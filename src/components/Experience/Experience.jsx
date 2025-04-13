import { useSelector } from "react-redux";
import History from "./History";
import Skill from "./Skill";



const Experience = () => {

  const skills = useSelector((store)=>store.skills);
  const history = useSelector((store)=>store.experience);

  return (
    <section
      id="Experience"
      className="flex flex-col text-neutral-50 mx-[10%] px-4 sm:px-[35px] py-6 sm:py-[30px] scroll-mt-[215px] sm:scroll-mt-28"
    >
      <h2 className="font-bold text-4xl uppercase tracking-wide">EXPERIENCE</h2>
      <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:w-[50%] me-5">
          {skills.map((skill)=>{
            return(
              <Skill key = {skill.id} skill = {skill} />
            )
          })}
        </div>
        <div className="flex flex-col items-center justify-normal ms-5">
          {history.map((data)=>{
            return(
              <History key = {data.id} data = {data} />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
