export type ServiceAccent = "cyan" | "purple" | "lime";

export interface Service {
  id: string;
  title: string;
  description: string;
  accent: ServiceAccent;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Desarrollo frontend",
    description:
      "Interfaces rápidas y accesibles con React y TypeScript. Código mantenible y enfocado en la experiencia del usuario.",
    accent: "cyan",
  },
  {
    id: "2",
    title: "Productos y landing pages",
    description:
      "Páginas que convierten: estructura clara, rendimiento y un diseño que refleja la calidad de tu marca.",
    accent: "purple",
  },
  {
    id: "3",
    title: "Integración y despliegue",
    description:
      "Conexión con APIs, formularios, analítica y despliegue continuo para que tu sitio esté siempre disponible.",
    accent: "lime",
  },
];
