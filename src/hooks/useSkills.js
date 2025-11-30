import { useState, useEffect } from 'react';
import { getApiUrl } from '../config/api.js';

export function useSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(getApiUrl('/skills'));
        if (!response.ok) {
          throw new Error('Error al cargar las habilidades');
        }
        const data = await response.json();
        setSkills(data);
        } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
}