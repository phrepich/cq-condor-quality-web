# Roadmap CQ

Este roadmap separa la estabilizacion tecnica del crecimiento funcional. La recomendacion CTO es mantener cambios pequenos, validados y revisables por rama.

## 1. Correcciones criticas

- Normalizar codificacion de textos fuente para eliminar mojibake sin cambiar contenido.
- Migrar `next lint` a ESLint CLI antes de Next 16.
- Agregar validacion robusta y manejo de errores en `POST /api/contact`.
- Incorporar proteccion anti-spam para formulario publico.
- Confirmar dominio final y actualizar `metadataBase`, robots y sitemap.
- Definir estrategia de almacenamiento para solicitudes de contacto fuera de `.data` local.

## 2. Estabilizacion

- Agregar pruebas unitarias basicas para validacion de payload de contacto.
- Agregar pruebas e2e de carga inicial, navegacion y envio de formulario.
- Configurar CI con `npm ci`, `typecheck`, `lint`, `build` y `npm audit`.
- Documentar convenciones de ramas, commits y releases.
- Definir matriz de navegacion responsive y QA visual.
- Agregar logging controlado para API internas.

## 3. Funcionalidades de calidad

- Crear modelo de proyecto/contrato.
- Crear plan de calidad por proyecto.
- Registrar procedimientos, instructivos, protocolos y registros.
- Definir responsables, estados, fechas y aprobaciones.
- Implementar trazabilidad entre requerimientos, evidencias y entregables.

## 4. Gestion documental

- Repositorio documental por proyecto.
- Control de versiones.
- Estados: borrador, revision, aprobado, obsoleto.
- Metadatos: codigo, revision, fecha, responsable, disciplina, contrato.
- Busqueda y filtros.
- Historial de cambios y auditoria.
- Exportacion de indices documentales.

## 5. Inspecciones

- Plantillas de inspeccion por tipo de obra o disciplina.
- Registro en terreno con hallazgos, fotos y evidencias.
- Estados de inspeccion: planificada, ejecutada, observada, cerrada.
- Asignacion de responsables y fechas compromiso.
- Vinculacion con documentos, partidas y frentes de trabajo.

## 6. No conformidades

- Registro de NCR/no conformidad.
- Clasificacion por severidad, origen, area y responsable.
- Flujo de accion correctiva y preventiva.
- Evidencia de cierre.
- Aprobacion de cierre.
- Analisis de causa raiz.

## 7. Auditorias

- Plan anual o por contrato.
- Checklists configurables.
- Hallazgos, observaciones y oportunidades de mejora.
- Seguimiento de acciones.
- Evidencia y cierre formal.
- Reporte ejecutivo de auditoria.

## 8. Indicadores

- Panel de cumplimiento documental.
- Indicadores de inspecciones abiertas/cerradas.
- No conformidades por estado, severidad y antiguedad.
- Tiempo promedio de cierre.
- Cumplimiento de acciones.
- Riesgos por contrato/proyecto.

## 9. Reportabilidad

- Reportes PDF ejecutivos.
- Exportaciones Excel/CSV.
- Reportes por contrato, periodo, disciplina y responsable.
- Trazabilidad de evidencias.
- Reportes listos para mandante, inspeccion fiscal o auditoria.

## 10. Administracion

- Usuarios y roles.
- Organizaciones, proyectos y contratos.
- Catalogos: disciplinas, servicios, estados, tipos de documento.
- Configuracion de plantillas.
- Bitacora de actividad.
- Politicas de retencion documental.

## 11. Futura integracion empresarial

- Integracion con correo para notificaciones.
- Almacenamiento cloud para documentos y evidencias.
- Integracion con Google Drive, SharePoint o S3-compatible storage.
- Firma electronica.
- Integracion ERP/finanzas para estados de pago.
- API externa para sistemas de mandantes.
- SSO empresarial.
- Data warehouse o BI para indicadores historicos.
