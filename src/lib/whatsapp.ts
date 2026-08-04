type WhatsAppLinkOptions = {
  phone: string;
  message: string;
};

export function createWhatsAppLink({ phone, message }: WhatsAppLinkOptions) {
  const normalizedPhone = phone.replace(/\D/g, "");
  const baseUrl = normalizedPhone
    ? `https://wa.me/${normalizedPhone}`
    : "https://wa.me/";

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
