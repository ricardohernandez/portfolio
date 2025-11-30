# Configuración Centralizada de API

## Descripción
Todas las URLs de API y recursos están centralizadas en `src/config/api.js` para facilitar cambios de ambiente sin modificar el código.

## Archivos Modificados

### 1. **src/config/api.js** (Nuevo)
- `getApiUrl(endpoint)` - Construye URLs de API
- `getImageUrl(imagePath)` - Construye URLs de imágenes
- Usa `VITE_API_URL` del `.env`

### 2. **Hooks Actualizados**
- `useSliders.js` - Usa `getApiUrl('/sliders')`
- `useSkills.js` - Usa `getApiUrl('/skills')`
- `usePortfolio.js` - Usa `getApiUrl('/portfolio')`

### 3. **Componentes Actualizados**
- `Portfolio.jsx` - Usa `getImageUrl()` para imágenes

## Variables de Entorno

### Desarrollo (.env.local)
```env
VITE_API_URL=http://localhost:5001/api
```

### Producción (remoto)
```env
VITE_API_URL=https://api.tu-dominio.com/api
```

## Cómo usar

1. **Para desarrollo local:**
   - Las URLs usan `http://localhost:5001/api` por defecto
   - El archivo `.env.local` ya está configurado

2. **Para desplegar en remoto:**
   - Crear un `.env` o `.env.production.local` con la URL del servidor remoto
   - No se necesita modificar ningún código

## Ejemplo de despliegue

```bash
# En producción, se puede usar:
VITE_API_URL=https://mi-api.com/api npm run build
```

O editar el `.env.production.local`:
```env
VITE_API_URL=https://mi-api.com/api
```

## Fallbacks

Si `VITE_API_URL` no está definido:
- `getApiUrl()` usa `http://localhost:5001/api`
- `getImageUrl()` usa `http://localhost:5001`

Esto asegura que el desarrollo local funcione sin necesidad de configuración adicional.
