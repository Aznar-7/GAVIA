// Datos de contacto en un solo lugar.
export const CONTACT_EMAIL = "equipo@gaviasoftware.com";

// Número de WhatsApp en formato internacional sin "+" (ej. 5493511234567). Vacío = no se muestra.
export const WHATSAPP = "";
export const whatsappUrl = (text = "Hola, quiero contarles un proyecto.") =>
  WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}` : "";

// Vercel Web Analytics (visitas, sin cookies). Activarlo primero en el panel de Vercel
// (proyecto → Analytics → Enable) y después poner true; si no, el script da 404.
export const ANALYTICS = false;

// El equipo: lo usan la sección Equipo, Contacto y los datos para Google.
export const TEAM: { nombre: string; formacion: string; linea: string; links: { label: string; href: string }[] }[] = [
  {
    nombre: "Vicente Aznar",
    formacion: "Ingeniería en Sistemas",
    linea: "Dos años desarrollando sistemas completos, de la base de datos a la pantalla.",
    links: [
      { label: "Portfolio", href: "https://vicenteaznar.dev" },
      { label: "GitHub", href: "https://github.com/Aznar-7" },
    ],
  },
  {
    nombre: "Agustín García",
    formacion: "Ingeniería en Sistemas",
    linea: "Analiza cómo trabaja tu empresa y lo baja a requerimientos claros.",
    links: [
      { label: "Portfolio", href: "https://juan-agustin-garcia.vercel.app/" },
      { label: "GitHub", href: "https://github.com/agusgarcia74" },
    ],
  },
  {
    nombre: "Benjamín Viberti",
    formacion: "Ingeniería en Computación",
    linea: "Del hardware al software: sabe cómo funciona la máquina por dentro.",
    links: [
      { label: "GitHub", href: "https://github.com/benjaviberti" },
    ],
  },
];


// Perfiles de Gavia en redes. Vacío = no se muestra. Aparecen en el pie y en los datos para Google.
export const SOCIAL: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gavia-software" },
  { label: "Instagram", href: "https://www.instagram.com/gaviasoftware" },
  { label: "GitHub", href: "" },
].filter((s) => s.href);

// Formulario de Formspree que recibe los envíos (contacto y lista de Flety) y los reenvía a
// equipo@. Las respuestas se ven en formspree.io. Vacío = no hay envío real.
export const FORM_ENDPOINT = "https://formspree.io/f/xgaozdej";

export type SendResult = "sent" | "demo" | "mailto";

/**
 * Envía un formulario sin salir de la página. Los formularios incluyen un campo trampa
 * "_gotcha" que solo completan los bots.
 * - Con FORM_ENDPOINT: POST real; tira error si el servidor no lo acepta.
 * - Sin endpoint, en desarrollo: simula el envío para poder ver la animación ("demo").
 * - Sin endpoint, en producción: abre el mail armado como último recurso ("mailto").
 */
export async function sendForm(subject: string, fields: Record<string, string>): Promise<SendResult> {
  // Trampa para bots: el campo "_gotcha" está oculto para las personas. Si viene completo, se
  // simula el envío y no se manda nada.
  const { _gotcha, ...data } = fields;
  if (_gotcha) return "sent";
  fields = data;
  if (FORM_ENDPOINT) {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...fields }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return "sent";
  }
  if (import.meta.env.DEV) {
    await new Promise((r) => setTimeout(r, 1400));
    return "demo";
  }
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mailto";
}
