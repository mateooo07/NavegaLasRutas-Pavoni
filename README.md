# LuminaLámparas - Proyecto React

**Estudiante:** Mateo Pavoni   
**Curso / Comisión:** ReactJS / 88070
---
## Descripción del Proyecto
Este proyecto corresponde a la **segunda entrega** del ecommerce **LuminaLámaparas**, desarollado con **React**. El objetivo de esta versión es ampliar la funcionalidad de la primera entrega incorporando:
- Un carrito de compras dinámico con manejo de contexto global.
- Páginas de detalle de productos.
- Carga dinámica de productos y filtrado por categorías.
- Navegación entre vistas mediante **React Router DOM**
---
## Estructura del Proyecto
El proyecto está organizado de la siguiente forma:

- src/  
│  
├── componentes/  
│ ├── BarraNavegacion.jsx *# Navegación principal con enlaces y carrito*   
│ ├── Carrito.jsx *# Ícono del carrito con cantidad dinámica*    
│ ├── CartPage.jsx *# Página principal del carrito*    
│ ├── ContenedorProductos.jsx *# Componente base para mensajes o landing*  
│ ├── Item.jsx *# Tarjeta individual de producto*   
│ ├── ItemList.jsx *# Lista de productos*    
│ └── ItemDetail.jsx *# Detalle individual del producto*    
│  
├── contenedores/  
│ ├── ItemListContainer.jsx *# Contenedor de productos (home y categorías)*  
│ └── ItemDetailContainer.jsx *# Contenedor de detalle de producto*  
│  
├── context/  
│ └── CartContext.jsx *# Contexto global del carrito*  
│  
├── data/  
│ └── productos.js *# Fuente local de datos*    
│  
├── App.js *# Enrutador principal*  
└── index.js *# Punto de entrada de la app*
---
## Fuente de Datos
Los productos provienen del archivo:
Contiene una lista de **productos**, con los siguientes campos:
```js
{ id, nombre, categoria, precio, descripcion}
```
Ejemplo:
```js
{ id: 1, nombre: "Lámpara de pie moderna", categoria: "modernas", precio: 25000, descripcion: "Idea para living o dormitorio." }
```
---
## ¿Cómo Ejecutar la Aplicación?
Sigue estos pasos para ver el proyecto en tu máquina local:

### 1 - Clona el repositorio desde GitHub:
```bash
git clone https://github.com/mateooo07/NavegaLasRutas-Pavoni.git
```

### 2 - Accede al directorio del proyecto e instala las dependencias:
```bash
cd NavegaLasRutas-Pavoni
npm install
```

### 3 - Inicia la aplicación:
```bash
npm start
```
### 4 - Abrir en el navegador:
```bash
http://localhost:3000
```
---
## Dependencias Principales
- React 18+
- React Router DOM
- Context API
- Vite o Create React App (según la configuración base)
---
## Mejoras Visuales Pendientes

- Integrar un estilo moderno con CSS Modules o Tailwind.
- Agregar imágenes reales de los productos.
- Animaciones sutiles al agregar productos al carrito.
