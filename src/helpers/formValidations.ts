export const NameValidation = (name: string) => {
  if (name.length >= 4) {
    return true;
  }
  return false;
};