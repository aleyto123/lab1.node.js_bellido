const readline = require("readline");

// Estructura de datos: Array para almacenar las tareas
const tareas = [
  { id: 1, titulo: "Estudiar Node.js", descripcion: "Repasar guia de lab", categoria: "Estudio", estado: "pendiente" },
  { id: 2, titulo: "Comprar insumos", descripcion: "Cuadernos y lapiceros", categoria: "Personal", estado: "completada" },
  { id: 3, titulo: "Avanzar informe", descripcion: "Redactar avance del proyecto", categoria: "Trabajo", estado: "pendiente" }
];

// Configuración de la interfaz para la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Función para agregar una tarea
function agregarTarea(titulo, descripcion, categoria) {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: titulo,
    descripcion: descripcion,
    categoria: categoria,
    estado: "pendiente"
  };
  tareas.push(nuevaTarea);
  console.log(`\n✔ Tarea "${titulo}" agregada con éxito.`);
}

// 2. Función para listar todas las tareas
function listarTareas() {
  console.log("\n=== LISTA DE TAREAS ===");
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }
  tareas.forEach(t => {
    const check = t.estado === "completada" ? "[X]" : "[ ]";
    console.log(`${check} ID: ${t.id} | [${t.categoria}] ${t.titulo} - ${t.descripcion} (${t.estado})`);
  });
}

// 3. Función para marcar una tarea como completada
function completarTarea(id) {
  const tarea = tareas.find(t => t.id === Number(id));
  if (tarea) {
    tarea.estado = "completada";
    console.log(`\n✔ Tarea ID ${id} marcada como completada.`);
  } else {
    console.log(`\n✖ Tarea con ID ${id} no encontrada.`);
  }
}

// 4. Función para listar tareas agrupadas por categoría
function listarPorCategoria(categoria) {
  console.log(`\n=== TAREAS DE LA CATEGORÍA: ${categoria.toUpperCase()} ===`);
  const filtradas = tareas.filter(t => t.categoria.toLowerCase() === categoria.toLowerCase());
  if (filtradas.length > 0) {
    filtradas.forEach(t => console.log(`- ${t.titulo} (${t.estado})`));
  } else {
    console.log("No hay tareas en esta categoría.");
  }
}

// --- MENÚ INTERACTIVO ---
function mostrarMenu() {
  console.log("\n=========================");
  console.log("    MENÚ DE OPCIONES    ");
  console.log("=========================");
  console.log("1. Ver todas las tareas");
  console.log("2. Agregar una nueva tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Filtrar tareas por categoría");
  console.log("5. Salir");

  rl.question("\nSelecciona una opción (1-5): ", (opcion) => {
    switch (opcion.trim()) {
      case "1":
        listarTareas();
        mostrarMenu();
        break;

      case "2":
        rl.question("Título: ", (titulo) => {
          rl.question("Descripción: ", (descripcion) => {
            rl.question("Categoría (Estudio, Trabajo, Personal): ", (categoria) => {
              agregarTarea(titulo, descripcion, categoria);
              mostrarMenu();
            });
          });
        });
        break;

      case "3":
        rl.question("Ingresa el ID de la tarea a completar: ", (id) => {
          completarTarea(id);
          mostrarMenu();
        });
        break;

      case "4":
        rl.question("Ingresa la categoría a buscar: ", (categoria) => {
          listarPorCategoria(categoria);
          mostrarMenu();
        });
        break;

      case "5":
        console.log("\n¡Hasta luego!");
        rl.close();
        break;

      default:
        console.log("\nOpción no válida, intenta de nuevo.");
        mostrarMenu();
        break;
    }
  });
}

// Iniciar la aplicación
mostrarMenu();