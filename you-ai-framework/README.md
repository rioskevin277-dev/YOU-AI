# YOU AI Framework

## Qué es

**YOU AI** es el framework interno de metodología que utilizamos en nuestra empresa para analizar negocios, diseñar MVPs y desarrollar soluciones tecnológicas con inteligencia artificial.

No es un producto ni una herramienta tecnológica. Es una forma de trabajar: un conjunto estructurado de documentos, estándares, plantillas y guías que aseguran que cada proyecto siga un proceso consistente, repetible y con resultados predecibles.

## Qué problema resuelve

Cada cliente llega con un problema de negocio. Sin un proceso definido, es fácil:

- Saltar directamente a la solución sin entender el problema real.
- Entregar funcionalidades que nadie pidió.
- Perder descubrimientos valiosos porque no quedaron documentados.
- Repetir errores porque no hay estándares compartidos entre proyectos.
- Depender de la memoria individual en lugar de la memoria institucional.

**YOU AI** resuelve esto imponiendo una estructura que obliga al equipo a **descubrir antes de construir**, **documentar antes de desarrollar** y **estandarizar antes de escalar**.

## Qué contiene este repositorio

| Sección | Propósito |
|---|---|
| `docs/00-company/` | Visión, misión y valores de la empresa. El norte de cada decisión. |
| `docs/01-methodology/` | La metodología completa: descubrimiento, diseño de MVP, desarrollo y despliegue. |
| `docs/02-standards/` | Estándares internos de documentación, git, arquitectura y codificación. |
| `templates/` | Plantillas reutilizables para README, contexto de proyecto, descubrimiento, MVP y arquitectura. |
| `playbooks/` | Guías paso a paso para las situaciones más comunes: primer cliente, sesión de descubrimiento, revisión semanal y entrega. |
| `ai/` | Configuración del ecosistema de IA del framework. |
| `ai/context/` | Contextos permanentes que definen cómo debe operar cada agente. |
| `ai/agents/` | Definiciones de agentes de IA con instrucciones de rol y alcance. |
| `ai/workflows/` | Secuencias de trabajo automatizadas entre agentes. |
| `ai/templates/` | Plantillas de prompts para cada tipo de interacción. |
| `examples/` | Ejemplos de proyectos anteriores (completados con el framework). |

## Cómo debe utilizarse

**YOU AI** no se lee de principio a fin. Se consulta según el momento del proyecto:

1. **Antes del primer cliente** — leer `playbooks/first-client.md` y familiarizarse con la metodología en `docs/01-methodology/discovery.md`.
2. **Durante una sesión de descubrimiento** — seguir `playbooks/discovery-session.md` y usar las plantillas de descubrimiento.
3. **Al definir un MVP** — consultar `docs/01-methodology/mvp.md` y usar `templates/MVP.template.md`.
4. **Durante el desarrollo** — seguir los estándares en `docs/02-standards/` según aplique.
5. **Cada semana** — revisar `playbooks/weekly-review.md` para mantener el rumbo.
6. **Al entregar** — usar `playbooks/delivery.md` como checklist de cierre.

La carpeta `ai/` contiene todo lo necesario para que los agentes de IA trabajen dentro del framework con roles, contextos y flujos bien definidos. Cada vez que se inicia una sesión con un agente, se debe cargar su contexto, prompt y definición de rol desde `ai/context/` y `ai/agents/`.

## Estructura del proyecto

```
you-ai-framework/
├── README.md                    ← Este archivo
├── PROJECT_CONTEXT.md           ← Contexto global del framework
├── docs/
│   ├── 00-company/              ← Identidad de la empresa
│   ├── 01-methodology/          ← Procesos y metodologías
│   └── 02-standards/            ← Estándares internos
├── templates/                   ← Plantillas reutilizables
├── playbooks/                   ← Guías operativas
├── ai/
│   ├── context/                 ← Contextos permanentes para agentes
│   ├── agents/                  ← Definiciones de agentes
│   ├── workflows/               ← Secuencias de trabajo entre agentes
│   └── templates/               ← Plantillas de prompts
└── examples/                    ← Proyectos de referencia
```

## Cómo iniciar un nuevo cliente usando este framework

El flujo estándar para cualquier nuevo cliente es el siguiente:

### Paso 1 — Preparación

1. Copiar las plantillas necesarias a la carpeta del proyecto del cliente.
2. Cargar el contexto del negocio en `PROJECT_CONTEXT.md` del nuevo proyecto.
3. Revisar el playbook `first-client.md` para tener el panorama completo.

### Paso 2 — Descubrimiento

1. Ejecutar la sesión de descubrimiento siguiendo `playbooks/discovery-session.md`.
2. Documentar hallazgos usando las secciones recomendadas en `templates/DISCOVERY.template.md`.
3. Identificar problemas, oportunidades y priorizarlos según impacto y esfuerzo.

### Paso 3 — Definición del MVP

1. Usar `docs/01-methodology/mvp.md` para definir el alcance mínimo viable.
2. Documentar la propuesta en `templates/MVP.template.md`.
3. Validar con el cliente antes de continuar.

### Paso 4 — Arquitectura

1. Definir la arquitectura de la solución usando `templates/ARCHITECTURE.template.md`.
2. Documentar decisiones técnicas y alternativas consideradas.
3. Asegurar que el diseño responde directamente a los problemas descubiertos.

### Paso 5 — Desarrollo y estándares

1. Seguir los estándares de `docs/02-standards/` durante toda la ejecución.
2. Usar los contextos, agentes y flujos de `ai/` según el rol necesario en cada etapa.
3. Mantener la documentación actualizada a medida que avanza el proyecto.

### Paso 6 — Revisión y entrega

1. Ejecutar `playbooks/weekly-review.md` periódicamente.
2. Al finalizar, seguir `playbooks/delivery.md` para el cierre formal.

---

Este framework es propiedad de nuestra empresa. Se actualiza con cada proyecto. Cada cliente nuevo lo hace más robusto.
