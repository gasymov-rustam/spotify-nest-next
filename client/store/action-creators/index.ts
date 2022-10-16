import * as PlayerActionCreators from './player';
import { fetchTracks, searchTrack } from './track';

export default {
  searchTrack,
  fetchTracks,
  ...PlayerActionCreators,
};
