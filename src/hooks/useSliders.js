import { useState, useEffect } from 'react';
import { getApiUrl } from '../config/api.js';

export function useSliders() {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(getApiUrl('/sliders'));
        
        if (!response.ok) {
          throw new Error('Error al cargar los sliders');
        }
        
        const data = await response.json();
        // Filtrar solo sliders activos
        const activeSliders = data.filter(slider => slider.is_active);
        setSliders(activeSliders);
      } catch (err) {
        console.error('Error fetching sliders:', err);
        setError(err.message);
        // Si hay error, usar sliders por defecto
        setSliders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  return { sliders, loading, error };
}
