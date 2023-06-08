# Generar notas

En ocasiones, se producen **errores en la emisión de facturas** a compradores o clientes. Esto provoca que estos errores se deban solventar con diferentes mecanismos, ya que la Ley prohíbe la eliminación de facturas ya emitidas.

## NOTA CRÉDITO - FACTURA

Una nota de crédito es un documento legal que se utiliza en transacciones de compraventa donde interviene un descuento posterior a la emisión de la factura, una anulación total, un cobro de un gasto incurrido de más, devolución de bienes.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  "serie_documento": "FC01",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_documento":"07",
  "codigo_tipo_nota": "01",
  "motivo_o_sustento_de_nota": "Error al emitir comprobante",
  "codigo_tipo_moneda": "PEN",
  "numero_orden_de_compra": "0045467898",
  "documento_afectado": {
    "external_id": "e5d6896a-0c42-4ad3-a482-5616e7fe50fb"
  }, 
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
        "number": "FC01-1",
        "filename": "20415963255-07-FC01-1",
        "external_id": "92f5a566-512d-4159-b4c6-b6000e697328",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "56/PpGEK7d59qsaqc+yZoxbBzqw=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYL3vNWZ7DCeJAwHs/JJnghWGE8SBgPEsaDhPEgYTxIGA8SxoOE8SBhPEgYDxLGg4TxIGE8fwFHMbVs99tbGwAAAABJRU5ErkJggg=="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/92f5a566-512d-4159-b4c6-b6000e697328",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/92f5a566-512d-4159-b4c6-b6000e697328",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/92f5a566-512d-4159-b4c6-b6000e697328"
    },
    "response": {
        "code": "0",
        "description": "La Nota de Crédito numero FC01-1, ha sido aceptada",
        "notes": []
    }}
```

## NOTA DÉBITO - FACTURA

Una de estas formas es la nota de débito y se utiliza cuando un comprador quiere informar a un vendedor de que ha aumentado el precio de su deuda o que la cantidad que había pagado era errónea y debe pagar más.

### Ejemplo:

### 1. JSON A ENVIAR

```json
{
  {
  "serie_documento": "FD01",
  "numero_documento": "#",
  "fecha_de_emision": "2018-10-09",
  "hora_de_emision": "10:11:11",
  "codigo_tipo_documento":"08",
  "codigo_tipo_nota": "01",
  "motivo_o_sustento_de_nota": "Error al emitir comprobante",
  "codigo_tipo_moneda": "PEN",
  "numero_orden_de_compra": "0045467898",
  "documento_afectado": {
    "external_id": "e5d6896a-0c42-4ad3-a482-5616e7fe50fb"
  }, 
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
  ]
}
```

### 2. JSON RESPUESTA

```json
{
    "success": true,
    "data": {
        "number": "FD01-1",
        "filename": "20415963255-08-FD01-1",
        "external_id": "72a16a9d-382a-4ca4-a1ba-fadfbd68f2fa",
        "number_to_letter": "Ciento dieciocho  con 00/100 ",
        "hash": "cLYytvN0hmSxp8NIqKI4ULq0IH0=",
        "qr": "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEi0lEQVR4nO2d227jMAxEm0X//5U0RfcaBOzu4GLC9Af2BiLFcaDhPFcls0NLrDCeJAwHiSMBwnjQcJ4kDAeJIwHCeNBwniQMB4kjAcJ40HCeP4CPz+yVDvGghIAAAAASUVORK5CYII="
    },
    "links": {
        "xml": "http://demo26.multifacturalonew.oo:8084/downloads/document/xml/72a16a9d-382a-4ca4-a1ba-fadfbd68f2fa",
        "pdf": "http://demo26.multifacturalonew.oo:8084/downloads/document/pdf/72a16a9d-382a-4ca4-a1ba-fadfbd68f2fa",
        "cdr": "http://demo26.multifacturalonew.oo:8084/downloads/document/cdr/72a16a9d-382a-4ca4-a1ba-fadfbd68f2fa"
    },
"response": {
        "code": "0",
        "description": "La Nota de Débito numero FD01-1, ha sido aceptada",
        "notes": []
    }
} 
```
