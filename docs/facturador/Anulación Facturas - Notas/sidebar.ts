import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Anulación Facturas - Notas/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Anulación Facturas - Notas/registrar-enviar-anulacion",
          label: "REGISTRAR Y ENVIAR ANULACIÓN",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
