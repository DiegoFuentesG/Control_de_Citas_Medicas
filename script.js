// Arreglo para almacenar citas (simulación de base de datos)
let citas = [];

// Obtener elementos del formulario y la lista de pacientes
const citaForm = document.getElementById("cita-form");
const nombreInput = document.getElementById("nombre");
const fechaInput = document.getElementById("fecha");
const tipoInput = document.getElementById("tipo");
const listaPacientes = document.getElementById("lista-pacientes");

// Función para agregar una cita
function agregarCita(event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const fecha = fechaInput.value;
    const tipo = tipoInput.value;

    if (nombre.trim() === "" || fecha.trim() === "" || tipo === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const cita = { nombre, fecha, tipo };
    citas.push(cita);
    mostrarCitas();
    citaForm.reset();

    // Mostrar notificación detallada
    mostrarNotificacion(cita);
}

// Función para mostrar las citas en la lista
function mostrarCitas() {
    listaPacientes.innerHTML = "";
    citas.forEach((cita, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>Paciente:</strong> ${cita.nombre}, 
            <strong>Fecha:</strong> ${cita.fecha},
            <strong>Tipo:</strong> ${cita.tipo}
            <button onclick="editarCita(${index})">Editar</button>
            <button onclick="eliminarCita(${index})">Eliminar</button>
        `;
        listaPacientes.appendChild(li);
    });
}

// Función para editar una cita
function editarCita(index) {
    const nuevaFecha = prompt("Ingrese la nueva fecha de la cita:");
    if (nuevaFecha === null || nuevaFecha === "") {
        return;
    }
    citas[index].fecha = nuevaFecha;
    mostrarCitas();
}

// Función para eliminar una cita
function eliminarCita(index) {
    if (confirm("¿Estás seguro de eliminar esta cita?")) {
        citas.splice(index, 1);
        mostrarCitas();
    }
}

// Función para mostrar notificación detallada
function mostrarNotificacion(cita) {
    alert(`Cita agendada para ${cita.nombre} el ${cita.fecha} (${cita.tipo}).`);
}

// Manejador de eventos para el formulario
citaForm.addEventListener("submit", agregarCita);

// Mostrar citas al cargar la página
mostrarCitas();
