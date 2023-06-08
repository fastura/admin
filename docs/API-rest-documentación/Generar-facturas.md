# Generar facturas

## FACTURA GRAVADA

La Factura Electrónica es un comprobante de pago emitido a través del sistema de emisión electrónica desarrollado desde los sistemas del contribuyente y que permite la sustentación del costo-gasto para efectos del Impuesto a la Renta, así como la utilización del crédito fiscal del Impuesto General a las Ventas.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-5",
        "filename": "20415963255-01-F001-5",
        "external_id": "103c8710-6c6e-4b7b-8d7b-c59f642c7a71",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "gLOlpznxBvvhT/BUUugMYDhQo84=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEgklEQVR4nO2d3XYbMQgG4568/yund45bqwQBWneOZy7t1U/yHZAWIXz7+vr6EDK/Xj0B6aKEeJQQjxLiUUI8SohHCfEoIR4lxKOEeJQQjxLi+Uw+d7vd+oM9htTvHd4/fBzi+="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/103c8710-6c6e-4b7b-8d7b-c59f642c7a71",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/103c8710-6c6e-4b7b-8d7b-c59f642c7a71",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/103c8710-6c6e-4b7b-8d7b-c59f642c7a71"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-5, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA INAFECTA

La inafectación contenida en las normas del impuesto establece que operaciones y servicios no están gravadas con el IGV.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 0.00,
    "total_operaciones_inafectas": 118.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 0.00,
    "total_impuestos": 0.00,
    "total_valor": 118,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 59,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "30",
      "total_base_igv": 0.00,
      "porcentaje_igv": 18,
      "total_igv": 0.00,
      "total_impuestos": 0.00,
      "total_valor_item": 118,
      "total_item": 118
    }
  ] 
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-7",
        "filename": "20415963255-01-F001-7",
        "external_id": "c6057c05-6ec8-44d0-9fb9-23159498ce8e",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "wE4GOpgMM/ckUGdA7Qv2UzJYe70=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACwzDwIJ7bkt"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/c6057c05-6ec8-44d0-9fb9-23159498ce8e",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/c6057c05-6ec8-44d0-9fb9-23159498ce8e",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/c6057c05-6ec8-44d0-9fb9-23159498ce8e"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-7, ha sido aceptada",
        "notes": []
    }
}
```

### FACTURA GRAVADA - GRATUITA

Generar una factura con item gravado y gratuito.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento": "2018-10-09",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 100.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    },
    {
      "codigo_interno": "P0122",
      "descripcion":"Pepsi 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 0.00,
      "codigo_tipo_precio": "02",
      "precio_unitario": 0.00,
      "codigo_tipo_afectacion_igv": "16",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18.00,
      "total_igv": 18.00,
      "total_impuestos": 0.00,
      "total_valor_item": 0.00,
      "total_item": 0.00
    }    
  ]
}
```

### 2. JSON A RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-8",
        "filename": "20415963255-01-F001-8",
        "external_id": "9877a32d-b285-4f4a-9a8f-6b01e3d3621b",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "P4wuH5ZRD5itfP903wo1V9jwuLw=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAAC="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/9877a32d-b285-4f4a-9a8f-6b01e3d3621b",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/9877a32d-b285-4f4a-9a8f-6b01e3d3621b",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/9877a32d-b285-4f4a-9a8f-6b01e3d3621b"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-8, ha sido aceptada",
        "notes": []    }}
