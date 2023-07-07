import { Link } from "react-router-dom";

const SectionHeader = ({ title, moreUrl }) => {
  return (
    <div className="title-header flex items-center justify-between">
      <div className="left flex items-center flex-1 gap-5">
        <h2 className="text-white font-medium text-[32px]">
          <span className="text-pinkish">#</span>
          {title}
        </h2>
        <span className="line block w-1/2 h-px bg-[#C778DD]"></span>
      </div>
      <div className="right">
        <Link to={moreUrl ? moreUrl : "#"}>
          <button className="text-white">View all ~~&gt;</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionHeader;
