# Desafio_React_MongoDB

## 📌 Introducción

Este proyecto es una aplicación web desarrollada con React (Frontend), Node.js con Express (Backend) y MongoDB (Base de datos). Permite la gestión de productos y la asignación de precios especiales a usuarios específicos, integrando una API RESTful que interactúa con una base de datos en la nube de MongoDB.

## 🚀 Pasos para ejecutar localmente
### **1️⃣ Clonar el repositorio**

git clone git@github.com:Ecamposg95/Desafio_React_MongoDB.git
cd Desafio_React_MongoDB


### **2️⃣ Configurar el backend**

cd backend
npm install

Crear un archivo .env en la carpeta backend con las siguientes variables:


PORT=5000
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/tienda

Iniciar el servidor:

npm start

### **3️⃣ Configurar el frontend**

cd ../frontend
npm install

Iniciar la aplicación React:

npm start



## ⚙️ Justificación de elecciones técnicas

Desafio_React_MongoDB/
    backend/               # Servidor Node.js con Express
        controllers/       # Lógica de negocio
        models/            # Modelos de MongoDB
        routes/            # Definición de endpoints
        server.js          # Configuración principal del backend
    frontend/              # Aplicación React
        src/
        components/    # Componentes reutilizables
        pages/         # Páginas principales (Artículos, Subida, Dashboard)
        App.js         # Configuración principal de la aplicación
        public/            # Archivos estáticos
    .env                   # Variables de entorno
    package.json           # Dependencias y scripts
    README.md              # Documentación


## Software Ides herramientas

- Visual Studio
- Git Bash
- Git hub
- WSL

## Emmanuel Campos