```

## FACTURA GRAVADA EN DÓLARES

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "USD",
  "fecha_de_vencimiento": "2018-10-09",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }   
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-9",
        "filename": "20415963255-01-F001-9",
        "external_id": "085582cc-953c-4609-8078-d682ef17a19d",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "wvkARde8TKhPpxDjVfEXTAPciiM=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAD6vetJt+ef8amAr5AwnjMd+2vq4Soj2pyzXPX99qTEFmRviNIGA8SxrO9qbB17NhU1E9urOlvPp0u4Mj3jUDCeMxXRGuWFV6WXUzq/p6/1Z3SrotuRPC9/vYDK/wPQMJ47rgiOnF3N1TnrburnX89qroL6s7AF0gYDxLGM8qdsdS1FafARlK9XoxGHFWNNxmH6MwbgYTx3JGEuGSSSHjDwWzjQHj3JizlEuALJIznZY70YOKyJk++oQhXI0WxAVYYDxLGg4TxjOZCizdvnIseWK44Ne4ti+j186k789YgYTzbjvTmOriNLccN5RLELhoXEBptscJ4kDCel2VzgwusMB4kjAcJ40HCeJAwHiSMBwnjQcJ4kDAeJIwHCeNBwniQMJ4/+yPKFTSawdUAAAAASUVORK5CYII="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/085582cc-953c-4609-8078-d682ef17a19d",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/085582cc-953c-4609-8078-d682ef17a19d",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/085582cc-953c-4609-8078-d682ef17a19d"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-9, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA GRATUITA

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 0.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 100.00,
    "total_igv": 0.00,
    "total_impuestos": 0.00,
    "total_valor": 0.00,
    "total_venta": 0.00
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "", 
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 0.00,
      "codigo_tipo_precio": "02",
      "precio_unitario": 0.00,
      "codigo_tipo_afectacion_igv": "16",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18.00,
      "total_igv": 18.00,
      "total_impuestos": 0.00,
      "total_valor_item": 0.00,
      "total_item": 0.00
    }
  ],
  "leyendas": [
    {
      "codigo": "1002",
      "valor": "TRANSFERENCIA GRATUITA"
    }
  ]
}
```
### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-14",
        "filename": "20415963255-01-F001-14",
        "external_id": "7777062c-a22a-4d2c-925e-94063f3d4596",
        "number_to_letter": "Cero con 00/100 ",
        "hash": "G+O3Qn2FvoYmj4aDYu19lOIvCx0=",
        "qr": "iVBORw0KGHVPYHBA3SAu5oOKcNF731FmQYIX2IKE9wyWiBcQIi/5yn+03ZiptPmikCVZoDxLac1s2N0yBFdqDhPYgoT1IaA8S2oOE9iChPUhoDxLag4T2IKE9SGgPEtrzDwHhDzxi9N5VAAAAAElFTkSuQmCC"
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/7777062c-a22a-4d2c-925e-94063f3d4596",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/7777062c-a22a-4d2c-925e-94063f3d4596",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/7777062c-a22a-4d2c-925e-94063f3d4596"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-14, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA EXONERADA

