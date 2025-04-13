import { getImagePath } from "../../utils/getImagePath";

const Skill = ({skill}) => {

  const imageSrc = getImagePath(skill.imageSrc);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] flex items-center justify-center bg-secondary-color rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-color/30">
        <img src={imageSrc} alt={skill.title} className="w-[50px] sm:w-[70px]"></img>
      </div>
      <h4 className="text-2xl font-medium font-roboto p-2">{skill.title}</h4>
    </div>
  );
};

export default Skill;
