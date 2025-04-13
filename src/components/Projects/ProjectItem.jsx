import { useState, useEffect } from "react";
import { getImagePath } from "../../utils/getImagePath";
import useInViewCenter from "../../hooks/useInViewCenter";

const ProjectItem = ({data}) => {
  const { ref, isCentered } = useInViewCenter();
  const [isMobile, setIsMobile] = useState(false);

  const imageSrc = getImagePath(data.imageSrc);
  const videoSrc = getImagePath(data.videoSrc);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 640);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div
      ref={ref}
      className="group flex flex-col sm:w-[32%] bg-gradient-to-b from-primary-color to-secondary-color 
      p-[2%] rounded-2xl font-roboto m-2 sm:m-0 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="relative w-full overflow-hidden rounded-xl">

        {!isMobile && (
          <>
            <img
              src={imageSrc}
              className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </>
        )}


        {isMobile && (
          isCentered ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          ) : (
            <img src={imageSrc} className="w-full h-auto object-cover" />
          )
        )}
      </div>

      <div className="flex flex-col mt-2 justify-between py-2">
        <h3 className="font-bold text-2xl">{data.header}</h3>
        <p className="font-light text-sm text-neutral-200">
          {data.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-row my-3 gap-2 items-center">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-dark-color py-1 px-1 me-1 rounded-xl tracking-wider transition-all duration-300 hover:bg-neutral-800 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-row mt-4 justify-around items-center">
          <a key="Demo" href={data.demoSrc}>
            <span className="bg-primary-color py-1 px-3 rounded-xl tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-color hover:scale-105">
              Demo
            </span>
          </a>
          <a key = "Source" href={data.sourceSrc}>
            <span className="bg-primary-color py-1 px-3 rounded-xl tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-color hover:scale-105">
              Source
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;