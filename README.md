# Desarrollo Web

Proyecto personal enfocado en construir una base sólida de desarrollo web moderno, siguiendo un roadmap estructurado por hitos progresivos:

- Backend profesional
- Base de datos con ORM
- Validaciones y manejo de errores
- Frontend moderno (próximo hito)
- Autenticación
- Pruebas
- Despliegue

El objetivo es desarrollar el proyecto como si fuera un entorno profesional real, documentando cada etapa.

---

# 📍 Estado Actual del Proyecto

Actualmente el proyecto cuenta con:

- ✔ Backend con Node.js + Express + TypeScript  
- ✔ Arquitectura modular (routes + controllers + middlewares + lib)  
- ✔ Base de datos PostgreSQL en Docker  
- ✔ ORM Prisma  
- ✔ Validaciones con Zod  
- ✔ Manejo global de errores  
- ✔ Persistencia real  

El backend se encuentra listo para integración con frontend moderno (M4).

---

# 🧱 Hito M0 — Inicialización del Proyecto

Se creó el repositorio como proyecto público orientado a portafolio profesional.

## 🔹 Configuración inicial

- Creación manual del repositorio en GitHub.
- Inicialización de Git con rama principal `main`.
- Creación manual de los archivos base:
  - `README.md`
  - `LICENSE`
  - `.gitignore`
  - `.editorconfig`
- Primer commit estructural del proyecto.

Objetivo: establecer una base limpia y profesional desde el inicio.

---

# 🧰 Hito M1 — Entorno de Desarrollo

Se configuró el entorno de desarrollo para trabajar con Node.js y TypeScript de forma correcta dentro de `apps/api`.

## 🔹 Configuración realizada

- Inicialización de proyecto Node dentro de `apps/api`.
- Instalación de dependencias:
  - TypeScript
  - ts-node
  - nodemon
- Generación y configuración de `tsconfig.json`.
- Script de desarrollo para ejecución automática:

```bash
npm run dev

---

# 🔌 Hito M2 — Backend API REST

Se desarrolló una API REST utilizando:

- Node.js
- Express
- TypeScript

---

## 🔹 M2.1 — API mínima funcional (CRUD en memoria)

Se implementó una API REST básica para el recurso **tareas**.

### Endpoints implementados

- GET `/api/tareas`
- GET `/api/tareas/:id`
- POST `/api/tareas`
- PATCH `/api/tareas/:id`
- DELETE `/api/tareas/:id`

Inicialmente se utilizó almacenamiento en memoria para validar:

- Flujo completo del CRUD
- Manejo correcto de rutas
- Uso adecuado de métodos HTTP
- Pruebas manuales con Hoppscotch

---

## 🔹 M2.2 — Refactor a Arquitectura Profesional

Se reorganizó el backend para aplicar una estructura modular y escalable.

### Estructura adoptada

```text
src/
  index.ts
  routes/
  controllers/
  middlewares/
  lib/ 

### Responsabilidades

- index.ts → configuración del servidor y montaje de rutas

- routes/ → definición de endpoints

- controllers/ → lógica de negocio

- lib/ → cliente Prisma

- middlewares/ → validaciones y manejo de errores

- Resultado: backend limpio, organizado y preparado para escalar.


---

# 🗄️ Hito M3 — Persistencia con PostgreSQL + Prisma

Se reemplazó el almacenamiento en memoria por persistencia real en base de datos.

---

## 🔹 M3.1 — Base de Datos con Docker

Se utilizó Docker Compose para levantar PostgreSQL de forma aislada y reproducible.

### docker-compose.yml

