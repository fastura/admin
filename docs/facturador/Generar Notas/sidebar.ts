import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Generar Notas/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Generar Notas/nota-credito-factura",
          label: "NOTA CRÉDITO - FACTURA",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
