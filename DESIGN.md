---
name: Gavia
description: Estudio de software de Córdoba. El sitio es una carta náutica de cómo se construye un proyecto.
colors:
  ink: "#12243a"
  ink-soft: "#2b3d54"
  muted: "#4a5d73"
  paper: "#f1f4f7"
  shoal: "#dce6ee"
  shoal-deep: "#c9d7e3"
  white: "#ffffff"
  signal: "#f06a2a"
  signal-hover: "#d9561c"
  signal-text: "#b4461a"
  rule: "rgb(18 36 58 / 0.16)"
  rule-strong: "rgb(18 36 58 / 0.55)"
  danger: "#b3261e"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Public Sans Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Public Sans Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.06em"
  coord:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4.5vw, 80px)"
  section: "clamp(88px, 12vw, 168px)"
  max: "1560px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85em 1em"
  sheet:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: Gavia

## Overview

**Creative North Star: "La carta de rumbo"**

El sitio es una carta náutica de trabajo: papel azulado, tinta azul marino, y una sola línea de rumbo en naranja que va de "Excel y WhatsApp" a "Mantenimiento". Todo lo que se dibuja (filetes, cuadrículas, escalas de grados, cartuchos, bajíos) sale del oficio de la cartografía; nada es ornamento de "software factory".

La densidad es de documento, no de folleto: secciones largas con título a la izquierda y bajada corrida a la derecha, filetes de tinta que separan filas como en un libro de bitácora, y entregables mostrados como hojas de papel planas. La composición es asimétrica; nada se centra.

La disciplina es de dos tintas: azul marino para todo lo que se lee y se construye, naranja para el rumbo y para lo que el visitante tiene que hacer. Lo punteado está planificado; lo continuo está hecho.

