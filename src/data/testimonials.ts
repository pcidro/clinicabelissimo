export type Testimonial = {
  id: string;
  quote: string;
  name: string;
};

export const testimonials = [
  {
    id: "mariana-s",
    quote:
      "Fui recebida com muito cuidado e atenção desde o primeiro contato. A equipe explicou cada etapa com calma e me deixou muito segura durante o atendimento.",
    name: "Mariana S.",
  },
  {
    id: "carlos-m",
    quote:
      "Gostei muito da atenção aos detalhes e da forma como explicaram as possibilidades do meu tratamento. O atendimento foi cuidadoso e muito profissional.",
    name: "Carlos M.",
  },
  {
    id: "renata-p",
    quote:
      "Minha filha foi atendida com muito carinho e paciência. Tudo foi explicado de um jeito tranquilo, e ela se sentiu muito mais confortável durante a consulta.",
    name: "Renata P.",
  },
  {
    id: "juliana-r",
    quote:
      "Desde a avaliação até o acompanhamento, senti muita atenção e cuidado. A clínica transmite confiança e o atendimento foi sempre muito acolhedor.",
    name: "Juliana R.",
  },
] satisfies readonly Testimonial[];
