// Datos de contacto en un solo lugar. El mail todavía no existe: crearlo antes de publicar.
export const CONTACT_EMAIL = "hola@gaviasoftware.com";

// Número de WhatsApp en formato internacional sin "+" (ej. 5493511234567). Vacío = no se muestra.
export const WHATSAPP = "";
export const whatsappUrl = (text = "Hola, quiero contarles un proyecto.") =>
  WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}` : "";

// Endpoint que recibe los formularios y los reenvía por mail (por ejemplo, un form de
// Formspree: "https://formspree.io/f/xxxxxxx"). Vacío = todavía no hay envío real.
export const FORM_ENDPOINT = "";

export type SendResult = "sent" | "demo" | "mailto";

/**
 * Envía un formulario sin salir de la página.
 * - Con FORM_ENDPOINT: POST real; tira error si el servidor no lo acepta.
 * - Sin endpoint, en desarrollo: simula el envío para poder ver la animación ("demo").
 * - Sin endpoint, en producción: abre el mail armado como último recurso ("mailto").
 */
export async function sendForm(subject: string, fields: Record<string, string>): Promise<SendResult> {
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
