import { FC } from 'react';
import { ITrack } from '../types/track';
import { Box, Grid } from '@material-ui/core';
import { TrackItem } from './TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

export const TrackList: FC<TrackListProps> = ({ tracks }) => (
  <Grid container direction='column'>
    <Box p={2}>
      {tracks.map((track) => (
        <TrackItem key={track._id} track={track} />
      ))}
    </Box>
  </Grid>
);
