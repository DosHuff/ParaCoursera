let autorizacion = "Empleado";
let accessLevel;

if (autorizacion === "Empleado") {
    accessLevel = "Está autorizado a tner acceso a los ";
} else if (autorizacion === "Miembro") {
    accessLevel = "Limited access granted";
} else if (autorizacion === "Miembro") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (autorizacion === "Empleado") {
        userMessage = "¡Bienvenido, Empleado!";
    } else {
        userMessage = "¡Bienvenido, Usuario!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "Empleado";
let userCategory;

switch (userType) {
    case "Empleado":
        userCategory = "Empleado";
        break;
    case "Miembro":
        userCategory = "Miembro";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);
