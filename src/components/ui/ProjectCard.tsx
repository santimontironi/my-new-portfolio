import type { ProjectCardProps } from "@/types"
import Image from "next/image"

const ProjectCard = ({ projectImage, projectTitle, projectDescription, githubUrl, githubIcon, deployUrl, language, videoURL }: ProjectCardProps) => {
  return (
    <div data-aos="flip-left" className="group flex flex-col overflow-hidden transition-all duration-300 bg-linear-to-b from-[#1d492f] to-[#0f2415] border-2 border-[#7ecf8e]/10 hover:border-[#7ecf8e]/30 hover:shadow-[0_0_30px_rgba(126,207,142,0.08)] hover:scale-105 transform backface-visibility-hidden">

      <div className="relative overflow-hidden h-48 md:h-52">
        <Image
          priority
          width={400}
          height={300}
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

        {videoURL && (
          <a
            href={videoURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-[#7ecf8e]/40 text-[#7ecf8e] hover:bg-[#7ecf8e]/10 transition-colors duration-300 text-xs font-bold tracking-wider uppercase"
          >
            <i className="bi bi-play-circle-fill" />
            {language === "es" ? "Ver panel de admin" : "View admin panel"}
          </a>
        )}

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#7ecf8e]/10">

          <a href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/70 hover:text-[#7ecf8e] transition-colors duration-300"
          >
          <Image
            width={16}
            height={16}
            priority
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
          className="flex items-center gap-2 text-white hover:text-[#7ecf8e] transition-colors duration-300"
        >
          <span className="text-xs tracking-wider font-bold uppercase">
            {language === "es" ? "Ver proyecto" : "View project"}
          </span>
        </a>
    </div>

      </div >
    </div >
  )
}

export default ProjectCard