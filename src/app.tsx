import React, { useEffect, useState } from 'react';
import './app.scss';
import { AnimeItem } from './components/anime-item';
import { animeItem } from './store/types';
import { axiosInstance } from './utils/axios';

export const App = () => {
  const [anime, setAnime] = useState([])
  const fetchAnime = async (): Promise<any> => {
    const { data } = await axiosInstance.get('/v1/anime')
    setAnime(data)
  }
  useEffect(() => {
    fetchAnime()
  }, [])
  return (
    <div className="app">
      {anime.map((item: animeItem) => (
        <AnimeItem
          desc={item.desc}
          imageURL={item.imageURL}
          title={item.title}
        />
      ))}
    </div>
  );
}

