import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import fetch from '../utils/fetch';
import Intro from '../components/intro';

const Home = () => {
  const { fetchMovies, addError } = useContext(GlobalContext);
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('get', 'http://www.omdbapi.com/?s=inception&i=tt3896198&apikey=e4df776a')
      .then((res) => {
        fetchMovies(res);
        console.log(res);
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
    </>
  );
};
export default Home;
