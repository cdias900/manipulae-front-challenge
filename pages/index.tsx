import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import deezerApi from '../services/deezerApi';
import { addFavorite, removeFavorite } from '../store/actions';
import Track, { TrackData } from '../components/Track';
import TextInput from '../components/TextInput';

import { Container, TrackList, ButtonsContainer } from '../styles/containers';

interface HomeProps {
  tracks: TrackData[];
  searchQuery?: string;
  index?: number;
  nextIndex?: number;
  prevIndex?: number;
}

const Home: FC<HomeProps> = ({
  tracks, searchQuery, index, nextIndex, prevIndex,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites);
  const router = useRouter();
  const [search, setSearch] = useState(searchQuery || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search === '') router.replace('/');
      else {
        const i = index ? `&index=${index}` : '';
        router.replace(`/?search=${search}${i}`);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [search]);

  const nextPage = () => {
    router.replace(`/?search=${search}&index=${nextIndex || 0}`);
  };

  const prevPage = () => {
    if (!index || index <= 0) return;
    router.replace(`/?search=${search}&index=${prevIndex || 0}`);
  };

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
        {search && (
          <ButtonsContainer>
            <AiOutlineArrowLeft
              cursor={(index || 0) > 0 ? 'pointer' : 'not-allowed'}
              size={32}
              color={(index || 0) > 0 ? '#000' : '#ccc'}
              onClick={prevPage}
            />
            <AiOutlineArrowRight
              cursor="pointer"
              size={32}
              color="#000"
              onClick={nextPage}
            />
          </ButtonsContainer>
        )}
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
        index: context.query.index || 0,
      },
    })
      .then((res) => ({
        props: {
          tracks: res.data.data,
          searchQuery: context.query.search,
          index: context.query.index || 0,
          nextIndex: (Number(context.query.index) || 0) + res.data.data.length,
          prevIndex: context.query.index ? Number(context.query.index) - res.data.data.length : 0,
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
