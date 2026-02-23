# Desarrollo Web

Proyecto personal de aprendizaje enfocado en construir una base sólida de desarrollo web moderno, siguiendo un roadmap por hitos progresivos (backend, base de datos, frontend, autenticación, pruebas y despliegue).

---

## 📍 Estado del Proyecto

Actualmente el proyecto se encuentra en desarrollo.  
Se han completado los primeros hitos relacionados con la inicialización y configuración base del repositorio.

---

# 🧱 Hito M0 — Inicialización del Proyecto

El proyecto comenzó con la creación y configuración de un repositorio profesional utilizando Git como sistema de control de versiones.

### 🔹 Creación del repositorio

El repositorio fue creado en GitHub como proyecto público orientado a portafolio.

Nombre del repositorio:

Se decidió no generar archivos automáticos desde GitHub (README, licencia o .gitignore), ya que estos fueron creados manualmente en entorno local para tener control total sobre la configuración inicial.

---

### 🔹 Configuración inicial en entorno local

Se realizaron los siguientes pasos:

- Creación de la carpeta del proyecto.
- Inicialización de Git con rama principal `main`.
- Creación manual de los archivos base:
  - `README.md`
  - `LICENSE`
  - `.gitignore`
  - `.editorconfig`
- Primer commit estructural:


---

# 🧰 Hito M1 — Entorno de desarrollo (en progreso)

Se añadieron herramientas para estandarizar el estilo del código y automatizar validaciones antes de cada commit:

- **Prettier** (formato)
- **ESLint** (reglas de calidad)
- **lint-staged** (ejecuta validaciones solo sobre archivos en staging)
- **Husky** (hook `pre-commit`)

> Nota: la configuración de ESLint se encuentra en ajuste para soportar correctamente TypeScript en todo el monorepo.  
> El objetivo es que `npm run lint` quede estable y que el pre-commit valide formato y reglas automáticamente.



---

# 🔌 Hito M2 — Desarrollo del Backend (API REST)

En este hito se construyó el backend del proyecto utilizando **Node.js + Express + TypeScript**, comenzando con una API mínima funcional y luego aplicando una organización profesional basada en rutas y controladores.

---

## 🔹 M2.1 — API mínima funcional (CRUD en memoria)

Se implementó una API REST básica que gestiona un recurso de ejemplo: `tareas`.

### 🎯 Objetivo
- Levantar un servidor HTTP con Express.
- Implementar endpoints CRUD.
- Probar manualmente el funcionamiento completo.

### 📦 Dependencias instaladas (apps/api)

- express
- cors
- morgan
- typescript
- ts-node
- nodemon
- @types/node
- @types/express
- @types/cors
- @types/morgan

Se configuró TypeScript mediante `tsc --init` y se ajustó `tsconfig.json` para permitir ejecución correcta con `ts-node`.

### ▶️ Ejecución en desarrollo

```bash
cd apps/api
npm run dev
