import { Card, Container, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { FC } from 'react';

interface StepWrapperProps {
  activeStep: number;
}

const steps = ['About track', 'Download image', 'Download image'];

export const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => (
  <Container>
    <Stepper activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} completed={activeStep > index}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>

    <Grid container justifyContent='center' style={{ margin: '70px 0 ', height: 270 }}>
      <Card style={{ width: 600 }}>{children}</Card>
    </Grid>
  </Container>
);
