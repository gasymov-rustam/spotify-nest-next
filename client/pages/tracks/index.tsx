import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { TrackList } from '../../components';
import { useTypedSelector } from '../../hooks';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTrack } from '../../store/action-creators/track';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(async () => {
        await dispatch(searchTrack(e.target.value));
      }, 500)
    );
  };

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title='Track list - music venue'>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>List of tracks</h1>
              <Button onClick={() => router.push('/tracks/create')}>Download</Button>
            </Grid>
          </Box>

          <TextField fullWidth value={query} onChange={search} />

          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(fetchTracks());
});
