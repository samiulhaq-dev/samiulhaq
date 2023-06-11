import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card border border-greyish">
      <div className="project-img">
        <img src="https://random.imagecdn.app/500/150" alt="project image" />
      </div>

      <div className="flex gap-2 p-2 border-y border-greyish">
        <span className=" text-greyish">
      {project.language ? project.language : "HTML"}
        </span>
      </div>

      <div className="project-desc px-2 py-4">
        <h2 className="text-white text-2xl fonr-medium capitalize">{project?.name}</h2>
        <p className="py-4 text-greyish">{project?.description}</p>

        <a href={project?.html_url} target="_blank">
        <button className="text-sm px-4 py-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
          View Project ~~&gt;
        </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
