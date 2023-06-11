import useFetch from "../hooks/useFetch";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const API_URL = "https://api.github.com/users/sami-ul-haq/repos";

  const { data, error, loading } = useFetch(API_URL);
  console.log(data);

  if (loading) {
    <h1>Loading Projects</h1>;
  }

  return (
    <div className="projects py-10">
      <div className="projects-header flex items-center justify-between">
        <div className="left flex items-center flex-1 gap-5">
          <h2 className="text-white font-medium text-[32px]">
            <span className="text-pinkish">#</span>project
          </h2>
          <span className="line block w-1/2 h-px bg-[#C778DD]"></span>
        </div>
        <div className="right">
          <button className="text-white">View all ~~&gt;</button>
        </div>
      </div>
      <div className="projects-list grid grid-cols-1 gap-x-5 gap-y-10 my-14 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.slice(0,9).map((project) => (<ProjectCard project={project} key={project.id}/>))}
      </div>
      <div className="projects-footer text-center">
      <button className="text-sm px-4 py-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
          View More Project ~~&gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
