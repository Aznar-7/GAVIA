---
name: Gavia
description: Estudio de software de Córdoba. El sitio es el de una empresa tranquila y seria, con la cercanía de un equipo chico.
colors:
  ink: "#12243a"
  ink-soft: "#2b3d54"
  muted: "#536579"
  paper: "#f1f4f7"
  white: "#ffffff"
  line: "#dce3ea"
  line-strong: "#b9c5d1"
  signal: "#f06a2a"
  signal-hover: "#f4824c"
  signal-text: "#b4461a"
  success: "#1e7a4f"
  danger: "#b3261e"
typography:
  hero:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree Variable, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 48px)"
  section: "clamp(64px, 9vw, 120px)"
  max: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.8em 1.4em"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-secondary:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.8em 1.4em"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75em 1em"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "28px"
---

# Design System: Gavia

## Overview

**Creative North Star: "Empresa tranquila"**

Gavia le vende software a dueños de pymes que hoy trabajan con Excel y WhatsApp. El sitio tiene que leerse como el de una empresa seria (Globant, Mercado Libre) y sentirse cercano: qué hacemos, cómo trabajamos, qué firmamos, qué construimos y quiénes somos, sin adornos que compitan con eso.

La seriedad sale de la calma: blanco y gris azulado alternados por sección, una sola familia tipográfica, bordes suaves, una sombra discreta y software real en las imágenes. La cercanía sale del texto (voseo, nombres propios, "te responde Vicente, Agustín o Benjamín") y no de la decoración.

**Dos gestos propios y un pico:**
- **"Elegí tu problema"** (sección ¿Te suena alguna?): el visitante toca lo que le pasa hoy, el problema se tacha en naranja y al lado aparece el sistema que lo resuelve con una pantalla de ejemplo. "Lo mío es así" precarga el contacto.
- **Cómo trabajamos, el pico**, en azul marino de borde a borde: en pantallas grandes queda fijo mientras bajás, la línea de rumbo naranja avanza etapa por etapa y a la derecha cambia el documento que te llevás.
- **Hero en capas:** tres capturas reales de UTN Hub que se salen del borde derecho y se separan apenas con el cursor y el scroll.

La metáfora náutica vive en el nombre, el logo, la frase "Software con rumbo" y la línea de rumbo; no en la decoración.

**Movimiento:** pantalla de la marca una vez por sesión; títulos que suben línea por línea; apariciones suaves al entrar en pantalla (`data-reveal`); botón principal magnético; brillo que sigue al cursor en tarjetas (`.spot`); todo lo tocable se hunde apenas al tocarlo. Todo visible sin JS y quieto con "reducir movimiento".

