export interface Project {
  id: string;
  title: string;
  description: string;
  label: string;
  image: string;
  /** Optional URL for “Ver proyecto”; defaults to in-page anchor */
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Óptica Visión Moderna",
    description:
      "Catálogo de armazones, turnos online y presencia local optimizada para captar clientes.",
    label: "Negocio local",
    image: "https://picsum.photos/seed/optica-vision/800/500",
  },
  {
    id: "2",
    title: "Restaurante Sabor Urbano",
    description:
      "Menú digital, reservas y mapa integrado para convertir búsquedas en mesas ocupadas.",
    label: "Negocio local",
    image: "https://picsum.photos/seed/sabor-urbano/800/500",
  },
  {
    id: "3",
    title: "Landing SaaS GrowthApp",
    description:
      "Landing de producto con prueba social, pricing y formulario orientado a demo.",
    label: "Landing page",
    image: "https://picsum.photos/seed/growthapp-saas/800/500",
  },
  {
    id: "4",
    title: "Tienda Moda Norte",
    description:
      "E-commerce con checkout claro, envíos y páginas de producto pensadas para vender.",
    label: "E-commerce",
    image: "https://picsum.photos/seed/moda-norte/800/500",
  },
  {
    id: "5",
    title: "Clínica Bienestar Plus",
    description:
      "Sitio institucional con formularios de contacto y SEO local para nuevos pacientes.",
    label: "Negocio local",
    image: "https://picsum.photos/seed/clinica-bienestar/800/500",
  },
  {
    id: "6",
    title: "Toolkit Analytics Pro",
    description:
      "Landing técnica con comparativa de planes y captación de leads B2B.",
    label: "Landing page",
    image: "https://picsum.photos/seed/analytics-pro/800/500",
  },
];
