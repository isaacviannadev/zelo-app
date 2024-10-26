/**
 * Formats a given phone number string into a standardized format.
 *
 * If the phone number starts with the Brazilian country code (+55),
 * it removes the country code and formats the remaining number.
 *
 * The formatted number will be in the format: (XX) XXXXX-XXXX or (XX) XXXX-XXXX.
 *
 * @param value - The phone number string to be formatted.
 * @returns The formatted phone number string or an empty string if the input is falsy.
 */
export const phoneNumberMask = (value: string) => {
  if (!value) return '';

  const isBrazilian = value.startsWith('+55');
  let numbers = isBrazilian
    ? value.slice(2).replace(/\D/g, '')
    : value.replace(/\D/g, '');

  numbers = numbers.replace(/(\d{2})(\d)/, '($1) $2');
  numbers = numbers.replace(/(\d)(\d{4})$/, '$1-$2');

  return numbers;
};

const dddValidos = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, // Sudeste
  31, 32, 33, 34, 35, 37, 38,                           // Minas Gerais
  41, 42, 43, 44, 45, 46,                               // Paraná
  47, 48, 49,                                           // Santa Catarina
  51, 53, 54, 55,                                       // Rio Grande do Sul
  61, 62, 63, 64, 65, 66, 67,                           // Centro-Oeste
  68, 69,                                               // Norte (Acre, Rondônia)
  71, 73, 74, 75, 77, 79,                               // Nordeste
  81, 82, 83, 84, 85, 86, 87, 88, 89,                   // Nordeste
  91, 92, 93, 94, 95, 96, 97, 98, 99                    // Norte
];

export const validarTelefoneBR =(numero: string): boolean => {
  const telefoneLimpo = numero.replace(/\D/g, '');

  if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
    return false;
  }

  const ddd = parseInt(telefoneLimpo.slice(0, 2), 10);

  if (!dddValidos.includes(ddd)) {
    return false;
  }

  if (telefoneLimpo.length === 11 && telefoneLimpo[2] !== '9') {
    return false;
  }

  if (telefoneLimpo.length === 10 && (telefoneLimpo[2] === '0' || telefoneLimpo[2] === '1')) {
    return false;
  }

  return true;
}