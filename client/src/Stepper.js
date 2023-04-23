import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NamePotion from './NamePotion';
import FinishPotion from './FinishPotion';
import { useSelector } from 'react-redux'
import MaterialList from './MaterialList';

export default function VerticalLinearStepper( { materials } ) {
  const materialArray = useSelector(state => state.materialReducer.materials)


  const handleSubmit = (e, newPotion) => {
    e.preventDefault()
    fetch('/potions', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newPotion)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

    const steps = [
        {
          label: 'Select Materials',
          description: `Select Materials`,
          component:  <MaterialList materials={materials} materialArray={materialArray}/>
        },
        {
          label: 'Create a name',
          description:'Name.',
          component: <NamePotion handleSubmit={handleSubmit} />
        },
        {
          label: 'Add to Menu',
          description: `Menu`,
          component: <FinishPotion />
        },
      ];


  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: '0 auto' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>

              <Typography>{step.description}</Typography>
              {step.component}

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}