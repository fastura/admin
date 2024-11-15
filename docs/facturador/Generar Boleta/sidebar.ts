import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Generar Boleta/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Generar Boleta/boleta-gravada",
          label: "BOLETA GRAVADAS",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
