export function formatCep(cep: string) {
  return cep.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2');
}

export const phoneMask = (value: string) => {
  if (!value) return '';
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
};

export const phoneRegex = new RegExp(/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/);

export const validatePhoneNumber = (numero: string): boolean => {
  const regexPart1 = /^(?:\+?55\s?)?(?:\(?[1-9]\d\)?\s?)?/;
  const regexPart2 = /(?:9\d{4}-?\d{4}|[2-9]\d{3}-?\d{4})$/;
  const regex = new RegExp(regexPart1.source + regexPart2.source);

  if (!regex.test(numero)) {
    return false;
  }

  const numeros = numero.replace(/^55\s?(\d{2})\s?/, '');

  const digitosUnicos = new Set(numeros.split(''));

  return digitosUnicos.size > 1;
};
