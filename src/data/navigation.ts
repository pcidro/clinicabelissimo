export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: readonly NavigationItem[] = [
  { label: "Início", href: "/" },
  { label: "A clínica", href: "/#a-clinica" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Contato", href: "/#contato" },
];

export const footerNavigation: readonly NavigationItem[] = [
  { label: "Início", href: "/" },
  { label: "A clínica", href: "/#a-clinica" },
  { label: "Tratamentos", href: "/#tratamentos" },
  { label: "Resultados", href: "/#resultados" },
  { label: "Contato", href: "/#contato" },
];
