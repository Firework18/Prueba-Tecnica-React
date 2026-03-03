# Prueba-Tecnica-React

Aplicación desarrollada con React que permite visualizar Pokémon, gestionar comentarios y manejar estado de forma eficiente utilizando React Query, apoyándose de Api's como PokeApi y JsonPlaceHolder.

![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
---

## Teconologías Utilizadas 🚀

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-DOM-CA4245?logo=reactrouter&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=white) ![daisyUI](https://img.shields.io/badge/daisyUI-Components-5A0EF8)

![React Hook Form](https://img.shields.io/badge/React_Hook_Form-Forms-EC5990?logo=reacthookform&logoColor=white) ![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1) ![Resolvers](https://img.shields.io/badge/Hookform_Resolvers-Integration-blue)

![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white) ![React Toastify](https://img.shields.io/badge/React_Toastify-Notifications-FF6C37) ![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-Icons-7952B3?logo=bootstrap&logoColor=white)


---

## Preview

### Inicio
![HOME](./adpockweb/screenshots/home.PNG)

### Sobre Nosotros
![ABOUT](./adpockweb/screenshots/about.PNG)

### Pokemons
![HOME](./adpockweb/screenshots/pokemons.PNG)

### Detalle del pokemon
![HOME](./adpockweb/screenshots/pokemonDetail.PNG)

### Blog
![ABOUT](./adpockweb/screenshots/blog.PNG)

### Detalle del post
![HOME](./adpockweb/screenshots/post.PNG)

### Comentarios del post
![HOME](./adpockweb/screenshots/comment.PNG)

---

## ⚙️ Instalación

![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-Required-CB3837?logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)

---

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Firework18/Prueba-Tecnica-React.git
cd tu-repo
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar el proyecto

```bash
npm run dev
```

---

> [!WARNING]  
> Asegúrate de tener Node.js 18 o superior instalado.
> 
> Puedes verificarlo con:
> 
> ```bash
> node -v
> ```

---
## Funcionalidades

### Gestión de Pokémon
- Listado de Pokémon con paginación dinámica según la cantidad solicitada en la petición.
- Filtro de búsqueda por nombre.
- Vista de detalle individual de cada Pokémon.
- Navegación entre páginas.

---

### Sección de Blog
- Visualización de posts obtenidos desde la API pública de JSONPlaceholder.
- Creación de posts simulados almacenados en LocalStorage.
- Vista de detalle de cada post.
- Visualización de comentarios asociados al post.

---

### Gestión de Comentarios
- Crear comentarios.
- Editar comentarios existentes.
- Eliminar comentarios.
- Actualización optimista para mejorar la experiencia de usuario.

---

### Experiencia de Usuario
- Modo oscuro / modo claro.
- Notificaciones con Toastify.
- Validación de formularios con Zod + React Hook Form.

> [!NOTE]  
> La creación/edición/eliminación de POSTS y COMMENTS no afectará a la data real traída por la Api de JsonPlaceHolder.
> La información agregada solo se almacenará en el LocalStorage del navegador

---
## Arquitectura
El proyecto sigue una arquitectura modular basada en features, donde cada dominio de la aplicación está aislado y organizado de forma independiente.

![ESTRUCTURA](./adpockweb/screenshots/estructura.PNG)

## Uso de Features

La aplicación está organizada siguiendo un enfoque modular por *features*.  
En lugar de agrupar archivos únicamente por tipo (componentes, hooks o servicios), cada dominio de la aplicación —como Pokémon o Blog— contiene su propia lógica y estructura interna.

Dentro de cada feature se encuentran:

- Componentes específicos  
- Hooks personalizados  
- Llamadas a API  
- Queries y mutaciones relacionadas  

Este enfoque permite mantener el proyecto ordenado y preparado para crecer.  
Además, reduce el acoplamiento entre módulos y facilita el mantenimiento a largo plazo.

---

## Manejo de Estado

El manejo de datos asíncronos se realiza mediante React Query, lo que permite gestionar estados de carga, errores y caché de forma eficiente.

Se implementa actualización optimista en determinadas mutaciones para mejorar la experiencia de usuario, reflejando cambios en la interfaz antes de que el servidor confirme la operación.

La lógica de obtención y manipulación de datos se mantiene desacoplada de los componentes visuales, promoviendo una arquitectura más limpia y reutilizable.

---

## Validación y Formularios

Los formularios se gestionan con React Hook Form, lo que ayuda a agilizar y simplificar el control del estado al no realizar renders innecesarios.

Las validaciones se definen mediante Zod, centralizando los esquemas en la carpeta `schemas` para facilitar su reutilización y mantener una estructura clara dentro del proyecto.

---
