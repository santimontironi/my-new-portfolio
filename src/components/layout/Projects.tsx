"use client"
import useLanguage from "@/hooks/useLanguage"
import projectsData from "@/data/projectsData"
import ProjectCard from "../ui/ProjectCard"

const Projects = () => {
  const { language } = useLanguage()
  const projects = projectsData(language)

  return (
    <section className="w-full bg-zinc-950 py-20 md:py-28 xl:py-36 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 relative">

      <div className="hidden xl:block absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#7ecf8e]/14 blur-3xl pointer-events-none"></div>
      <div className="hidden xl:block absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#7ecf8e]/14 blur-3xl pointer-events-none"></div>
      <div className="hidden xl:block absolute -bottom-10 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#7ecf8e]/14 blur-2xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12 xl:gap-16">

        <div className="flex flex-col gap-4">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] font-bold"
            >
              {language === "es" ? (
                <>Proyectos <span className="text-[#7ecf8e]">destacados</span></>
              ) : (
                <>Featured <span className="text-[#7ecf8e]">projects</span></>
              )}
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-xs md:text-right">
              {language === "es"
                ? `${projects.length} proyectos en total`
                : `${projects.length} projects in total`}
            </p>
          </div>
          <div className="w-12 h-px bg-[#7ecf8e]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectTitle}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectDescription={project.projectDescription}
              githubUrl={project.githubUrl}
              githubIcon={project.githubIcon}
              deployUrl={project.deployUrl}
              deployIcon={project.deployIcon}
              deployLinkName={project.deployLinkName}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects