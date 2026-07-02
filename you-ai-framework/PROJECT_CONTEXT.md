# YOU AI — Project Context

> Este documento es la fuente de verdad sobre quiénes somos, cómo pensamos y cómo trabajamos.
> Debe ser leído por cualquier agente de IA antes de participar en tareas del framework.

---

## Qué es YOU AI

**YOU AI** es el framework interno de nuestra empresa para analizar negocios, diseñar MVPs y desarrollar soluciones tecnológicas con inteligencia artificial.

No es un producto. No es una plataforma. No es un stack tecnológico. Es una **metodología** que define cómo abordamos cada proyecto, desde la primera conversación con un cliente hasta la entrega final.

El framework vive en este repositorio y se actualiza con cada proyecto. Cada cliente nuevo lo hace más robusto. No es estático: evoluciona a medida que aprendemos.

---

## Qué buscamos construir

Buscamos construir soluciones que resuelvan problemas reales de negocio. No buscamos tecnología impresionante. Buscamos:

- **Claridad antes de código.** Entender el problema antes de hablar de soluciones.
- **MVPs que realmente sean viables.** Que resuelvan algo concreto, no que tengan muchas funcionalidades.
- **Documentación que cuente una historia.** No por cumplir, sino porque es la única manera de que el conocimiento trascienda.
- **Procesos repetibles.** Que el décimo cliente sea más rápido y mejor que el primero.
- **Equipos aumentados por IA.** Donde los agentes trabajan con roles claros, no como asistentes genéricos.

Nuestro objetivo no es entregar software. Es entregar **soluciones que funcionen** — y si para eso hace falta software, lo construimos bien.

---

## Cómo pensamos

Nuestra forma de pensar se apoya en estos principios:

### 1. Primero descubrimos, después construimos

No importa lo seguro que esté el cliente de lo que necesita. Siempre hay una sesión de descubrimiento estructurada. Los problemas rara vez son los que parecen en la primera llamada.

### 2. Las decisiones se documentan, no se recuerdan

Si no está escrito, no pasó. Cada decisión de alcance, cada tradeoff, cada riesgo identificado debe quedar documentado. La IA puede olvidar entre sesiones. El equipo humano también. Los documentos no.

### 3. El MVP no es un producto pequeño, es un producto enfocado

Un MVP no es "la versión sin terminar". Es la versión que resuelve el problema más importante con la menor cantidad de cosas. Si no duele sacar una funcionalidad del MVP, es que no era parte del MVP.

### 4. Los estándares existen para acelerar, no para burocratizar

Los estándares de documentación, git, arquitectura y codificación no existen para hacer más lento el equipo. Existen para que no tengamos que discutir lo mismo en cada proyecto.

### 5. La IA es un miembro más del equipo

Los agentes de IA tienen roles definidos, prompts específicos y expectativas claras. No son "asistentes mágicos". Son colaboradores con fortalezas y limitaciones, y se les asigna trabajo como a cualquier otra persona del equipo.

---

## Cómo tomamos decisiones

Toda decisión importante sigue este proceso, sin excepción:

| Paso | Pregunta | Quién decide |
|---|---|---|
| 1. Descubrimiento | ¿Cuál es el problema real? | Cliente + PM |
| 2. Definición | ¿Qué resolvería este problema? | PM + Arquitecto |
| 3. Validación | ¿Esto es lo que necesita el negocio? | Cliente |
| 4. Priorización | ¿Qué hacemos primero? | PM + Cliente |
| 5. Ejecución | ¿Cómo lo construimos? | Arquitecto + Devs |
| 6. Revisión | ¿Realmente resuelve el problema? | Cliente + QA |

Las decisiones técnicas se toman después de entender el contexto del negocio. Nunca antes.

Cuando hay un tradeoff, se documenta: qué se ganó, qué se perdió y por qué se tomó esa dirección.

Si un agente de IA enfrenta una decisión ambigua, debe detenerse y preguntar. No inventar una respuesta.

---

## Qué significa un MVP

En YOU AI, un MVP cumple estas condiciones:

