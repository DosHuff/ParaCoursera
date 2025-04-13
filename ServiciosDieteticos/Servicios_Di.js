let autorizacion = "Miembro";
let accessLevel;

if (autorizacion === "Empleado") {
    accessLevel = "Está autorizado a tener acceso a los Servicios Dietéticos.";
} else if (autorizacion === "Miembro") {
    accessLevel = "Está autorizado a tener acceso a los Servicios Dietéticos y auna interaccción uno a uno con un dietista.";
} else if (autorizacion === "Suscriptor") {
    accessLevel = "Está autorizado a tener acceso parcial para facilitar los Servicios Dietéticos únicamente.";
} else {
    accessLevel = "Necesita inscribirse o al menos suscribirse primero para poder acceder a esta instalación.";
}

console.log("Nivel de acceso:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (autorizacion === "Empleado") {
        userMessage = "¡Bienvenido, Empleado!";
    } else if (autorizacion === "Miembro") {
        userMessage = "¡Bienvenido, Miembro!";
    } else {
        userMessage = "¡Bienvenido, Suscriptor!";
    }
} else {
    userMessage = "Necesita inscribirse o al menos suscribirse primero para poder acceder a esta instalación.";
}

console.log("Mensaje al usuario:", userMessage);

let userType = "Suscriptor";
let userCategory;

switch (userType) {
    case "Empleado":
        userCategory = "Empleado";
        break;
    case "Miembro":
        userCategory = "Miembro";
        break;
    case "Suscriptor":
        userCategory = "Suscriptor";
        break;
    default:
        userCategory = "No suscriptor";
}

console.log("Categoria de usuario:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Autenticado" : "No autenticado";
console.log("Estado de autenticación:", authenticationStatus);
