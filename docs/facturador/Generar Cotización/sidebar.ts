import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Generar Cotización/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Generar Cotización/generar-cotizacion",
          label: "GENERAR COTIZACIÓN",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
