// carrito.js
const CART_KEY = 'carrito';

function getCarrito() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}

function setCarrito(carrito) {
  localStorage.setItem(CART_KEY, JSON.stringify(carrito));
  actualizarBadge();
}

function addAlCarrito(id, cantidad = 1) {
  const producto = PRODUCTOS.find(p => p.id === id);
  if (!producto || producto.stock === 0) return false;

  const carrito = getCarrito();
  const existente = carrito.find(item => item.id === id);

  if (existente) {
    if (existente.cantidad + cantidad > producto.stock) return false;
    existente.cantidad += cantidad;
  } else {
    carrito.push({ id, cantidad });
  }
  setCarrito(carrito);
  return true;
}

function quitarDelCarrito(id) {
  setCarrito(getCarrito().filter(item => item.id !== id));
}

function cambiarCantidad(id, cantidad) {
  const carrito = getCarrito();
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  const producto = PRODUCTOS.find(p => p.id === id);
  if (cantidad <= 0) return quitarDelCarrito(id);
  if (cantidad > producto.stock) cantidad = producto.stock;
  item.cantidad = cantidad;
  setCarrito(carrito);
}

function totalItems() {
  return getCarrito().reduce((sum, item) => sum + item.cantidad, 0);
}

function actualizarBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const total = totalItems();
  badge.textContent = total;
  badge.style.display = total > 0 ? 'inline-flex' : 'none';
}

// Función de formato de precio reutilizable
function formatPrecio(n) {
  return 'C$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document.addEventListener('DOMContentLoaded', actualizarBadge);