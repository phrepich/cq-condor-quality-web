# Diagnostico de recuperacion y estabilizacion

Fecha: 2026-07-10  
Rama: `chore/estabilizacion-cq`  
Repositorio: `https://github.com/phrepich/cq-condor-quality-web.git`

## Resumen ejecutivo

El proyecto fue recuperado desde:

```text
C:\Users\ASUS Gaming\Documents\RECUPERACION_CONIX_APPS\cq-condor-quality-web
```

Se confirmo que es un repositorio Git valido, basado en Next.js, React, TypeScript y Tailwind CSS. La app compila, pasa lint, pasa typecheck y queda operativa localmente en `http://localhost:3003`.

La estabilizacion se concentro en no alterar funcionalidad existente, actualizar dependencias criticas, retirar artefactos generados del control de versiones y documentar el estado actual para continuar desarrollo.

## Evidencia inicial guardada

Los comandos base quedaron registrados en:

- `docs/evidence/01-git-status-before.txt`
- `docs/evidence/02-git-log-5-before.txt`
- `docs/evidence/03-npm-outdated-before.txt`
- `docs/evidence/04-npm-audit-before.txt`
- `docs/evidence/05-node-npm-before.txt`

## Estado inicial relevante

- Rama inicial: `main`.
- Remoto: `https://github.com/phrepich/cq-condor-quality-web.git`.
- Commit base: `b026980 Primera version CQ web`.
- Node.js: `v24.18.0`.
- npm: `11.16.0`.
- `npm audit` inicial: 4 vulnerabilidades, 3 moderadas y 1 critica.
- Vulnerabilidad critica asociada a `next@15.1.6`.
- `tsconfig.tsbuildinfo` estaba rastreado por Git y quedo modificado por verificaciones locales.

## Cambios aplicados

### Limpieza de archivo generado

- Se verifico que `tsconfig.tsbuildinfo` estaba rastreado por Git.
- Se elimino del indice con `git rm --cached`.
- Se agrego `*.tsbuildinfo` a `.gitignore`.
- No se elimino configuracion real de TypeScript.

### Actualizacion segura de dependencias

Se reviso la rama 15 de Next.js y se eligio `15.5.20`, publicada como backport disponible en npm y compatible con React 18. La documentacion oficial de Next.js 15.5 describe mejoras sobre Next 15 sin exigir una migracion funcional a Next 16. La pagina oficial de seguridad de Next para CVE-2025-66478 indica versiones parcheadas dentro de las lineas 15.x, incluyendo la serie 15.5.

Fuentes revisadas:

- https://nextjs.org/blog/next-15-5
- https://nextjs.org/blog/CVE-2025-66478

Dependencias directas modificadas:

| Paquete | Antes | Despues | Motivo |
| --- | --- | --- | --- |
| `next` | `15.1.6` | `^15.5.20` | Corregir vulnerabilidad critica y mantener rama 15 |
| `eslint-config-next` | `15.1.6` | `^15.5.20` | Alinear reglas con Next actualizado |
| `react` | `18.3.1` | `^18.3.1` | Mantener React 18 compatible sin migracion a React 19 |
| `react-dom` | `18.3.1` | `^18.3.1` | Mantener React 18 compatible sin migracion a React 19 |

Tambien se aplicaron correcciones transitorias no forzadas mediante `npm audit fix`:

- `brace-expansion`: `5.0.5` a `5.0.7`.
- `js-yaml`: `4.1.1` a `4.3.0`.

Se agrego un override puntual:

```json
"overrides": {
  "next": {
    "postcss": "8.5.10"
  }
}
```

Motivo: `next@15.5.20` aun declara internamente `postcss@8.4.31`, afectado por advisory moderado. `postcss@8.5.10` resuelve la auditoria sin cambiar de major ni forzar Next 16.

### Scripts de instalacion

Se aprobaron explicitamente:

- `sharp@0.34.5`: dependencia opcional oficial de `next@15.5.20`.
- `unrs-resolver@1.11.1`: dependencia de `eslint-import-resolver-typescript`, incluida por `eslint-config-next@15.5.20`.

No se aprobo ningun script desconocido ni se uso aprobacion global.

## Validaciones ejecutadas

Tras los cambios:

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm audit
```

Resultado:

- `npm install`: correcto.
- `npm run typecheck`: correcto.
- `npm run lint`: correcto, sin warnings ni errores. Advertencia operativa: `next lint` esta deprecado para Next 16.
- `npm run build`: correcto con Next.js 15.5.20.
- `npm audit`: 0 vulnerabilidades.

## Validacion local

Servidor levantado en:

```text
http://localhost:3003
```

Resultado:

- HTTP 200 confirmado.
- Pagina inicial carga correctamente.
- Titulo HTML: `Asesoria tecnica, calidad e inspeccion para infraestructura`.
- Navegacion principal por anclas confirmada para:
  - `#quienes-somos`
  - `#servicios`
  - `#experiencia`
  - `#metodologia`
  - `#proyeccion-mop`
  - `#contacto`
- Consola del navegador sin errores criticos.
- Terminal del servidor sin errores repetitivos.

## Riesgos pendientes

- Varias cadenas fuente presentan mojibake en los archivos (`CÃ³ndor`, `AsesorÃ­a`, etc.). En navegador se renderizan correctamente en la validacion actual, pero debe normalizarse codificacion en una tarea controlada para evitar regresiones de contenido.
- `next lint` esta deprecado; conviene migrar a ESLint CLI antes de Next 16.
- El formulario persiste en archivo local `.data/contact-submissions.ndjson`; no es una persistencia empresarial.
- No existe autenticacion ni administracion de registros.
- No hay pruebas automatizadas de UI ni API.
- `metadataBase`, robots y sitemap apuntan a `https://cq-condor-quality.vercel.app`; confirmar dominio final antes de produccion.