1. **Resuelve un problema real.** No es una funcionalidad que "estaría buena tener".
2. **Es usable por sí solo.** El cliente puede usarlo sin necesidad de lo que viene después.
3. **Se puede medir.** Sabemos si funcionó porque definimos cómo medirlo antes de construirlo.
4. **Se puede descartar.** Si el aprendizaje indica que vamos mal, podemos cambiar de dirección sin haber invertido demasiado.
5. **Dura lo suficiente.** No se construye para tirar, pero se acepta que puede ser reemplazado cuando el producto madure.

El MVP no es el objetivo final. Es el primer paso que nos permite aprender con el menor costo posible.

---

## Qué tipo de clientes atendemos

Trabajamos con:

- **Empresas que quieren automatizar procesos con IA** pero no saben por dónde empezar.
- **Negocios que tienen problemas claros** pero no tienen el conocimiento técnico para resolverlos.
- **Startups que necesitan un MVP rápido** sin sacrificar la calidad de lo que entregan.
- **Empresas establecidas que quieren explorar oportunidades** con inteligencia artificial sin comprometer su operación actual.

El cliente ideal es el que tiene un problema real y está dispuesto a participar activamente en el proceso de descubrimiento. Sin clientes comprometidos, no hay solución posible.

---

## Qué NO hacemos

Tan importante como lo que hacemos es lo que no hacemos:

- **No vendemos tecnología.** Vendemos soluciones. Si la solución no requiere IA, no usamos IA.
- **No aceptamos proyectos sin descubrimiento.** Si el cliente no quiere pasar por el proceso de entender su problema, no es el cliente adecuado.
- **No construimos todo lo que el cliente pide.** Construimos lo que el cliente necesita. A veces es menos. A veces es diferente.
- **No trabajamos sin documentación.** Si el equipo no documenta, el proyecto se detiene hasta que lo haga.
- **No hacemos deadlines imposibles.** Preferimos decir que no a entregar mal.
- **No prometemos lo que no podemos cumplir.** La transparencia con el cliente es innegociable.
- **No diseñamos arquitectura sin entender el negocio primero.** La tecnología siempre está al servicio del problema, nunca al revés.

---

## Cómo debe comportarse la IA cuando participe en el proyecto

Los agentes de IA que trabajen en YOU AI deben seguir estas reglas de comportamiento:

### Rol y alcance

- Tu rol está definido en el archivo de agente correspondiente dentro de `ai/agents/`. Conocelo y respetalo.
- No asumas tareas que no te fueron asignadas. Si algo no está claro, preguntá.
- Si tu rol es "arquitecto", no actúes como PM. Si tu rol es "backend", no diseñes interfaces.

### Documentación

- Documentá todo: decisiones, suposiciones, tradeoffs, alternativas consideradas.
- Usá los templates de `templates/` cuando corresponda. No inventes formatos nuevos.
- Si no estás seguro de dónde documentar algo, preguntá.

### Decisiones

- No tomes decisiones ambiguas por tu cuenta. Si el contexto no es suficiente, detenete y preguntá.
- Cuando documentes una decisión, incluí: qué se decidió, por qué, qué alternativas se consideraron y por qué se descartaron.

### Lenguaje

- Escribí en el idioma que corresponda al proyecto del cliente. Para documentos internos del framework, español.
- No uses jerga técnica innecesaria. Preferí lenguaje que el cliente pueda entender.
- Si tenés que usar un término técnico, explicalo la primera vez.

### Límites

- No generes código sin entender primero el contexto de negocio. Si no lo tenés, pedilo.
- No asumas tecnologías. Si no se especificó el stack, preguntá.
- No generes documentación que no te fue solicitada. Si creés que falta algo, proponelo, no lo crees sin autorización.
- Si un requerimiento es contradictorio o imposible, señalalo inmediatamente.

### Errores

- Si cometés un error, reconocelo rápidamente y proponé una corrección.
- Si detectás un error en documentación existente o en decisiones previas, señalalo con evidencia.

### Prioridad

- La claridad es más importante que la velocidad.
- La precisión es más importante que la cantidad.
- La honestidad con el cliente es más importante que cualquier otra cosa.

---

*Este documento es parte del framework YOU AI. No debe ser modificado sin aprobación del equipo.*
