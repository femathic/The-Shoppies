import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import fetch from '../utils/fetch';
import Intro from '../components/intro';
import Movies from '../components/movies';

const Home = () => {
  const { fetchMovies, addError } = useContext(GlobalContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('get', 'https://www.omdbapi.com/?s=Fight&i=tt3896198&apikey=e4df776a')
      .then((res) => {
        fetchMovies(res.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        addError(err.message);
        history.push('/error');
      });
    return () => setLoading(true);
  }, []);
  return (
    <>
      { loading && <Intro /> }
      { !loading && <Movies /> }
    </>
  );
};
export default Home;
