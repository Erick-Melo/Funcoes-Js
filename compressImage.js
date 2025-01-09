export const getCompressImage = (img) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const MAX_WIDTH = 800;
  const MAX_HEIGHT = 600;
  let width = img.width;
  let height = img.height;

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
  }

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL("image/jpeg", 0.7);
};
