import { useState, useEffect } from 'react';

export const useFilms = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/films.json');
        
        if (!response.ok) {
          throw new Error('Failed to load films data');
        }
        
        const data = await response.json();
        
        // Add full thumbnail URLs
        if (data.featured) {
          data.featured = data.featured.map((film) => ({
            ...film,
            thumbnailUrl: `http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/films/${film.thumbnail}`
          }));
        }
        
        setFilms(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching films:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return { films, loading, error };
};