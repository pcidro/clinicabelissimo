export type ClinicalResult = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  objectFit: "contain" | "cover";
  objectPosition: string;
};

export const clinicalResults = [
  {
    id: "implante-dentario",
    title: "Implante dentário",
    description:
      "Implante dentário realizado com planejamento, precisão e cuidado.",
    image: "/images/results/result11.png",
    alt: "Caso clínico de implante dentário apresentado em comparação antes e depois.",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: "ortopedia-funcional-ortodontia",
    title: "Ortopedia Funcional e Ortodontia",
    description:
      "Tratamento com Ortopedia Funcional dos Maxilares e aparelho fixo para orientar o desenvolvimento, alinhar os dentes e refinar a oclusão.",
    image: "/images/results/result2.jpeg",
    alt: "Caso clínico tratado com Ortopedia Funcional dos Maxilares e Ortodontia apresentado em comparação antes e depois.",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: "lentes-contato-porcelana",
    title: "Lentes de contato em porcelana",
    description:
      "Tratamento com lentes de contato em porcelana realizado com foco em naturalidade, harmonia e valorização do sorriso.",
    image: "/images/results/result3.jpeg",
    alt: "Caso clínico com lentes de contato em porcelana apresentado em comparação antes e depois.",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: "lentes-contato-dental",
    title: "Lentes de contato dental",
    description:
      "Abordagem minimamente invasiva para harmonizar cor, formato e tamanho dos dentes com naturalidade.",
    image: "/images/results/result4.jpeg",
    alt: "Caso clínico com lentes de contato dental apresentado em comparação antes e depois.",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: "correcao-ortodontica",
    title: "Correção ortodôntica",
    description:
      "Tratamento ortodôntico para melhorar posicionamento dentário, função, mastigação, higienização e equilíbrio do sorriso.",
    image: "/images/results/result5.jpeg",
    alt: "Caso clínico de correção ortodôntica apresentado em comparação antes e depois.",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: "endodontia-pediatrica-reabilitacao",
    title: "Endodontia pediátrica e reabilitação estética",
    description:
      "Após um trauma, endodontia pediátrica e reabilitação estética para cuidar da saúde e recuperar o sorriso infantil.",
    image: "/images/results/result6.JPG",
    alt: "Caso clínico de endodontia pediátrica associada à reabilitação estética após trauma.",
    objectFit: "contain",
    objectPosition: "center",
  },
] satisfies readonly ClinicalResult[];
