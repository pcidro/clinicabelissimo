export const clinic = {
  name: "Clínica Bellissimo",
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação.",
  },
} as const;
