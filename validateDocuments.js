export function validateCNPJ(cnpj) {
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size += 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(1));
}
export function validateCPF(cpf) {
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let fdigit = (sum * 10) % 11;
  if (fdigit === 10 || fdigit === 11) fdigit = 0;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let sdigit = (sum * 10) % 11;
  if (sdigit === 10 || sdigit === 11) sdigit = 0;

  return (
    fdigit === parseInt(cpf.charAt(9)) && sdigit === parseInt(cpf.charAt(10))
  );
}
export function validatePhoneNumber(phone) {
  const cleanedPhone = phone.replace(/\D/g, "");

  if (cleanedPhone.length === 10) {
    return cleanedPhone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (cleanedPhone.length === 11) {
    return cleanedPhone.replace(
      /(\d{2})(\d{1})(\d{4})(\d{4})/,
      "($1) $2 $3-$4"
    );
  }

  return "";
}
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