**Key Characteristics:**
- Papel de carta (#f1f4f7) con bajíos azules como únicas regiones de color.
- Dos tintas: azul marino y naranja señal. El naranja nunca es decoración.
- Esquinas rectas en todo; los únicos círculos son puntos de paso.
- Sin sombras: la profundidad es filete, contorno y relleno tonal.
- Monoespaciado solo para coordenadas, rumbos en grados y duraciones.
- Punteado = planificado, continuo = hecho.

## Colors

Una carta impresa en dos tintas sobre papel ligeramente azulado.

### Primary
- **Naranja señal** (signal): la línea de rumbo, los puntos de paso activos, la acción principal (botón "Trazar el rumbo", "Enviar mensaje", "Anotarme") y los marcadores de entrega (cuadrados de sprint con demo). También marca estados de interacción: anillo de foco, subrayado de links al pasar el cursor, cursor de texto.
- **Naranja profundo** (signal-hover): solo el hover del botón principal.
- **Naranja legible** (signal-text): cuando el naranja tiene que ser texto sobre papel (lectura de coordenadas del cartucho, etapa activa en Proceso, entregable resaltado). El naranja señal no alcanza contraste como texto sobre papel; este sí (4.9:1).

### Neutral
- **Tinta Altamar** (ink): títulos, texto, filetes fuertes, contorno de botones y campos, doble filete de la carta, escala de grados. Fondo de la sección invertida (Flety).
- **Tinta suave** (ink-soft): bajadas y párrafos secundarios.
- **Gris de sonda** (muted): rótulos, notas al pie, rumbos en grados, etapas no alcanzadas.
- **Papel de carta** (paper): fondo de página.
- **Bajío** (shoal) y **bajío profundo** (shoal-deep): rellenos de región (bajíos del hero, marcos de foto pendiente). Nunca para botones ni texto.
- **Hoja** (white): superficies de documento sobre el papel (acta de condiciones, vistas previas de entregables, campos de formulario).
- **Filete** (rule) y **filete fuerte** (rule-strong): cuadrícula de la carta, separadores de filas.
- **Peligro** (danger): borde y mensaje de campo inválido.

### Named Rules
**The Two-Ink Rule.** Azul marino para todo; naranja solo para el rumbo, los puntos de paso, la acción principal, los marcadores de entrega y los estados de foco/hover. Si un naranja no es ninguna de esas cosas, sobra.

**The Readable Signal Rule.** El naranja como texto sobre papel siempre es signal-text, nunca signal. Sobre fondo azul marino, signal sí se lee.

## Typography

**Display Font:** Bricolage Grotesque Variable (con Arial Narrow, system-ui)
**Body Font:** Public Sans Variable (con system-ui, Segoe UI)
**Label/Mono Font:** JetBrains Mono 500 (con ui-monospace, Consolas)

**Character:** Una grotesca con personalidad y tracking cerrado para los títulos de la carta, sobre una sans pública, sobria y muy legible para el texto. El monoespaciado es instrumental: aparece solo donde la carta mide.

### Hierarchy
- **Display** (800, clamp(2.9rem, 5.6vw, 5.4rem), 0.9): solo el título del hero ("Software a medida, con rumbo.").
- **Headline** (800, clamp(2.25rem, 5vw, 4rem), 1.05): títulos de sección. Las etapas de Proceso usan una variante más chica (clamp(2.2rem, 4vw, 3.4rem)).
- **Title** (700, 1.375rem, 1.05): títulos de ítem, títulos de documento en las vistas previas.
- **Body** (400, 1.0625rem, 1.6): texto corrido. Bajadas a 1.125–1.3rem en tinta suave, con medida de 36–52ch.
- **Label** (600, 0.8rem, 0.06em, mayúsculas): rótulos de texto ("Te llevás", roles, tipo de proyecto, datos de contacto, encabezados de tabla).
- **Coord** (JetBrains Mono 500, 0.75rem, 0.06em, mayúsculas, cifras tabulares): coordenadas, rumbos en grados, versiones, duraciones de etapa.

### Escala (tokens en `global.css`)
Ningún tamaño de texto se escribe a mano: todo sale de esta escala.
- `--fs-sm` 0.9375rem: notas, links del nav, datos secundarios.
- `--fs-md` 1.0625rem: texto corrido.
- `--fs-lg` 1.1875rem: bajadas y párrafos destacados.
- `--fs-lead` clamp(1.1875rem, 1.5vw, 1.3125rem): la bajada del hero.
- `--fs-xl` clamp(1.5rem, 2.4vw, 2rem): títulos de ítem y de tarjeta.
- `--fs-2xl` clamp(2.25rem, 4vw, 3.25rem): títulos de etapa y de contacto.
- `--fs-3xl` clamp(2.25rem, 5vw, 4rem): títulos de sección.

### Named Rules
**The Instrument Rule.** El monoespaciado es solo para lo que la carta mide: coordenadas, rumbos, duraciones, versiones y números de etapa. Un rótulo que no es una medida es `label`, en Public Sans.

**The Left-Weighted Rule.** Los títulos nunca se centran. Título a la izquierda, bajada desplazada a la derecha y alineada abajo.

## Layout

Contenedor de hasta 1560px con margen lateral fluido (gutter). Las secciones se separan con un ritmo fijo (section) y abren con una cabecera en grilla 7fr / 5fr: título a la izquierda, bajada a la derecha alineada a la base; bajo 860px se apila.

El hero rompe el contenedor: la carta ocupa todo el ancho con 12px de margen, altura de hasta 860px o la ventana menos la barra. Adentro, grilla 5fr / 6fr (copia y rumbo). Bajo 1080px se apila y se oculta la rosa de los vientos; bajo 640px el rumbo SVG se reemplaza por una lista vertical con línea punteada naranja.

Proceso usa una carta fija (sticky) a la izquierda (5fr) y las etapas a la derecha (7fr), cada etapa de ~78svh para que el scroll avance el rumbo. Bajo 900px la carta desaparece y una línea de rumbo vertical recorre las etapas.

Las listas son libros de bitácora: filete de tinta de 2px arriba, filas separadas por filetes finos, columnas en grilla.

## Elevation & Depth

Sistema plano. No hay sombras de elevación en ningún lado. La profundidad se arma con filetes (2px tinta para marcos, 1px para separadores), con el doble filete de la carta (borde 2px + contorno 1px hacia adentro) y con capas tonales: papel, bajío, hoja blanca. La única capa que "flota" es la barra de navegación, con papel al 94% y desenfoque. La carta del hero tiene un leve paralaje de capas (cuadrícula y bajíos) siguiendo al cursor, nunca sombra.

### Named Rules
**The Flat Sheet Rule.** Un entregable o un documento es una hoja blanca con contorno de tinta, apoyada sobre el papel. Sin sombra, sin elevación, sin redondeo.

## Shapes

Esquinas rectas en todo: botones, campos, hojas, cartuchos, marcos, chips de selección (radio 0). La única forma redonda es el punto de paso (círculos en el rumbo, marcadores numerados en Proceso móvil) y la rosa de los vientos; son geometría de la carta, no un estilo de componente. La salida del rumbo es un cuadrado, para distinguirla de los puntos de paso.

Firmas geométricas del mundo:
- **Neatline:** borde 2px de tinta más un contorno de 1px hacia adentro (offset −7 a −9px).
- **Escala de grados:** franja de 6px que alterna tinta y vacío cada 48px, arriba y abajo de la carta del hero y arriba del pie.
- **Rumbo:** línea naranja de 3px, punteada (≈10/8) cuando es plan, continua de 4px cuando está hecha.

### Named Rules
**The Square Corner Rule.** Radio cero en todo componente. Los círculos se reservan para puntos de paso.

**The Dash Means Plan Rule.** Punteado es planificado, continuo es hecho. No usar punteado como decoración en otro sentido (las isobatas del hero son punteados de tinta tenue, nunca naranja).

## Components

### Buttons
Rectos y firmes, con contorno de tinta.
- **Shape:** esquinas rectas (0), contorno de 2px en tinta.
- **Primary:** fondo naranja señal, texto tinta, 700, padding 0.95em 1.4em, flecha a la derecha que avanza 4px al pasar el cursor. Es la única acción naranja de cada bloque.
- **Hover / Focus / Active:** hover a naranja profundo (160ms ease-out); foco con anillo naranja de 2px separado 3px; al presionar baja 1px.
- **Outline:** contorno de tinta sin relleno, 700 a 0.92rem (botón "Contanos tu proyecto" de la barra); al pasar el cursor se llena de tinta con texto papel.
- **Sobre azul marino (Flety):** el contorno pasa a papel.

### Chips (selector de rol, Flety)
- **Style:** rectángulo recto, contorno de 1.5px en papel translúcido, texto 600.
- **State:** seleccionado se llena de papel con texto tinta; foco con anillo naranja.

### Cards / Containers
No hay tarjetas redondeadas. Los contenedores son hojas:
- **Corner Style:** recto (0).
- **Background:** hoja blanca sobre papel; bajío para marcos de foto.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1px de tinta (vistas previas) o 2px (acta de condiciones).
- **Internal Padding:** 28px en vistas previas; clamp(24px, 4vw, 56px) en el acta.

### Inputs / Fields
- **Style:** contorno de 2px en tinta, fondo blanco, radio 0, 400 a 1rem, rótulo arriba en 600.
- **Focus:** sin outline; anillo naranja de 3px al 45% alrededor del campo.
- **Hover:** el contorno pasa a tinta suave.
- **Error:** contorno y mensaje en rojo peligro, mensaje 600 a 0.875rem.
- **En línea:** campo + botón pegados sin hueco (el campo pierde su borde derecho); bajo 640px se apilan.

### Navigation
Barra fija arriba, papel al 94% con desenfoque y filete inferior fino. Logo a la izquierda, links a la derecha (500, 0.95rem) con subrayado naranja de 2px que crece de izquierda a derecha al pasar el cursor (220ms), y el botón outline al final. Debajo de la barra, una línea de progreso: punteada lo que falta leer, continua lo leído. La sección visible queda marcada en el menú. Bajo 960px: logo, botón "Escribinos" y menú hamburguesa que se despliega con clip-path.

### Marca
"G de recorrido": una G dibujada con un solo trazo recto (como un recorrido o un circuito) que termina en un punto de paso cuadrado naranja. Al lado, "gavia" en Bricolage 800, minúscula, tracking -0.045em. En el favicon, la G va en papel sobre un cuadrado de tinta. Al pasar el cursor por un link con la marca, el trazo se vuelve a dibujar (700ms). La marca sirve sola para productos futuros.

### Flety
Mapa real (MapLibre + OpenFreeMap) recoloreado a la tinta de la carta: ida en papel, vuelta punteada en naranja, un camión que la recorre. Encima, un teléfono con el prototipo de la app; es la única pieza con esquinas redondeadas y tamaños propios, porque representa otro producto.

### Carta de rumbo (signature)
La carta del hero: doble filete, escala de grados arriba y abajo, cuadrícula de meridianos cada 160px, bajíos en el ángulo inferior derecho, cartucho arriba a la derecha (papel, contorno 1px, dos líneas en coord; la lectura de coordenadas en naranja legible sigue al cursor). El rumbo sube de abajo a la izquierda hacia arriba a la derecha con cinco puntos de paso; cada punto es un link a su etapa y al pasar el cursor o enfocarlo se llena de naranja, muestra un halo y resalta su entregable. En la salida, una planilla con celdas tachadas y dos globos de mensaje dibujados en tinta (el Excel y WhatsApp de hoy); en la llegada, la pantalla de un sistema de pedidos con pestaña "Ejemplo" y datos inventados. Ambos van solo en tinta: el único naranja es el rumbo y el cuadrado de llegada. Debajo del formulario, tres razones con tilde en `label`: primera charla gratis, precio cerrado por etapa, el código es tuyo.

**Movimiento:** el estado final es el visible por defecto (sin JS y en capturas se ve el rumbo completo). El trazado de entrada es una mejora: se activa solo con JS y sin movimiento reducido, corre una vez (máscara que revela el rumbo en 1.8s, puntos que aparecen escalonados, aguja que se asienta) y la carta vuelve a su estado final.

### Rumbo de Proceso (signature)
Carta fija con el rumbo en bordadas y el rumbo en grados de cada tramo. El tramo hecho se dibuja continuo en proporción al scroll; el resto sigue punteado al 55%. La etapa actual muestra halo naranja y su título en naranja legible; las no alcanzadas quedan en gris de sonda. Cada etapa trae una hoja de ejemplo de su entregable, marcada "Ejemplo" con una pestaña de tinta en la esquina. Con movimiento reducido o sin JS se ve el rumbo completo y continuo.

## Do's and Don'ts

### Do:
- **Do** usar naranja señal solo para el rumbo, los puntos de paso, la acción principal, los marcadores de entrega y los estados de foco/hover.
- **Do** usar signal-text (#b4461a) cuando el naranja es texto sobre papel.
- **Do** dibujar lo planificado punteado y lo hecho continuo.
- **Do** mantener radio 0 en botones, campos, hojas y marcos.
- **Do** separar con filetes de tinta (2px marco, 1px fila) en lugar de sombras.
- **Do** usar JetBrains Mono solo para coordenadas, rumbos, duraciones y versiones; todo otro rótulo va en `label` (Public Sans 600, mayúsculas, 0.06em).
- **Do** dejar visible el estado final de toda animación por defecto y tratar el movimiento como mejora que respeta prefers-reduced-motion.
- **Do** componer asimétrico: título a la izquierda, bajada a la derecha.

### Don't:
- **Don't** poner sombras de elevación en tarjetas, botones ni hojas.
- **Don't** redondear esquinas de componentes; los círculos son solo puntos de paso.
- **Don't** usar naranja como fondo de sección, relleno decorativo o color de títulos en reposo.
- **Don't** usar signal (#f06a2a) como color de texto sobre papel.
- **Don't** usar monoespaciado para rótulos que no son medidas.
- **Don't** centrar títulos ni bajadas de sección.
- **Don't** ocultar contenido detrás de una animación de entrada.
