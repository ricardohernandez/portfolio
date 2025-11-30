// Configuración centralizada de API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const getApiUrl = (endpoint = '') => {
  return `${API_URL}${endpoint}`;
};

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  // Si es una URL absoluta, devolverla tal cual
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Si es una ruta relativa, construir la URL completa
  // Las imágenes están en /uploads/, no en /api/uploads/
  const baseUrl = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5001';
  
  // Si la ruta ya comienza con /, no añadir nada más
  if (imagePath.startsWith('/')) {
    return `${baseUrl}${imagePath}`;
  }
  
  // En caso contrario, agregar /uploads/
  return `${baseUrl}/uploads/${imagePath}`;
};

export default {
  API_URL,
  getApiUrl,
  getImageUrl,
};
