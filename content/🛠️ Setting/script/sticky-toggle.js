document.getElementById("toggleContainer").addEventListener("click", () => {
const container = document.getElementById("sticky-container");
container.style.display = container.style.display === "none" ? "block" : "none";
});