Entendemos por exoneradas a aquellas operaciones que, no obstante encontrarse afectas en principio al impuesto, por mandato de la misma ley quedan liberadas del pago del tributo.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
   "serie_documento": "F001",
   "numero_documento": "#",
   "fecha_de_emision": "2018-10-09",
   "hora_de_emision": "10:11:11",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
    "numero_orden_de_compra": "0045467898", 
    "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 0.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 118.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 0.00,
    "total_impuestos": 0.00,
    "total_valor": 118,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "",
      "codigo_producto_gsl": "",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 59,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "20",
      "total_base_igv": 118.00,
      "porcentaje_igv": 18,
      "total_igv": 0.00,
      "total_impuestos": 0.00,
      "total_valor_item": 118,
      "total_item": 118
    }
  ] 
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-17",
        "filename": "20415963255-01-F001-17",
        "external_id": "5a3b1a7e-2c71-4d20-b808-50ea0a82d6d2",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "tXp3cesBNfVwKXqm/b3kW84Q5vE=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEZElEQVR4nO2dwW7jMAxEk0X//5e7l0UQ1FyV4oydDPLesbElJQNSEkWx9+/v7xsk8+fVAwAVJIwHCeNBwniQMB4kjAcJ40HCeJAwHiS7vSJtRPEsaDhPEgYTxIGM9fuiMPDwbdPS0AAAAASUVORK5CYII="
    },
    "links": {
        "xml": 
"http://demo26.multifacturalonew.oo:8084/downloads/document/xml/5a3b1a7e-2c71-4d20-b808-50ea0a82d6d2",
        "pdf": 
"http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/5a3b1a7e-2c71-4d20-b808-50ea0a82d6d2",
        "cdr": 
"http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/5a3b1a7e-2c71-4d20-b808-50ea0a82d6d2"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-17, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA GRAVADA SIN ENVIAR

Puede generar una factura sin enviarla a **sunat** (offline), en caso no cuente con internet, puede generar el xml y pdf normalmente. Y en un momento posterior enviarla a sunat, y obtener el CDR respectivo.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2018-08-30",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "acciones": {
    "enviar_xml_firmado": false
  }
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-15",
        "filename": "20415963255-01-F001-15",
        "external_id": "7d9feb66-16e9-47a9-86fd-ebccdb662678",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "WnFNru/saJAiNBfRZeYrxxbcTEQ=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEbUlEQVR4nO2d227jMAxEm8X+/y9334IAVhmKM3Y663MeE+vSDEhZFMU+vr+/vyCZP5+eAKggYTxIGA8SxoOE8SBhPEgYDxLGg4TxIGE8SBgPEsbzt/nc4/HQB3sNqR87HATcl7M69mOZ/LLnJfbfqgYrjAcJ4+k60ifnubsBzU76Y7lc7u64ygSwwniQMB4kjGd7LXyldtz1SvBsu3ysuSQMhjh++DrW7oakbtvvR3kzwArjQcJ4JEdqofaotZtteqfa3aWnYWKF8SBhPJ93pE/6gQklkL37Rlp78t/ghLHCeJAwHiSMR1oLlZXguBT1byNQfCWGE8SBiPFObe9Z/9yI5y5Fuz28Se/9JcVghz3wgkjEeKzjTvoVtc1uDbQargbrx+cD7qDQ99YYX/AUgYDxLGY95U2E9K7YnxSoTl2IlyM9kFVhgPEsYjbSpqmkHwerhjb8sOXSn3nZksO+nPyn6JA="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/7d9feb66-16e9-47a9-86fd-ebccdb662678",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/7d9feb66-16e9-47a9-86fd-ebccdb662678",
        "cdr": ""
    },
    "response": []
}
```

## ENVIAR FACTURA GENERADA OFFLINE

Para enviar a **Sunat** la factura generada en modo offline, puede usar el siguiente servicio, necesitará la url, el **token** y el **external_id** del documento generado.

- **Url:** http://demo.fastura.app/api/documents/send
- **Token:** oZoKGFDzqGJfJilCHowJlZrTadQRBtuJ2fr3PkJz02aU46WPPg

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "external_id": "4812b6e7-352d-4926-8409-3a8a6b02bb94"
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "F001-15",
        "filename": "20415963255-01-F001-15",
        "external_id": "7d9feb66-16e9-47a9-86fd-ebccdb662678"
    },
    "links": {
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/7d9feb66-16e9-47a9-86fd-ebccdb662678"
    },
    "response": {
        "code": "0",
        "description": "La Factura numero F001-15, ha sido aceptada",
        "notes": []
    }
}
```

## FACTURA - DATOS ADICIONALES - GUÍAS

Para añadir guías a la factura necesita agregar el siguiente arreglo al json principal.

### 1. ARREGLO

```json
"guias":[
	    {
	      "numero": "T001",
	      "codigo_tipo_documento": "09"
	    },
	    {
	      "numero": "T002",
	      "codigo_tipo_documento": "09"
	    }
  ]
```

### Ejemplo:

### 2. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2019-02-21",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
  "codigo_tipo_documento":"01",
  "codigo_tipo_moneda": "PEN",
  "fecha_de_vencimiento":"2019-02-21",
  "numero_orden_de_compra": "0045467898", 
  "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "guias":[
	    {
	      "numero": "T001",
	      "codigo_tipo_documento": "09"
	    },
	    {
	      "numero": "T002",
	      "codigo_tipo_documento": "09"
	    }
  ],
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA - D. ADICIONALES - DOC. RELACIONADOS

Para añadir documentos relacionados a la factura necesita agregar el siguiente arreglo al **json** principal.

### 1. ARREGLO

```json
"relacionados":[
    {
      "numero": "12",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } ,
    {
      "numero": "15",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } 
  ] 
```

### 2. JSON A ENVIAR

