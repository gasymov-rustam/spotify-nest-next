import { useState } from 'react';
import { FileUpload, StepWrapper } from '../../components';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useInput } from '../../hooks';
import axios from 'axios';

const create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
      return;
    }

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('text', text.value);
    formData.append('artist', artist.value);
    formData.append('picture', picture);
    formData.append('audio', audio);
    axios
      .post('http://localhost:5000/tracks', formData)
      .then((resp) => router.push('/tracks'))
      .catch((e) => console.log(e));
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField {...name} style={{ marginTop: 10 }} label={'Name of track'} />
            <TextField {...artist} style={{ marginTop: 10 }} label={'Artists name'} />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={'Words for track'}
              multiline
              rows={3}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept='image/*'>
            <Button>Load image</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept='audio/*'>
            <Button>Load audio</Button>
          </FileUpload>
        )}
      </StepWrapper>

      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default create;
