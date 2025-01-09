export const formatValueToRs = (numero) => {
  return numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
