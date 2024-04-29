export const removeUfFromLocation = (location: string) =>
  location.replace(/, [A-Z]{2}/, '');

export const normalizeLocation = (location: string) => {
  const locationValue = removeUfFromLocation(location);

  return transformToKebabCase(locationValue);
};

export const transformToKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

export const transformToPascalCase = (str: string) =>
  str.replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toUpperCase() + g2.toLowerCase());

export const transformToCamelCase = (str: string) =>
  str.replace(/(\w)(\w*)/g, (_, g1, g2) => g1.toLowerCase() + g2.toLowerCase());
