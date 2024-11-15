import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "facturador/GenerarFactura/introduccion",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "facturador/GenerarFactura/factura-gravada",
          label: "FACTURA GRAVADA",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