```yaml
services:
  db:
    image: postgres:16
    container_name: desarrollo-web-db
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: desarrollo_web
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:

### Levantamiento
´´´ docker compose up -d
- Resultado

 - Contenedor desarrollo-web-db ejecutándose

 - Puerto 5432 expuesto

 - Base de datos lista para conexión

###🔹 M3.2 — Configuración de Prisma ORM

- Se instaló Prisma dentro de apps/api:

npm i prisma @prisma/client
npx prisma init

- Se configuró la variable de entorno:

DATABASE_URL="postgresql://dev:dev@localhost:5432/desarrollo_web?schema=public"

###🔹 M3.3 — Definición del Modelo

- prisma/schema.prisma
    model Tarea {
      id        Int      @id @default(autoincrement())
      titulo    String
      done      Boolean  @default(false)
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
    }

- Se aplicó migración:

- npx prisma migrate dev --name init_tareas

### Resultado

- Tabla Tarea creada en PostgreSQL

- Prisma Client generado automáticamente

###🔹 M3.4 — Integración con el Backend

Se creó el cliente Prisma:

import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

Los controladores ahora utilizan:

- findMany

- findUnique

- create

- update

- delete

La información persiste incluso si el servidor se reinicia.

###🔹 M3.5 — Validaciones con Zod

Se incorporaron validaciones para evitar datos inválidos antes de llegar a la base de datos.

Instalación
npm i zod
Ejemplo de validación
import { z } from 'zod';

export const crearTareaSchema = z.object({
  titulo: z.string().min(1).max(200),
});

Se valida:

- IDs numéricos y positivos

- Títulos no vacíos

- Actualizaciones con al menos un campo

###🔹 M3.6 — Middleware Global de Errores

Se implementó un middleware centralizado para manejar errores correctamente.

- Errores de validación → 400 Bad Request

- Errores internos → 500 Internal Server Error

Esto garantiza:

- Respuestas HTTP coherentes

- Integración sencilla con frontend

- Backend más profesional

## 🧠 Resultado del Proyecto hasta M3

El backend se encuentra en estado profesional con:

- Arquitectura modular

- Persistencia real en PostgreSQL

- ORM moderno (Prisma)

- Validaciones robustas

- Manejo global de errores

- Endpoints REST completos

- Versionado coherente

El sistema está listo para iniciar el siguiente hito.


---

# 🌐 Hito M4 — Frontend Moderno (Inicio)

## 🔹 Avances realizados

### 1️⃣ Creación del frontend

Se creó la aplicación frontend en:

```text
apps/web

Utilizando:

React

Vite

TypeScript

Esto establece la base para construir una interfaz moderna que consumirá la API del backend.

### 2️⃣ Limpieza del proyecto base

Se eliminó contenido innecesario generado por defecto en Vite:

Logos

Contador de ejemplo

CSS no utilizado

Objetivo:

Dejar una base limpia

Evitar ruido innecesario

Preparar el proyecto para desarrollo real

### 3️⃣ Primera integración con la API

Se implementó la primera versión de la interfaz en App.tsx.

El frontend ahora:

Obtiene datos desde la API

Utiliza fetch para realizar peticiones HTTP

Maneja estado con useState

Ejecuta efectos con useEffect


---


## 🔹 M4 — Interacción completa con la API (Core)

En este punto se completó la integración funcional entre el frontend y el backend, logrando operaciones completas sobre el recurso `tareas`.

### Funcionalidades implementadas

- Conexión entre frontend y API backend
- Obtención de tareas desde el servidor (`GET`)
- Creación de nuevas tareas (`POST`)
- Actualización de estado de tareas (`PATCH`)
- Eliminación de tareas (`DELETE`)

### Detalle de operaciones

- **GET `/api/tareas`**  
  Carga inicial de tareas al montar la aplicación.

- **POST `/api/tareas`**  
  Permite crear nuevas tareas desde la interfaz.

- **PATCH `/api/tareas/:id`**  
  Permite cambiar el estado de una tarea (toggle done).

- **DELETE `/api/tareas/:id`**  
  Permite eliminar tareas existentes.

---

### 🖥️ Interfaz de usuario

Se implementó una interfaz básica funcional que permite:

- Visualizar lista de tareas
- Crear nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas

---

### 🎯 Resultado

El frontend y backend están completamente integrados, permitiendo interacción full stack en tiempo real.

Flujo:

```text
Usuario → React → fetch → Express → Prisma → PostgreSQL → respuesta → UI actualizada