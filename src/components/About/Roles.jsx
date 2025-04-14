import { getImagePath } from "../../utils/getImagePath";

const Roles = ({data}) => {

  const imageSrc = getImagePath(data.imageSrc);

  return (
    <div className="flex flex-row items-start justify-start hover:bg-gradient-to-r hover:from-neutral-400 hover:to-neutral-900 rounded-lg transition-colors duration-300 m-3">
      <img src={imageSrc} alt={data.header} className="w-[10%] mx-1" />
      <div className="flex flex-col">
        <h3 className="text-xl font-medium">{data.header}</h3>
        <p className="font-thin text-sm text-neutral-400">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
