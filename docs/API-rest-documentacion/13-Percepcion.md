# Percepción

* **Url:** https://demo.pro5.fastura.app/api/perceptions
* **Token:** HOHYgwd4atPalTxqi2IIspythpLAU7eP239oByfjk9VuveiOpfUTm4Yg0Szt

## 1. JSON A ENVIAR
```json
{
  "serie_documento": "P001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_documento": "40",
  "datos_del_emisor": {
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148",
    "codigo_del_domicilio_fiscal": "0000"
  }, 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "nombre_comercial": "EMPRESA XYZ",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "codigo_tipo_percepcion": "01",
  "observaciones": "-",
  "totales": {
    "total_percibido": 30.00,
    "total_pagado": 1000.00
  },
  "documentos":[
    {
      "codigo_tipo_documento": "01",
      "serie_documento": "F001",
      "numero_documento": "3",
      "fecha_de_emision": "2018-10-09",
      "codigo_tipo_moneda": "PEN",
      "pagos": [
        {
          "fecha_de_pago": "2018-10-09",
          "total_pago": 200.00,
          "codigo_tipo_moneda": "PEN"
        }
      ],
      "tipo_de_cambio": {
        "codigo_tipo_moneda_referencia": "PEN",
        "codigo_tipo_moneda_objetivo": "PEN",
        "factor": 1,
        "fecha_tipo_de_cambio": "2018-10-09"
      },
      "fecha_de_percepcion": "2018-10-09",
      "total_documento": 400.00,
      "total_percibido": 12.00,
      "total_a_pagar": 412.00,
      "total_pagado": 412.00
    },
    {
      "codigo_tipo_documento": "01",
      "serie_documento": "F001",
      "numero_documento": "4",
      "fecha_de_emision": "2018-10-09",
      "codigo_tipo_moneda": "USD",
      "total_documento": 200.00,
      "pagos": [
        {
          "fecha_de_pago": "2018-10-09",
          "total_pago": 200.00,
          "codigo_tipo_moneda": "USD"
        }
      ],
      "tipo_de_cambio": {
        "codigo_tipo_moneda_referencia": "USD",
        "codigo_tipo_moneda_objetivo": "PEN",
        "factor": 3.00,
        "fecha_tipo_de_cambio": "2018-10-09"
      },
      "fecha_de_percepcion": "2018-10-09",
      "total_percibido": 18.00,
      "total_a_pagar": 618.00,
      "total_pagado": 618.00
    }
  ]
}
```

## 2. JSON DE RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "P001-1",
        "filename": "20302019010-40-P001-1",
        "external_id": "7b41fbbb-b8ae-42f6-8722-61715e8db3b1"
    },
    "links": {
        "xml": "https://demo.pro5.fastura.app/downloads/perception/xml/7b41fbbb-b8ae-42f6-8722-61715e8db3b1",
        "pdf": "https://demo.pro5.fastura.app/downloads/perception/pdf/7b41fbbb-b8ae-42f6-8722-61715e8db3b1",
        "cdr": "https://demo.pro5.fastura.app/downloads/perception/cdr/7b41fbbb-b8ae-42f6-8722-61715e8db3b1"
    },
    "response": {
        "code": "0",
        "description": "El Comprobante numero P001-1 ha sido aceptado",
        "notes": []
    }
}
```