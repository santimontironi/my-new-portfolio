"use client"

import ServiceCard from "../ui/ServiceCard"
import serviceData from "@/data/servicesData"
import useLanguage from "@/hooks/useLanguage"

const Services = () => {
  const { language } = useLanguage()
  const services = serviceData(language)

  return (
    <section className="w-full bg-zinc-900 py-20 md:py-28 xl:py-36 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 xl:gap-16">

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] font-bold">
              {language === "es" ? (
                <>Mis <span className="text-[#7ecf8e]">servicios</span></>
              ) : (
                <>My <span className="text-[#7ecf8e]">services</span></>
              )}
            </h2>
          </div>
          <div className="w-12 h-px bg-[#7ecf8e]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services