```json
{
  "serie_documento": "F001",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
   "numero_orden_de_compra": "0045467898", 
   "datos_del_cliente_o_receptor":{
   "codigo_tipo_documento_identidad": "6",
   "numero_documento": "10414711225",
   "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
   "codigo_pais": "PE",
   "ubigeo": "150101",
   "direccion": "Av. 2 de Mayo",
   "correo_electronico": "demo@gmail.com",
   "telefono": "427-1148"
  }, 
  "relacionados":[
    {
      "numero": "12",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } ,
 {
      "numero": "15",
      "codigo_tipo_documento": "01",
      "monto": 150.00
    } 
  ] ,
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118 
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA - D. ADICIONALES A NIVEL DE ITEM

Para añadir datos adicionales a nivel de item en la factura, necesita agregar el siguiente arreglo al item.

### 1. ARREGLO

```json
  "datos_adicionales":[
  	{
  		"codigo": "5010",
  		"descripcion": "Numero de Placa",
  		"valor": "A7Q-986"
  	}
   ] 
```

Puede añadir estos datos cuando necesita agregar atributos a los items de su factura, en este caso el número de placa. Tenga en cuenta que el código debe ser el correspondiente al catalogo de atributos brindado por sunat.

### Ejemplo:

### 2. JSON A ENVIAR

```json
{
   "serie_documento": "F001",
   "numero_documento": "#",
   "fecha_de_emision": "2018-10-09",
   "hora_de_emision": "10:11:11",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2018-08-30",
   "numero_orden_de_compra": "0045467898", 
   "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118,
      "datos_adicionales":[
  			{
  				"codigo": "5010",
  				"descripcion": "Numero de Placa",
  				"valor": "A7Q-986"
  			}
  	  ] 
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA CONTINGENCIA

Para generar una factura de contingencia previamente debe registrar las series de contingencia, en el módulo Usuarios/Locales & Series sección Establecimientos.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
   "serie_documento": "0001",
   "numero_documento": "#",
   "fecha_de_emision": "2019-09-03",
   "hora_de_emision": "10:11:11",
   "fecha_de_vencimiento":"2019-09-03",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",  
   "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "20501973522",
    "apellidos_y_nombres_o_razon_social": "EMBOTELLADORA DON JORGE S.A.C. EN LIQUIDACION",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. Argentina 2458",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118
  },
  "items":[
    {
      "codigo_interno": "P0121",
      "descripcion":"Inca Kola 250 ml",
      "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```

## FACTURA GRAVADA - IMPUESTO BOLSA PLÁSTICA

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
   "serie_documento": "F001",
   "numero_documento": "#",
   "fecha_de_emision": "2019-09-03",
   "hora_de_emision": "10:11:11",
   "codigo_tipo_operacion": "0101",
   "codigo_tipo_documento":"01",
   "codigo_tipo_moneda": "PEN",
   "fecha_de_vencimiento":"2019-09-03", 
   "datos_del_cliente_o_receptor":{
    "codigo_tipo_documento_identidad": "6",
    "numero_documento": "10414711225",
    "apellidos_y_nombres_o_razon_social": "EMPRESA XYZ S.A.",
    "codigo_pais": "PE",
    "ubigeo": "150101",
    "direccion": "Av. 2 de Mayo",
    "correo_electronico": "demo@gmail.com",
    "telefono": "427-1148"
  },
  "totales": {
    "total_exportacion": 0.00,
    "total_operaciones_gravadas": 100.00,
    "total_operaciones_inafectas": 0.00,
    "total_operaciones_exoneradas": 0.00,
    "total_operaciones_gratuitas": 0.00,
    "total_impuestos_bolsa_plastica": 0.2,
    "total_igv": 18.00,
    "total_impuestos": 18.00,
    "total_valor": 100,
    "total_venta": 118.2
  },
  "items":[
    {
      "codigo_interno": "P0015",
      "descripcion":"Pepsi 3 lt",
     "codigo_producto_sunat": "51121703",
      "unidad_de_medida": "NIU",
      "cantidad": 2,
      "valor_unitario": 50,
      "codigo_tipo_precio": "01",
      "precio_unitario": 59,
      "codigo_tipo_afectacion_igv": "10",
      "total_base_igv": 100.00,
      "porcentaje_igv": 18,
      "total_igv": 18,
      "total_impuestos_bolsa_plastica": 0.2,
      "total_impuestos": 18,
      "total_valor_item": 100,
      "total_item": 118
    }
  ],
  "informacion_adicional": "Forma de pago:Efectivo|Caja: 1"
}
```
