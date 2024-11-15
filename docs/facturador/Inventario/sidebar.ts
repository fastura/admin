import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Inventario/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Inventario/ingresos-movimientos",
          label: "INGRESOS MOVIMIENTOS",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
