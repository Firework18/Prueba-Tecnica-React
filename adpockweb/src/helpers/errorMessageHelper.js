
export const getErrorMessage = (error) => {
    if (error.response) {
        // Error de respuesta del servidor
        return 'Hubo un problema con el servidor. Por favor, inténtalo de nuevo más tarde.'
    } else if (error.request) {
        // Error de red 
        return 'No se pudo conectar al servidor. Por favor, verifica tu conexión a internet.'
    } else {
        // Otro tipo de error (Algo salió mal al configurar la solicitud)
        return 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.'
    }
}