import { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import deezerApi from '../services/deezerApi';

import Track, { TrackData } from '../components/Track';

import { Container, TrackList } from '../styles/home';

interface HomeProps {
  tracks: TrackData[];
}

const Home: FC<HomeProps> = ({ tracks }) => {
  useEffect(() => {
    console.log(tracks);
  }, []);

  return (
    <Container>
      <TrackList>
        {tracks.map((track) => <Track key={track.id} trackData={track} />)}
      </TrackList>
    </Container>
  );
};

// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetServerSideProps = async (context) => deezerApi.get('/chart')
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

export default Home;
