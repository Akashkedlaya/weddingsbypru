import { useState, useEffect } from 'react';

export const useWeddings = () => {
  const [weddings, setWeddings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeddings = async () => {
      try {
        // Add cache-busting timestamp to force fresh data
        const timestamp = new Date().getTime();
        const response = await fetch(
          `http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/weddings.json?t=${timestamp}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to load weddings data');
        }
        
        const data = await response.json();
        
        // Add thumbnail URLs and category field
        Object.keys(data).forEach(category => {
          data[category] = data[category].map((wedding, index) => ({
            ...wedding,
            category: category,
            thumbnail: `http://weddingsbypru.com.s3-website.ap-south-1.amazonaws.com/images/photography/${category}-${index + 1}.webp`
          }));
        });
        
        setWeddings(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weddings:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeddings();
  }, []);

  return { weddings, loading, error };
};
