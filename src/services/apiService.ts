import axios from "axios";
import type { SendMailData } from "@/types";
import type { SendMailResponse } from "@/types";

const api = axios.create({
    baseURL: "/api"
})

export const sendMailService = (data: SendMailData) => {
    return api.post<SendMailResponse>("/contact", data)
}

