import projectsData from "@/data/projectsData"

export const getProjects = (language: string) => {
  return projectsData(language)
}