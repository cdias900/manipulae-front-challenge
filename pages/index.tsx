import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import deezerApi from '../services/deezerApi';
import { addFavorite, removeFavorite } from '../store/actions';
import Track, { TrackData } from '../components/Track';
import TextInput from '../components/TextInput';

import { Container, TrackList } from '../styles/containers';

interface HomeProps {
  tracks: TrackData[];
  searchQuery?: string;
}

const Home: FC<HomeProps> = ({ tracks, searchQuery }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);
  const router = useRouter();
  const [search, setSearch] = useState(searchQuery || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search === '') router.replace('/');
      else router.replace(`/?search=${search}`);
    }, 50);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      {searchQuery && (
      <Head>
        <title>
          Busca -
          {' '}
          {searchQuery}
        </title>
      </Head>
      )}
      <Container>
        <TextInput
          placeholder="Música, artista, álbum..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          clear={() => setSearch('')}
        />
        <TrackList>
          {tracks.map((track) => (
            <Track
              key={track.id}
              trackData={track}
              addFavorite={() => dispatch(addFavorite(track))}
              removeFavorite={() => dispatch(removeFavorite(track.id))}
              isFavorite={favorites.filter((f) => f.id === track.id).length > 0}
            />
          ))}
        </TrackList>
      </Container>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.search) {
    return deezerApi.get('/search', {
      params: {
        q: context.query.search,
      },
    })
      .then((res) => ({
        props: {
          tracks: res.data.data,
          searchQuery: context.query.search,
        },
      }))
      .catch(() => ({
        redirect: {
          destination: '/',
          permanent: false,
        },
      }));
  }
  return deezerApi.get('/chart')
    .then((res) => ({
      props: {
        tracks: res.data.tracks.data,
      },
    }))
    .catch(() => ({
      props: {
        tracks: [],
      },
    }));
};

export default Home;
