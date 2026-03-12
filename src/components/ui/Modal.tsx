import type { ModalProps } from "@/types"

const Modal = ({ language, messageES, messageEN }: ModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div className="relative z-10 w-full max-w-md border border-white/10 bg-zinc-950/90 backdrop-blur-md p-8 md:p-10 flex flex-col items-center gap-6 text-center">

                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#7ecf8e]/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-[#7ecf8e]/5 blur-xl pointer-events-none" />

                <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#7ecf8e]/30 bg-[#7ecf8e]/10">
                    <i className="bi bi-check-lg text-[#7ecf8e] text-3xl" />
                </div>

                <div className="w-12 h-px bg-[#7ecf8e]" />

                <div className="flex flex-col gap-2">
                    <h3
                        className="text-white text-2xl md:text-3xl leading-snug"
                        style={{ fontFamily: "'Georgia', serif", fontWeight: 400 }}
                    >
                        {language === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base font-mono leading-relaxed">
                        {language === "es" ? messageES : messageEN}
                    </p>
                </div>
                
                <p className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase">
                    {language === "es" ? "Te responderé a la brevedad" : "I'll get back to you shortly"}
                </p>

            </div>
        </div>
    )
}

export default Modal