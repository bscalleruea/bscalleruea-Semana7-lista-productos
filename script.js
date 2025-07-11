let productos = [
  { nombre: "Camisa de algodón", precio: 25, descripcion: "Cómoda y fresca" },
  { nombre: "Pantalón jeans", precio: 40, descripcion: "Estilo casual" },
  { nombre: "Zapatillas urbanas", precio: 60, descripcion: "Modernas y resistentes" },
  { nombre: "Gorra deportiva", precio: 15, descripcion: "Ideal para el sol" },
  { nombre: "Chaqueta impermeable", precio: 55, descripcion: "Perfecta para lluvia" },
  { nombre: "Mochila escolar", precio: 30, descripcion: "Espaciosa y cómoda" }
];

function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.className = "producto-item";
    li.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p>${producto.descripcion}</p>
    `;
    lista.appendChild(li);
  });
}

function agregarProducto() {
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const descripcion = document.getElementById("descripcion").value.trim();

  if (nombre && !isNaN(precio) && descripcion) {
    productos.push({ nombre, precio, descripcion });
    renderizarProductos();

    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
  } else {
    alert("Completa todos los campos correctamente.");
  }
}

window.onload = renderizarProductos;
