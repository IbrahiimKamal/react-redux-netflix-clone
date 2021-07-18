import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import axios from '../../api/axios';

import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      if (request) {
        setLoading(false);
      }
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      {loading ? (
        [...Array(5)].map(() => <Skeleton height={180} width="100%" />)
      ) : (
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                // <img
                //   className={`row__poster ${isLargeRow && 'row__posterLarg'}`}
                //   key={movie.id}
                //   src={`${base_url}${
                //     isLargeRow ? movie.poster_path : movie.backdrop_path
                //   }`}
                //   alt={movie.name}
                // />

                <LazyLoadImage
                  effect="blur"
                  className={`row__poster ${isLargeRow && 'row__posterLarg'}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Row;
