import type { ProjectCardProps } from "@/types"

const ProjectCard = ({ projectImage, projectTitle, projectDescription, githubUrl, githubIcon, deployUrl, deployIcon, deployLinkName }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden transition-all duration-300 bg-linear-to-b from-[#1d492f] to-[#0f2415] border-2 border-[#7ecf8e]/10 hover:border-[#7ecf8e]/30 hover:shadow-[0_0_30px_rgba(126,207,142,0.08)] hover:scale-105 transform backface-visibility-hidden">

      <div className="relative overflow-hidden h-48 md:h-52">
        <img
          src={projectImage}
          alt={projectTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 md:p-6 flex-1">

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white/90 text-base md:text-lg leading-snug font-bold group-hover:text-[#7ecf8e] transition-colors duration-300">
            {projectTitle}
          </h3>
          <div className="w-6 h-px bg-[#7ecf8e]/30 mt-3 shrink-0 group-hover:w-10 group-hover:bg-[#7ecf8e] transition-all duration-300" />
        </div>

        <p className="text-white/70 text-sm leading-relaxed line-clamp-5 group-hover:text-white/60 transition-colors duration-300">
          {projectDescription}
        </p>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#7ecf8e]/10">

          <a href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/30 hover:text-[#7ecf8e] transition-colors duration-300"
          >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-4 h-4 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-xs font-mono tracking-wider uppercase">GitHub</span>
        </a>

        <div className="w-px h-4 bg-[#7ecf8e]/10" />

        <a
          href={deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/30 hover:text-[#7ecf8e] transition-colors duration-300"
          >
        <img
          src={deployIcon}
          alt={deployLinkName}
          className="w-4 h-4 object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <span className="text-xs font-mono tracking-wider uppercase">{deployLinkName}</span>
      </a>
    </div>

      </div >
    </div >
  )
}

export default ProjectCard