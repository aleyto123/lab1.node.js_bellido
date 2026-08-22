// Estructura de datos: Array para almacenar las tareas
const tareas = [
  { id: 1, titulo: "Estudiar Node.js", descripcion: "Repasar guia de lab", categoria: "Estudio", estado: "pendiente" },
  { id: 2, titulo: "Comprar insumos", descripcion: "Cuadernos y lapiceros", categoria: "Personal", estado: "completada" },
  { id: 3, titulo: "Avanzar informe", descripcion: "Redactar avance del proyecto", categoria: "Trabajo", estado: "pendiente" }
];

// 1. Función para agregar una tarea[cite: 1]
function agregarTarea(titulo, descripcion, categoria) {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: titulo,
    descripcion: descripcion,
    categoria: categoria, // 3 categorías mínimo: "Estudio", "Trabajo", "Personal"[cite: 1]
    estado: "pendiente"
  };
  tareas.push(nuevaTarea);
  console.log(`\n✔ Tarea "${titulo}" agregada con éxito.`);
}

// 2. Función para listar todas las tareas (pendientes y completadas)[cite: 1]
function listarTareas() {
  console.log("\n=== LISTA DE TAREAS ===");
  tareas.forEach(t => {
    const check = t.estado === "completada" ? "[X]" : "[ ]";
    console.log(`${check} ID: ${t.id} | [${t.categoria}] ${t.titulo} - ${t.descripcion} (${t.estado})`);
  });
}

// 3. Función para marcar una tarea como completada[cite: 1]
function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.estado = "completada";
    console.log(`\n✔ Tarea ID ${id} marcada como completada.`);
  } else {
    console.log(`\n✖ Tarea con ID ${id} no encontrada.`);
  }
}

// 4. Función para listar tareas agrupadas por categoría[cite: 1]
function listarPorCategoria(categoria) {
  console.log(`\n=== TAREAS DE LA CATEGORÍA: ${categoria.toUpperCase()} ===`);
  const filtradas = tareas.filter(t => t.categoria.toLowerCase() === categoria.toLowerCase());
  if (filtradas.length > 0) {
    filtradas.forEach(t => console.log(`- ${t.titulo} (${t.estado})`));
  } else {
    console.log("No hay tareas en esta categoría.");
  }
}

// --- PRUEBAS DE EJECUCIÓN ---
listarTareas();
agregarTarea("Repasar examen", "Estudiar para el viernes", "Estudio");
completarTarea(1);
listarTareas();
listarPorCategoria("Trabajo");