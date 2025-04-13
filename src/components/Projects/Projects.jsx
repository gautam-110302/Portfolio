import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";

const Projects = () => {

  const projects = useSelector((store)=>store.projects);

  return (
    <section
      id="Projects"
      className="flex flex-col text-neutral-50 mx-[10%] px-4 sm:px-[35px] py-6 sm:py-[30px] scroll-mt-[215px] sm:scroll-mt-28"
    >
      <h2 className="font-bold text-4xl uppercase tracking-wide">Projects</h2>
      <div className="flex flex-col sm:flex-row sm:justify-between p-4">
        {projects.map((project)=>{
          return(<ProjectItem key = {project.id} data = {project} />)
        })}
        
      </div>
    </section>
  );
};

export default Projects;
