# CQ Condor Quality Web

Sitio institucional de CQ - Condor Quality, orientado a asesoria tecnica, calidad, inspeccion y control documental para proyectos de infraestructura.

## Estado actual

- Framework: Next.js 15.5.20 con App Router.
- UI: React 18.3.1, TypeScript y Tailwind CSS 4.
- Gestor de paquetes: npm con `package-lock.json`.
- Rama de estabilizacion: `chore/estabilizacion-cq`.
- Servidor local recomendado: `http://localhost:3003`.

## Requisitos

- Node.js 18.18.0 o superior. Validado localmente con Node.js 24.18.0.
- npm 11.16.0 o compatible.

## Instalacion

```bash
npm install
```

El proyecto aprueba scripts de instalacion solo para dependencias revisadas:

- `sharp@0.34.5`: dependencia opcional oficial de Next.js para procesamiento de imagenes.
- `unrs-resolver@1.11.1`: dependencia de `eslint-import-resolver-typescript`, incluida por `eslint-config-next`.

## Desarrollo

```bash
npm run dev -- -p 3003
```

Abrir:

```text
http://localhost:3003
```

## Validacion

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm audit
```

Resultado esperado tras la estabilizacion:

- TypeScript sin errores.
- ESLint sin warnings ni errores.
- Build de Next.js correcto.
- `npm audit` sin vulnerabilidades.

Nota: `next lint` esta deprecado y sera removido en Next.js 16. Migrar a ESLint CLI es una tarea recomendada para la siguiente fase.

## Estructura principal

- `app/page.tsx`: pagina institucional unica.
- `app/layout.tsx`: metadata global, header y footer.
- `app/api/contact/route.ts`: API interna para registrar solicitudes de contacto.
- `components/`: componentes visuales del sitio.
- `lib/site-content.ts`: contenido estructurado del sitio.
- `docs/`: diagnostico, arquitectura, roadmap y evidencia de recuperacion.

## Persistencia

El formulario de contacto registra solicitudes en:

```text
.data/contact-submissions.ndjson
```

Ese directorio esta excluido de Git por contener datos operativos.

## Documentacion complementaria

- `docs/DIAGNOSTICO_RECUPERACION.md`
- `docs/ARQUITECTURA_ACTUAL.md`
- `docs/ROADMAP_CQ.md`
