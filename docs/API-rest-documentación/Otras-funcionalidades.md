# Otras funcionalidades

## ENVIAR COMPROBANTE POR CORREO ELECTRÓNICO

Para enviar el comprobante mediante correo electrónico necesita agregar el siguiente objeto al **json** principal.

## OBJETO

```

"acciones": { 
    "enviar_email":true
 }

```

:::danger IMPORTANTE:

Tenga en cuenta que su cliente debe tener un correo válido para que el envio sea satisfactorio. El correo a modificar se encuentra en el objeto “datos_del_cliente_o_receptor” => “correo_electrónico”.

:::

**Ejemplo:**

1. **JSON A ENVIAR**

```

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
    "correo_electronico": "micorreo@gmail.com
				document.getElementById('cloak7aaf291a15d316fb28dce27d9a715818').innerHTML = '';
				var prefix = '&#109;a' + 'i&#108;' + '&#116;o';
				var path = 'hr' + 'ef' + '=';
				var addy7aaf291a15d316fb28dce27d9a715818 = 'm&#105;c&#111;rr&#101;&#111;' + '&#64;';
				addy7aaf291a15d316fb28dce27d9a715818 = addy7aaf291a15d316fb28dce27d9a715818 + 'gm&#97;&#105;l' + '&#46;' + 'c&#111;m';
				var addy_text7aaf291a15d316fb28dce27d9a715818 = 'm&#105;c&#111;rr&#101;&#111;' + '&#64;' + 'gm&#97;&#105;l' + '&#46;' + 'c&#111;m';document.getElementById('cloak7aaf291a15d316fb28dce27d9a715818').innerHTML += '<a ' + path + '\'' + prefix + ':' + addy7aaf291a15d316fb28dce27d9a715818 + '\'>'+addy_text7aaf291a15d316fb28dce27d9a715818+'<\/a>';
		",
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
    "enviar_email":true
  }
}


```

## CAMBIAR FORMATO DE REPRESENTACIÓN IMPRESA

Para modificar el formato del comprobante necesita agregar el siguiente objeto al json principal.

## OBJETO

```

"acciones": {  
    "formato_pdf":"ticket"
  }

```

Los formatos admitidos son **A4** y **ticket**, para **Facturas, Boletas y Notas**, los demás comprobantes solo cuentan con el formato A4. Tenga en cuenta que si no envia el formato, por defecto será A4.

**Ejemplo:**

1. **JSON A ENVIAR**

```

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
    "correo_electronico": "correo@gmail.com
				document.getElementById('cloak58293d9cfc13f78d61feb86aabfd01a6').innerHTML = '';
				var prefix = '&#109;a' + 'i&#108;' + '&#116;o';
				var path = 'hr' + 'ef' + '=';
				var addy58293d9cfc13f78d61feb86aabfd01a6 = 'c&#111;rr&#101;&#111;' + '&#64;';
				addy58293d9cfc13f78d61feb86aabfd01a6 = addy58293d9cfc13f78d61feb86aabfd01a6 + 'gm&#97;&#105;l' + '&#46;' + 'c&#111;m';
				var addy_text58293d9cfc13f78d61feb86aabfd01a6 = 'c&#111;rr&#101;&#111;' + '&#64;' + 'gm&#97;&#105;l' + '&#46;' + 'c&#111;m';document.getElementById('cloak58293d9cfc13f78d61feb86aabfd01a6').innerHTML += '<a ' + path + '\'' + prefix + ':' + addy58293d9cfc13f78d61feb86aabfd01a6 + '\'>'+addy_text58293d9cfc13f78d61feb86aabfd01a6+'<\/a>';
		",
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
    "formato_pdf":"ticket"
  }
}

```
