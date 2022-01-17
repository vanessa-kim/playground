import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.scss';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
      ).json();
    setMovies(response.data.movies)
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      { loading ? 
        <div className={styles.container}>
          <div className={styles.loading}>
            <h1>Loading...</h1>
            <div className={styles.loadingBar} />
          </div>
        </div>: 
        <div className={styles.moviesWrap}>
          <h1 className={styles.moviesTitle}>Home</h1>
          <div className={styles.movies}>      
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImage={movie.medium_cover_image} 
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}  
              />
            ))}
          </div> 
        </div>
      }
    </div>
  );
};

export default Home;