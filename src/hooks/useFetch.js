import { useState, useEffect, useCallback } from 'react';

export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await fetchFunction();
      
      // Handle different response structures
      if (Array.isArray(result)) {
        setData(result);
      } else if (result && result.data && Array.isArray(result.data)) {
        setData(result.data);
      } else if (result && typeof result === 'object') {
        // Try to find array in response
        const possibleArrays = Object.values(result).filter(Array.isArray);
        if (possibleArrays.length > 0) {
          setData(possibleArrays[0]);
        } else {
          setData([]);
        }
      } else {
        setData([]);
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
      setData([]);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};