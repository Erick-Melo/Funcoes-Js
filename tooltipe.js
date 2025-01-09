export const showTootip = (e, index, id) => {

  const tooltip = document.querySelectorAll(`#tooltipe-${id}`);

  e.target.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const tooltipWidth = tooltip.clientWidth;
    const tooltipHeight = tooltip.clientHeight;

    const offsetX = 10; // Margem horizontal entre o mouse e o tooltip
    const offsetY = 10; // Margem vertical entre o mouse e o tooltip

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    tooltip[index].style.left = mouseX + offsetX + scrollX - 50 + "px";
    tooltip[index].style.top = mouseY + offsetY + scrollY + 12 + "px";
  });

  e.target.addEventListener("mouseover", () => {
    tooltip[index].style.display = "flex";
  });

  e.target.addEventListener("mouseleave", () => {
    tooltip[index].style.display = "none";
  });
};
