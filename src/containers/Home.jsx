import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import '../assets/styles/Media.scss';
import useInitialState from '../hooks/useInitialState';

const Endpoint1 = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.KEY}&language=es-MX&page=1`;
const Endpoint2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.KEY}&language=es-MX&page=1`;
const Endpoint3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.KEY}&language=es-MX&page=1`;
const Home = () => {
  const initialState = useInitialState(Endpoint1);
  const initialState2 = useInitialState(Endpoint2);
  const initialState3 = useInitialState(Endpoint3);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.total_pages > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.results.slice(16, 19).map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Populares'>
        <Carousel>
          {initialState.results.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Mejores Calificaciones'>
        <Carousel>
          {initialState2.results.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Estrenos'>
        <Carousel>
          {initialState3.results.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default Home;
