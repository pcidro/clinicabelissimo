export type Treatment = {
  id: string;
  title: string;
  specialties?: string;
  description: string;
  images: readonly {
    src: string;
    alt: string;
    objectPosition?: string;
  }[];
};

export const treatments = [
  {
    id: "pediatric-dentistry",
    title: "Odontopediatria",
    specialties: "Prevenção • Acompanhamento infantil • Orientação familiar",
    description:
      "Atendimento humanizado para crianças e adolescentes, com foco em prevenção, acompanhamento e cuidado com a saúde bucal desde os primeiros anos.",
    images: [
      {
        src: "/images/services/odontopediatria1.png",
        alt: "Atendimento odontopediátrico preventivo na Clínica Bellissimo",
        objectPosition: "center 45%",
      },
      {
        src: "/images/services/odontopediatria2.png",
        alt: "Dentista acompanha a saúde bucal de uma paciente infantil",
        objectPosition: "center 45%",
      },
    ],
  },

  {
    id: "implants-and-rehabilitation",
    title: "Implantes e Reabilitação",
    specialties: "Implantes • Próteses • Protocolo dentário",
    description:
      "Soluções para reposição de dentes e reabilitação do sorriso, recuperando estética, conforto e função mastigatória.",
    images: [
      {
        src: "/images/services/implantes.png",
        alt: "Duas profissionais realizam um procedimento de implante e reabilitação oral",
        objectPosition: "center 46%",
      },
    ],
  },
  {
    id: "smile-aesthetics",
    title: "Estética do Sorriso",
    specialties: "Clareamento dental • Facetas dentais",
    description:
      "Tratamentos para valorizar a estética dental, proporcionando mais harmonia, naturalidade e confiança ao sorrir.",
    images: [
      {
        src: "/images/services/esteticasorriso.jpeg",
        alt: "Duas profissionais realizam um procedimento de estética do sorriso",
        objectPosition: "center 48%",
      },
    ],
  },
  {
    id: "orthodontics",
    title: "Ortodontia",
    specialties: "Aparelhos ortodônticos",
    description:
      "Tratamentos para alinhamento dos dentes e correção da mordida, com planejamento individualizado.",
    images: [
      {
        src: "/images/services/Ortodontia.jpg",
        alt: "Paciente jovem recebe atendimento ortodôntico na Clínica Bellissimo",
        objectPosition: "center 42%",
      },
    ],
  },
  {
    id: "endodontics",
    title: "Endodontia",
    specialties: "Tratamento de canal",
    description:
      "Tratamento indicado para preservar dentes comprometidos por inflamações ou infecções.",
    images: [
      {
        src: "/images/services/Endodontia.jpeg",
        alt: "Duas profissionais realizam um tratamento endodôntico",
        objectPosition: "center 46%",
      },
    ],
  },
  {
    id: "facial-harmonization",
    title: "Harmonização Facial",
    specialties: "Botox • Preenchimento facial • Preenchimento labial",
    description:
      "Procedimentos estéticos como botox e preenchimentos, realizados para suavizar marcas, equilibrar proporções e valorizar a estética facial.",
    images: [
      {
        src: "/images/services/botox.jpeg",
        alt: "Profissional realiza uma aplicação estética facial em paciente",
        objectPosition: "center 47%",
      },
    ],
  },
] satisfies readonly Treatment[];
