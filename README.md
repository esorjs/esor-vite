# Proyecto de App de ESOR Framework con Vite

Este proyecto es una aplicación desarrollada utilizando ESOR y Vite como herramienta de construcción. A continuación se detallan los aspectos más importantes del proyecto:

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
    - **components/**: Componentes reutilizables de la aplicación.
    - **pages/**: Páginas principales de la aplicación.
    - **assets/**: Recursos estáticos como imágenes y estilos.
    - **utils/**: Funciones utilitarias y helpers.
- **public/**: Archivos públicos que no requieren procesamiento.
- **dist/**: Carpeta generada tras la construcción del proyecto para producción.

## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
- `serve`: Sirve la aplicación construida para producción.

## Dependencias Principales

- **ESOR Framework**: Framework principal utilizado para el desarrollo de la aplicación.
- **Vite**: Herramienta de construcción rápida y ligera.

## Configuración

- **vite.config.js**: Archivo de configuración de Vite.
- **.env**: Variables de entorno para la configuración del proyecto.

## Instalación y Uso

1. Clonar el repositorio.
2. Instalar las dependencias utilizando `npm install` o `yarn install`.
3. Ejecutar `npm run dev` o `yarn dev` para iniciar el servidor de desarrollo.
4. Ejecutar `npm run build` o `yarn build` para construir la aplicación para producción.
5. Ejecutar `npm run serve` o `yarn serve` para servir la aplicación construida.

## Ejemplos de Uso de ESOR

A continuación se presentan algunos ejemplos básicos de cómo utilizar el framework ESOR para crear componentes y manejar estados.

### Crear un Componente

```javascript
import { html, component } from "esor";

component("my-greeting", ({ name }) => {
  return html`<p>Hola, ${name}!</p>`;
});
```

Este ejemplo define un nuevo componente llamado `my-greeting` que muestra un saludo personalizado.

### Manejar el Estado con Signals

```javascript
import { html, useSignal, component } from "esor";

component("simple-counter", () => {
  const [count, setCount] = useSignal(0);
  
  return html`
    <div>
      <p>Contador: ${count}</p>
      <button onclick="${() => setCount(count + 1)}">Incrementar</button>
    </div>
  `;
});
```

En este ejemplo, se crea un componente `simple-counter` que utiliza `useSignal` para manejar el estado del contador y permite incrementarlo con un botón.

### Uso de Props

```javascript
import { html, component } from "esor";

component("user-card", ({ username, age }) => {
  return html`
    <div class="user-card">
      <h2>${username}</h2>
      <p>Edad: ${age}</p>
    </div>
  `;
});
```

### Estilos CSS

```css
.user-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
}

.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Este ejemplo muestra cómo pasar propiedades a un componente `user-card` para mostrar información del usuario.

Estos ejemplos ilustran cómo ESOR puede facilitar la creación de componentes interactivos y mantener la lógica de estado de manera sencilla y declarativa.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue las pautas de contribución y el código de conducta del proyecto.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
