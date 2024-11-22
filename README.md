 Sistema de Gestión de Series

Un proyecto CRUD para la gestión de series, utilizando Node.js, Express y PostgreSQL. Permite agregar, editar, eliminar y votar por series, con una interfaz simple y funcional.

---

## 📖 Descripción

Este proyecto es una aplicación web para administrar una lista de series. Los usuarios pueden:
- Agregar nuevas series con un nombre y un enlace asociado.
- Editar el título de una serie existente.
- Eliminar series de la lista.
- Votar por una serie para incrementar su popularidad.
- Ver las series ordenadas dinámicamente por la cantidad de votos.

El sistema utiliza **EJS** como motor de plantillas para renderizar las vistas, y **JavaScript** para implementar la funcionalidad en el lado del cliente.

---

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js con Express.
- **Base de datos**: PostgreSQL.
- **Frontend**: EJS para vistas dinámicas, HTML y JavaScript (vanilla).
- **Servidor**: Express.
- **Conexión a BD**: Node-postgres (pg).

---

## 🌟 Características
Agregar series: Los usuarios pueden agregar series especificando un nombre y un enlace.
Editar títulos: Modifica el título de una serie existente.
Eliminar series: Elimina una serie específica de la lista.
Votar por series: Incrementa la cantidad de votos de una serie.
Orden dinámico: Las series se reordenan automáticamente por la cantidad de votos.

## 🚀 Instalación y Uso
1. Clonar el Repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
2. Instalar Dependencias
Asegúrate de tener Node.js y PostgreSQL instalados. Luego, ejecuta:
npm install
3. Ejecutar el Servidor
node app.js
Accede a la aplicación en http://localhost:3000.

## 📂 Endpoints de la API
GET / Devuelve la lista de series con sus datos.
POST /serie Agrega una nueva serie.
PUT /voto/:id_serie Incrementa el número de votos de una serie. Parámetro: id_serie (ID de la serie).
PUT /modificar Modifica el título de una serie.
DELETE /delete Elimina una serie por su ID.

## 🎨 Vista Principal
La interfaz muestra una lista de series con las siguientes acciones:
Ver más: Enlace directo a la URL de la serie.
Votar: Incrementa el número de votos.
Eliminar: Borra la serie.
Editar título: Permite modificar el nombre de la serie.

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar la aplicación, crea un fork del repositorio y envía un pull request.

## 🧑‍💻 Autor
Desarrollado por Ginno como parte de un desafío de programación.
