/**
 * WhatsApp integration utility for BK-DIGITAL
 * WhatsApp Click-to-Chat requires international format digits only without '+', spaces, or symbols:
 * E.g., https://wa.me/917217876220
 */

export const DEFAULT_WHATSAPP_NUMBER = '917217876220';
export const DEFAULT_WHATSAPP_DISPLAY = '+91 72178 76220';

/**
 * Sanitizes any phone input into strict WhatsApp international digit format.
 * Strips all '+' symbols, spaces, dashes, slashes, and parentheses.
 * Auto-prefixes India country code '91' if 10 digits are provided.
 */
export function sanitizeWhatsAppNumber(phone?: string | null): string {
  if (!phone) return DEFAULT_WHATSAPP_NUMBER;

  // Remove all non-digit characters
  const digitsOnly = phone.toString().replace(/\D/g, '');

  if (!digitsOnly) return DEFAULT_WHATSAPP_NUMBER;

  // If a 10-digit Indian mobile number is passed without country code (e.g. 7217876220)
  if (digitsOnly.length === 10) {
    return `91${digitsOnly}`;
  }

  // If 11 digits starting with 0 (e.g. 07217876220)
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return `91${digitsOnly.slice(1)}`;
  }

  return digitsOnly;
}

/**
 * Constructs a valid WhatsApp Web / App redirect URL with encoded message parameter.
 */
export function buildWhatsAppUrl(phone?: string | null, message?: string | null): string {
  const cleanPhone = sanitizeWhatsAppNumber(phone);
  if (!message || !message.trim()) {
    return `https://wa.me/${cleanPhone}`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Directly opens WhatsApp chat in a new browser tab.
 */
export function openWhatsApp(phone?: string | null, message?: string | null): void {
  const url = buildWhatsAppUrl(phone, message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
