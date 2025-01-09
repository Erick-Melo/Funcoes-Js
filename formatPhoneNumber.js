export const formatPhoneNumber = (input) => {
  if (input.length === 0) {
    return "";
  } else if (input.length <= 2) {
    return `(${input}`;
  } else if (input.length <= 6) {
    return `(${input.slice(0, 2)}) ${input.slice(2)}`;
  } else if (input.length <= 10) {
    return `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6)}`;
  } else {
    return `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
  }
};
