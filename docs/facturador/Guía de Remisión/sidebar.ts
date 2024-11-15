import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Guía de Remisión/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Guía de Remisión/generar-guia-remision",
          label: "Guia de Remisión",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
