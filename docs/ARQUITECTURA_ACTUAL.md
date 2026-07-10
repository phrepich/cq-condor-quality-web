# Arquitectura actual

## Vision general

CQ Condor Quality Web es una aplicacion web institucional construida con Next.js App Router. Su funcion actual es presentar la propuesta de valor de CQ, describir servicios, experiencia, metodologia, proyeccion MOP, sectores y capturar solicitudes de contacto.

No es aun una plataforma operativa de gestion de calidad, documentos, inspecciones o auditorias. Es una base web de presentacion con una API minima de contacto.

## Stack

- Next.js 15.5.20.
- React 18.3.1.
- TypeScript.
- Tailwind CSS 4 via `@tailwindcss/postcss`.
- npm y `package-lock.json`.

## Rutas existentes

| Ruta | Tipo | Archivo | Descripcion |
| --- | --- | --- | --- |
| `/` | Pagina | `app/page.tsx` | Landing institucional de CQ |
| `/api/contact` | API POST | `app/api/contact/route.ts` | Registro de solicitudes de contacto |
| `/robots.txt` | Metadata route | `app/robots.ts` | Reglas de indexacion |
| `/sitemap.xml` | Metadata route | `app/sitemap.ts` | Sitemap basico |
| `/icon.svg` | Asset route | `app/icon.svg` | Icono |

## Modulos y componentes

- `components/header.tsx`: encabezado fijo, marca y navegacion.
- `components/footer.tsx`: pie institucional.
- `components/hero.tsx`: seccion principal.
- `components/services-grid.tsx`: servicios ofrecidos.
- `components/experience-section.tsx`: experiencia tecnica.
- `components/methodology-section.tsx`: metodologia CQ.
- `components/cta.tsx`: llamado a accion.
- `components/contact-section.tsx`: bloque de contacto.
- `components/contact-form.tsx`: formulario cliente.
- `components/condor-mark.tsx`: marca visual.
- `components/section-heading.tsx`: encabezado reutilizable.
- `lib/site-content.ts`: contenido estructurado, navegacion y textos comerciales.

## Autenticacion

No existe autenticacion. La aplicacion es publica.

Implicancia: cualquier funcionalidad futura de administracion, documentos, inspecciones, no conformidades o auditorias debe incorporar autenticacion, autorizacion por rol y bitacora de acciones.

## Persistencia de datos

Persistencia actual:

```text
.data/contact-submissions.ndjson
```

El endpoint `POST /api/contact` valida campos minimos y agrega una linea JSON por solicitud.

Campos esperados:

- `name`
- `company`
- `email`
- `phone`
- `service`
- `message`
- `createdAt`

No hay base de datos, cifrado, panel de lectura, envio de correo ni integracion CRM.

## Variables de entorno

No se detectaron variables de entorno usadas por el codigo actual. No existen archivos `.env*` en la raiz del proyecto.

## APIs internas

### `POST /api/contact`

Archivo: `app/api/contact/route.ts`

Funcion:

- Recibe JSON desde el formulario.
- Valida campos obligatorios.
- Requiere mensaje de al menos 20 caracteres.
- Crea `.data` si no existe.
- Agrega la solicitud en `contact-submissions.ndjson`.

Riesgos:

- Sin rate limit.
- Sin captcha ni proteccion anti-spam.
- Sin validacion robusta de email/telefono.
- Sin sanitizacion avanzada.
- Sin manejo explicito de errores de filesystem.
- Sin notificacion al equipo comercial.

## Formularios

Formulario existente:

- Contacto comercial/tecnico.
- Implementado como componente cliente.
- Envia datos con `fetch("/api/contact")`.
- Muestra estados `loading`, `success` y `error`.

## Exportaciones

No existen exportaciones de datos, reportes, PDF, Excel ni integraciones externas.

## Manejo de archivos

No hay carga de archivos. El unico manejo de archivos propio es la escritura append-only del formulario en `.data/contact-submissions.ndjson`.

## Funcionalidades incompletas

La web actual menciona capacidades de gestion de calidad, trazabilidad documental, auditorias, licitaciones, RDI, EDP y control contractual, pero esas capacidades estan expresadas como servicios, no como modulos de software.

No existen aun:

- Gestion documental.
- Control de versiones documental.
- Inspecciones.
- No conformidades.
- Auditorias.
- Indicadores.
- Reportabilidad.
- Usuarios y roles.
- Administracion.
- Integracion con correo, Drive, ERP, firma electronica o almacenamiento cloud.

## Datos simulados o placeholders

- Telefono y WhatsApp en `lib/site-content.ts` usan valores placeholder (`+56 9 0000 0000`, `56900000000`).
- El contenido comercial esta hardcodeado en `lib/site-content.ts`.
- No hay CMS ni fuente de datos externa.

## Riesgos tecnicos principales

- Deuda de codificacion de caracteres en archivos fuente con mojibake.
- Persistencia local no apta para produccion multiusuario.
- Ausencia de pruebas automatizadas.
- Ausencia de observabilidad.
- Ausencia de proteccion anti-spam.
- Dependencia de `next lint`, deprecado para Next 16.
- Falta definir dominio final y metadata productiva.