**Key Characteristics:**
- Secciones blancas y gris azulado (#f1f4f7) alternadas: el ritmo lo dan los fondos, no los filetes.
- Naranja solo para la acción principal y la línea de rumbo.
- Figtree para todo, en minúscula normal: sin mayúsculas espaciadas, sin monoespaciado, sin textos unidos con " · ".
- Esquinas suaves (8px en controles, 12px en tarjetas e imágenes) y una sola sombra.
- Imágenes: capturas reales de software nuestro, en un marco simple. Nada de ilustraciones de producto inventadas.

## Colors

### Primary
- **Naranja señal** (signal): botón principal ("Contanos tu proyecto", "Enviar mensaje") y la línea de rumbo del proceso. Texto azul marino encima (5.4:1).
- **Naranja claro** (signal-hover): solo el hover del botón principal.
- **Naranja legible** (signal-text): cuando el naranja tiene que ser texto sobre blanco.

### Neutral
- **Azul marino** (ink): títulos y texto. Fondo del pie y de Flety.
- **Azul suave** (ink-soft): bajadas y párrafos secundarios.
- **Gris** (muted): rótulos, notas, datos secundarios.
- **Gris azulado** (paper): fondo de las secciones alternas y del hero.
- **Blanco** (white): fondo por defecto, tarjetas, campos.
- **Línea** (line) y **línea fuerte** (line-strong): divisores y bordes de tarjeta; bordes de campos y del botón secundario.
- **Éxito** (success): tildes de condiciones y el punto de "En uso".
- **Peligro** (danger): campo inválido.

### Named Rules
**The One Orange Rule.** En cada pantalla hay una sola acción naranja. El naranja nunca es fondo de sección ni color de títulos.

## Typography

**Familia:** Figtree Variable para títulos y texto. Cálida y clara, de lectura corporativa.

- **Hero** (700, clamp(2.5rem, 5vw, 4.25rem), 1.05): solo el H1.
- **Headline** (700, clamp(2rem, 3.6vw, 3rem), 1.1): títulos de sección, siempre con punto final y alineados a la izquierda.
- **Title** (700, 1.1875rem): títulos de ítem (servicios, etapas, compromisos, integrantes).
- **Body** (400, 1.0625rem, 1.6): texto corrido; bajadas a 1.1875rem en azul suave, con medida de hasta 60ch.
- **Label** (600, 0.9375rem, gris): rótulos cortos ("Te llevás", "Tu parte", "Mail").

### Escala (tokens en `global.css`)
`--fs-xs` 0.8125 · `--fs-sm` 0.9375 · `--fs-md` 1.0625 · `--fs-lg` 1.1875 · `--fs-lead` · `--fs-xl` · `--fs-2xl` · `--fs-3xl` · `--fs-hero`. Ningún tamaño de texto se escribe a mano.

### Named Rules
**The Sentence Case Rule.** Nada en mayúsculas espaciadas. Los rótulos van en minúscula normal, en gris y 600.

## Layout

Contenedor de hasta 1280px con margen lateral fluido. Cada sección abre con título y bajada a la izquierda (máximo 760px de ancho) y después el contenido. Las secciones alternan fondo blanco y gris azulado:

Hero (gris) → Qué hacemos (blanco) → ¿Te suena alguna? (gris) → Cómo trabajamos (azul marino, fijo) → Lo que firmamos (gris) → Lo que ya construimos (blanco) → Equipo (gris) → Preguntas (blanco) → Contacto (azul marino) → pie azul marino.

El texto vive en el contenedor (hasta 1360px); las imágenes del hero y las secciones azul marino van de borde a borde.

- **Hero:** texto a la izquierda (5fr) y captura real de UTN Manager en un marco de navegador a la derecha (6fr). Bajo 960px se apila.
- **Qué hacemos:** cuatro servicios en fila con un filete de 2px arriba de cada uno; 2 columnas en tablet, 1 en celular. No son tarjetas.
- **Cómo trabajamos:** cinco columnas que comparten filas (subgrid), unidas por la línea de rumbo. Abajo, dos documentos de ejemplo; en el celular van plegados.
- **Equipo:** tres tarjetas con iniciales (después, fotos), formación, una línea y links.

## Elevation & Depth

Una sola sombra (`--shadow`): suave y con desplazamiento. Se usa en las capturas, la tarjeta de condiciones, el caso UTN Hub y la tarjeta de contacto. Todo lo demás es plano, con borde de 1px en `line`.

## Shapes

- **Radio:** 8px en botones, campos y capturas dentro de tarjetas; 12px en tarjetas y en el marco del hero; 999px solo en pastillas de estado.
- **Línea de rumbo:** 3px naranja, continua, con números en círculos de borde naranja.

## Components

### Buttons
- **Primary:** fondo naranja, texto azul marino 700, radio 8px, alto mínimo 48px. Hover: naranja más claro. Sin flechas.
- **Secondary:** fondo transparente, borde de 1px `line-strong`, texto azul marino. Hover: fondo blanco y borde azul marino.
- **Focus:** anillo naranja de 2px separado 3px.

### Pills
Estado corto ("En uso", "En desarrollo", "Ejemplo"): fondo gris azulado, 600 a 0.8125rem, radio 999px. "En uso" lleva un punto verde.

### Cards
Fondo blanco, borde de 1px `line`, radio 12px, padding 28px. Sombra solo en las tarjetas que tienen que destacar (condiciones, caso, contacto).

### Inputs
Borde de 1px `line-strong`, radio 8px, alto mínimo 48px. Foco: borde azul marino y anillo naranja suave. Error: borde y mensaje en rojo.

### Navigation
Barra fija blanca con filete inferior al bajar. Logo a la izquierda; Servicios, Cómo trabajamos, Proyectos, Equipo y Preguntas; botón principal "Contanos tu proyecto". En el celular: logo y menú; la acción va en la barra fija de abajo.

### Marca
"G de recorrido" con el punto de paso cuadrado naranja y la palabra "gavia" en minúscula.

## Do's and Don'ts

### Do:
- **Do** mostrar software real (capturas) y personas reales (nombres; fotos cuando estén).
- **Do** alternar fondos blanco y gris azulado para separar secciones.
- **Do** usar una sola acción naranja por pantalla.
- **Do** escribir rótulos en minúscula normal.
- **Do** dejar la línea de rumbo como el único gesto de marca.

### Don't:
- **Don't** volver a la carta náutica como decoración: marcos dobles, escalas de grados, cuadrículas, brújulas, sellos, coordenadas.
- **Don't** usar mayúsculas espaciadas, monoespaciado ni textos unidos con " · ".
- **Don't** poner flechas en los botones ni efectos que sigan al cursor.
- **Don't** sumar animaciones que no respondan a algo: cada movimiento acompaña el scroll, el cursor o un toque.
- **Don't** inventar clientes, testimonios, logos ni números.
