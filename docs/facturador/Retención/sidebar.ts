import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Retención/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Retención/generar-comprobante-retencion",
          label: "GENERAR COMPROBANTE DE RETENCIÓN",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
