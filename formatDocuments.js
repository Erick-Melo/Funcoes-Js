export function formatCPF(valor) {
  return valor
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatCNPJ(valor) {
  return valor
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{4})/, "$1/$2")
    .replace(/(\d{4})(\d{2})$/, "$1-$2");
}
export function formatPhoneNumber(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");
}
