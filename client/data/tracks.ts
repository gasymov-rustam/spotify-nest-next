import { ITrack } from '../types/track';

export const tracks: ITrack[] = [
  {
    _id: '1',
    artist: 'Vasya 1',
    createdAt: '',
    updatedAt: '',
    listens: 1,
    name: 'Vasya 1',
    text: 'Comment text for track 1',
    audio: '/audio/0ce6ecb8-198e-4207-8280-90bb49b89246.mp3',
    picture: '/image/6d547ffb-adb9-4cce-b7eb-d77c9352d63f.jpg',
    comments: [
      {
        _id: '1',
        text: 'Some Comment for Track 1',
        username: 'Petya 1',
      },
    ],
  },
  {
    _id: '2',
    artist: 'Vasya 2',
    createdAt: '',
    updatedAt: '',
    listens: 2,
    name: 'Vasya 2',
    text: 'Comment text for track 2',
    audio: '/audio/9b6777cb-3aae-44bc-aa4f-dec4261d09a2.mp3',
    picture: '/image/8a0beb4b-dbfd-49da-b043-bd80d902083f.jpeg',
    comments: [
      {
        _id: '2',
        text: 'Some Comment for Track 2',
        username: 'Petya 3',
      },
    ],
  },
  {
    _id: '3',
    artist: 'Vasya 3',
    createdAt: '',
    updatedAt: '',
    listens: 3,
    name: 'Vasya 3',
    text: 'Comment text for track 3',
    audio: '/audio/25419e96-ca44-4d5b-a791-3f2739f2c5a7.mp3',
    picture: '/image/26bc98c5-e90a-46b6-a796-bd1bae211fad.jpeg',
    comments: [
      {
        _id: '3',
        text: 'Some Comment for Track 3',
        username: 'Petya 3',
      },
    ],
  },
  {
    _id: '4',
    artist: 'Vasya 4',
    createdAt: '',
    updatedAt: '',
    listens: 4,
    name: 'Vasya 4',
    text: 'Comment text for track 4',
    audio: '/audio/aa702288-d56c-4b72-8b41-2c09e20ddecc.mp3',
    picture: '/image/34d97adb-dd71-4d96-8762-2c0b387314af.jpeg',
    comments: [
      {
        _id: '4',
        text: 'Some Comment for Track 4',
        username: 'Petya 4',
      },
    ],
  },
];
