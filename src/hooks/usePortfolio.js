import { useState, useEffect } from 'react';
import { getApiUrl } from '../config/api.js';

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(getApiUrl('/portfolio'));
        if (!response.ok) {
          throw new Error('Error al cargar el portafolio');
        }
        const data = await response.json();
        // La API retorna { value: [...], Count: N }, extraer el array
        setPortfolio(Array.isArray(data.value) ? data.value : data);
        } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return { portfolio, loading, error };
}