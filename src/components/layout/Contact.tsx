"use client"

import useLanguage from "@/hooks/useLanguage"
import { useForm } from "react-hook-form"
import { useState } from "react"
import ContactItem from "../ui/ContactItem"
import { sendMailService } from "@/services/apiService"
import type { SendMailData } from "@/types"
import { ToastContainer, toast } from "react-toastify"
import Modal from "../ui/Modal"

const Contact = () => {
  const { language } = useLanguage()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SendMailData>()

  const [modalOpen, setModalOpen] = useState(false)

  const formSubmit = async (data: SendMailData) => {
    toast.info(language === "es" ? "Enviando mensaje..." : "Sending message...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,        
      progress: undefined,
      theme: "dark",
    })
    try{
      await sendMailService(data)
      setModalOpen(true)
      reset()
      setTimeout(() => {
        setModalOpen(false)
      }, 2800)
    }
    catch(error: any){
      if(error?.response?.data?.message){
        console.log(error?.response?.data?.message)
      }
      reset()
    }
  }

  return (
    <section className="relative min-h-screen w-full containerContact flex items-center justify-center py-20 md:py-28 xl:py-36 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 overflow-hidden">

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col xl:flex-row gap-16 xl:gap-24">

        <div className="xl:w-2/5 flex flex-col gap-6">

          <h2
            className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] font-bold"
          >
            {language === "es" ? (
              <>Hablemos de tu{" "}<br /><span className="text-[#7ecf8e]">proyecto</span></>
            ) : (
              <>Let's talk about{" "}<br /><span className="text-[#7ecf8e]">your project</span></>
            )}
          </h2>

          <div className="w-12 h-px bg-[#7ecf8e]" />

          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            {language === "es"
              ? "¿Tenés una idea o proyecto en mente? Escribime y lo hablamos."
              : "Have an idea or project in mind? Write to me and let's talk about it."}
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <ContactItem icon="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" label="santiagomontironi21@gmail.com" href="mailto:santiagomontironi21@gmail.com" />
            <ContactItem icon="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" label="Santiago Montironi" href="https://www.linkedin.com/in/santiago-montironi-649652215/" />
            <ContactItem icon="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" label="santimontironi" href="https://github.com/santimontironi" />
          </div>
        </div>

        <div className="xl:w-3/5">
          <div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(formSubmit)}>
              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">
                  {language === "es" ? "Nombre" : "Name"}
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder={language === "es" ? "Tu nombre" : "Your name"}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#7ecf8e]/60 transition-colors duration-300"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs">
                    {language === "es" ? "Campo requerido" : "Required field"}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">
                  {language === "es" ? "Apellido" : "Surname"}
                </label>
                <input
                  {...register("surname", { required: true })}
                  type="text"
                  placeholder={language === "es" ? "Tu apellido" : "Your surname"}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#7ecf8e]/60 transition-colors duration-300"
                />
                {errors.surname && (
                  <span className="text-red-400 text-xs">
                    {language === "es" ? "Campo requerido" : "Required field"}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder={language === "es" ? "Tu email" : "Your email"}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#7ecf8e]/60 transition-colors duration-300"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">
                    {language === "es" ? "Campo requerido" : "Required field"}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-widest uppercase">
                  {language === "es" ? "Mensaje" : "Message"}
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={6}
                  placeholder={language === "es" ? "Contame sobre tu proyecto..." : "Tell me about your project..."}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#7ecf8e]/60 transition-colors duration-300 resize-none"
                />
                {errors.message && (
                  <span className="text-red-400 text-xs">
                    {language === "es" ? "Campo requerido" : "Required field"}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group cursor-pointer relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#7ecf8e] text-[#7ecf8e] text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:text-[#0a1a0f] w-full md:w-auto"
                >
                  <span className="absolute inset-0 bg-[#7ecf8e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10">
                    {language === "es" ? "Enviar mensaje" : "Send message"}
                  </span>
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

      <ToastContainer />

      {modalOpen && (
        <Modal
          language={language}
          messageES="Mensaje enviado con éxito"
          messageEN="Message sent successfully"
        />
      )}
    </section >
  )
}

export default Contact