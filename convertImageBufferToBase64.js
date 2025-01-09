import { Buffer } from "buffer";
export const convertImageBufferToBase64 = (image) => {
  const buffer = Buffer.from(image.data);

  const base64 = buffer
    .toString("base64")
    .replace("dataimage", "data:image")
    .replace("base64", ";base64,");
  return base64;
};
