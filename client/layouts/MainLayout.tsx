import { FC } from 'react';
import { Container } from '@material-ui/core';
import Head from 'next/head';
import { Navbar, Player } from '../components';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'Music Playground'}</title>
        <meta
          name='description'
          content={`Music Playground. Everyone can leave a track here and become famous.${description}`}
        />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords || 'Musics, tracks, artists'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />

      <Container style={{ margin: '90px 0' }}>{children}</Container>

      <Player />
    </>
  );
};

export default MainLayout;
