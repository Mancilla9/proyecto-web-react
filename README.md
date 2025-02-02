# React + TypeScript + Vite

Este es un proyecto base (template) que proporciona una configuración mínima para trabajar con React utilizando Vite como herramienta de construcción. Incluye las siguientes características:

## Características Principales

- ⚡️ **Vite** - Herramienta de construcción ultrarrápida
- ⚛️ **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- 📘 **TypeScript** - Superset de JavaScript con tipado estático
- 🔥 **HMR (Hot Module Replacement)** - Actualización en tiempo real durante el desarrollo
- 🧪 **ESLint** - Herramienta de análisis de código

## Plugins Oficiales Disponibles

El proyecto puede utilizar uno de estos dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Utiliza [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Utiliza [SWC](https://swc.rs/) para Fast Refresh

## Configuración de ESLint

Para aplicaciones en producción, se recomienda habilitar las reglas de lint con verificación de tipos. Sigue estos pasos:

### 1. Configura las opciones del parser

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### 2. Actualiza la configuración

- Reemplaza `tseslint.configs.recommended` por `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`
- Opcionalmente añade `...tseslint.configs.stylisticTypeChecked`

### 3. Configura el plugin de React

Instala y configura [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react):

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Previsualiza la versión de producción localmente

## Estructura del Proyecto

```
├── public/          # Archivos estáticos
├── src/             # Código fuente
│   ├── components/  # Componentes de React
│   ├── assets/      # Recursos (imágenes, estilos, etc.)
│   ├── App.tsx      # Componente principal
│   └── main.tsx     # Punto de entrada
├── index.html       # HTML principal
└── package.json     # Dependencias y scripts
```

## Comenzando

1. Clona este repositorio
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre `http://localhost:5173` en tu navegador

## Licencia

Este proyecto está bajo la Licencia MIT.
