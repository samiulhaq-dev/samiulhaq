import SkillsImage from "../assets/skills-bg.png";

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      data: ["C/C++", "Javascript"],
    },
    {
      title: "Databases",
      data: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      data: ["VS Code", "Linux", "Git/Gitbash", "MS Office"],
    },
    {
      title: "Design",
      data: ["HTML", "CSS", "SCSS", "Tailwind", "EJS", "Redux"],
    },
    {
      title: "Frameworks",
      data: ["React", "Express", "JQuery"],
    },
    {
      title: "CMS",
      data: ["Wordpress", "WIX"],
    },
  ];

  return (
    <div className="skills py-10">
      <div className="title-header flex items-center justify-between">
        <div className="left flex items-center flex-1 gap-5">
          <h2 className="text-white font-medium text-[32px]">
            <span className="text-pinkish">#</span>skills
          </h2>
          <span className="line block w-1/2 h-px bg-[#C778DD]"></span>
        </div>
      </div>
      <div className="skills-row flex justify-between items-center flex-col pt-14 md:flex-row ">
        <div className="skill-img w-[100%] md:w-1/3 mb-10 md:my-auto ">
          <img src={SkillsImage} alt="skills image" className="mx-auto" />
        </div>
        <div className="skills-section w-[100%] md:w-2/3 flex flex-wrap gap-3 justify-between sm:justify-center sm:gap-5 md:gap-4 md:justify-end">
          {skillsData?.map((skill, i) => (
            <div
              key={i}
              className="border border-greyish w-[45%] lg:w-[30%] h-min"
            >
              <h3 className="p-2 font-semibold text-white">{skill.title}</h3>
              <div className="p-2 skills-items border-t border-greyish flex flex-wrap gap-2">
                {skill?.data?.map((item, i) => (
                  <span key={i} className="text-greyish">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
