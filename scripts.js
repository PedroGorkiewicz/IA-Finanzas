// scripts.js

document.querySelector('.btn-info').addEventListener('click', () => {
    alert('Pronto habrá más información disponible.');
});
// articulo.js

console.log("Artículo cargado correctamente");

// Aquí podés agregar futuras interacciones para el artículo,
// como botones de compartir, comentarios, etc.

document.addEventListener('DOMContentLoaded', () => {
  const miembros = document.querySelectorAll('.miembro');
  miembros.forEach(miembro => {
    miembro.addEventListener('click', () => {
      alert(`Has seleccionado a ${miembro.querySelector('h3').textContent}`);
    });
  });
});

