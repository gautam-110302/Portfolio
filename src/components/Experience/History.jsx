import { getImagePath } from "../../utils/getImagePath";

const History = ({data}) => {

  const imageSrc = getImagePath(data.imageSrc);

  return (
    <div
      className="flex flex-row items-start justify-start bg-gradient-to-r from-secondary-color to-bg-color 
      rounded-lg m-3 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-color/30"
    >
      <img src={imageSrc} alt={data.organisation} className="w-12 h-12 p-1 mr-4" />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium">{data.role}, {data.organisation}</h3>
        <h6 className="font-thin text-sm text-neutral-500">
          {data.startDate} - {data.endDate}
        </h6>
        <ul className="font-thin text-sm text-neutral-300 list-disc px-2">
          {data.experiences.map((experience)=>{
            return(<li key={experience.id}>
              {experience.work}
            </li>)
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;

