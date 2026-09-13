export const contact = {
  email: '[SEU EMAIL]',
  whatsapp: '[SEU LINK DE CONTATO]',
  linkedin: '[SEU LINKEDIN]',
  github: '[SEU GITHUB]'
}

export function getContactHref() {
  if (contact.whatsapp && !contact.whatsapp.startsWith('[')) {
    return contact.whatsapp
  }
  return '#contato'
}
