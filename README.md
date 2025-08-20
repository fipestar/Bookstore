# 📚 BookStore - E-commerce de Libros

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📖 Descripción del Proyecto

Aplicación web de e-commerce especializada en la venta de libros, desarrollada como Single Page Application (SPA) con React 18 y TypeScript. El proyecto implementa un carrito de compras completamente funcional con persistencia de datos y una interfaz de usuario moderna y responsiva.

## 🚀 Demo en Vivo

[Ver Demo](https://tu-bookstore-demo.netlify.app) | [Código Fuente](https://github.com/tu-usuario/bookstore-ts)

## ✨ Características Principales

- 🛒 **Carrito de compras completo** con agregar/remover productos
- 📱 **Diseño responsive** móvil-first
- 💾 **Persistencia de datos** con localStorage
- 🎨 **Interfaz moderna** con Tailwind CSS
- ⚡ **Optimizado para rendimiento** con useMemo
- 🔒 **Tipado estático completo** con TypeScript
- 🎭 **Micro-animaciones** para mejor UX

## 🛠️ Stack Tecnológico

### Frontend Framework & Lenguajes
- **React 18** - Hooks modernos (useState, useEffect, useMemo)
- **TypeScript** - Tipado estático y mejor DX
- **Vite** - Bundler y servidor de desarrollo rápido

### Estilos & UI
- **Tailwind CSS** - Framework utility-first
- **CSS Grid & Flexbox** - Layouts adaptativos
- **Gradientes CSS** - Efectos visuales modernos

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Encabezado con carrito
│   └── Book.tsx        # Tarjeta de producto
├── hooks/              # Custom Hooks
│   └── useCart.ts      # Lógica del carrito
├── types/              # Definiciones TypeScript
│   └── index.ts        # Interfaces y tipos
├── data/               # Datos estáticos
│   └── db.ts          # Base de datos mock
└── App.tsx            # Componente principal
```

## 🎯 Conceptos Técnicos Implementados

### Custom Hooks
```typescript
// Hook personalizado para gestión del carrito
const useCart = (): UseCartReturn => {
  // Estado local centralizado
  // Persistencia con localStorage
  // Cálculos memoizados
}
```

### Tipado TypeScript Estricto
```typescript
type CartItem = Book & {
  quantity: number;
}

type UseCartReturn = {
  data: Book[]
  cart: CartItem[]
  addToCart: (item: Book) => void
  // ... más métodos tipados
}
```

### Optimización de Rendimiento
```typescript
// Memoización de cálculos costosos
const cartTotal = useMemo(() => 
  cart.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  ).toLocaleString(), [cart]
)
```

## ⚡ Funcionalidades del Carrito

- ✅ **Agregar productos** al carrito
- ✅ **Incrementar/decrementar** cantidades (límites 1-5)
- ✅ **Remover productos** individualmente
- ✅ **Limpiar carrito** completo
- ✅ **Cálculo automático** de totales
- ✅ **Persistencia** entre sesiones
- ✅ **Validación de estado** vacío

## 🎨 Características de UI/UX

- **Responsive Design** - Adaptado a todos los dispositivos
- **Component Composition** - Arquitectura modular
- **Interactive Feedback** - Animaciones de botones
- **Conditional Rendering** - UI basada en estado
- **Design System** - Paleta de colores consistente

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/bookstore-ts.git

# Navegar al directorio
cd bookstore-ts

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de producción
npm run lint         # Linting del código
```

## 📁 Estructura de Datos

### Modelo de Libro
```typescript
type Book = {
  id: number
  name: string
  image: string
  description: string
  price: number
}
```

### Modelo de Item del Carrito
```typescript
type CartItem = Book & {
  quantity: number
}
```

## 🔧 Optimizaciones Implementadas

1. **Memoización** - useMemo para cálculos costosos
2. **State Management** - Estado local eficiente
3. **Component Re-rendering** - Props optimizadas
4. **Bundle Size** - Tree shaking con Vite
5. **Type Safety** - Cero tipos `any` implícitos

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Tablets */
md: 768px   /* Desktop pequeño */
lg: 1024px  /* Desktop mediano */
xl: 1280px  /* Desktop grande */
```

## 🎯 Mejores Prácticas Aplicadas

- ✅ **Component Composition** sobre herencia
- ✅ **Custom Hooks** para lógica reutilizable
- ✅ **TypeScript estricto** sin escape hatches
- ✅ **Estado inmutable** con spread operators
- ✅ **Separation of Concerns** clara
- ✅ **Props interface design** consistente

## 🔮 Futuras Mejoras

- [ ] Integración con API real
- [ ] Sistema de autenticación
- [ ] Filtros y búsqueda
- [ ] Wishlist de productos
- [ ] Checkout con pasarela de pago
- [ ] Tests unitarios con Jest
- [ ] Storybook para componentes

## 👨‍💻 Autor

**Juan David Barbosa Neira**
- Portfolio: [portafoliobarbosa.com](https://portafoliobarbosa.netlify.app/)
- LinkedIn: [linkedin](https://www.linkedin.com/in/juan-david-barbosa-neira-480a00216/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

⭐ **¡Dale una estrella si te gustó el proyecto!** ⭐

*Desarrollado con ❤️ como parte del aprendizaje de React + TypeScript + Tailwind CSS*
