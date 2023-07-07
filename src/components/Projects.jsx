import useFetch from "../hooks/useFetch";
import InViewAnimate from "./InViewAnimate";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const API_URL = "https://api.github.com/users/sami-ul-haq/repos";

  const { data, error, loading } = useFetch(API_URL);

  if (loading) {
    <h1>Loading Projects</h1>;
  }

  return (
    <div className="projects py-10">
      <InViewAnimate>
        <SectionHeader title={"projects"} />
      </InViewAnimate>
      <InViewAnimate>

      <div className="projects-list grid grid-cols-1 gap-x-5 gap-y-10 my-14 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.slice(0, 9).map((project) => (
          <ProjectCard project={project} key={project.id} />
          ))}
      </div>
          </InViewAnimate>
          <InViewAnimate>

      <div className="projects-footer text-center">
        <button className="text-sm px-4 py-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
          View More Project ~~&gt;
        </button>
      </div>
          </InViewAnimate>
    </div>
  );
};

export default Projects;
