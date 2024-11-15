import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/Productos/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/Productos/registrar-productos",
          label: "REGISTRAR PRODUCTOS",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
