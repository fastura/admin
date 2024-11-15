import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Generar Resúmenes/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Generar Resúmenes/registrar-enviar-resumen",
          label: "REGISTRAR Y ENVIAR RESÚMEN",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
