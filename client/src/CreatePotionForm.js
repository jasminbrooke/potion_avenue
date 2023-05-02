import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createPotion } from './actions/PotionActions';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import NamePotion from './NamePotion';
import MaterialList from './MaterialList';
import PotionList from './PotionList';

const CreateNewPotion = ( { materials } ) => {
const [mixture, setMixture] = useState([])
const [potionErrors, setPotionErrors] = useState({})
const dispatch = useDispatch()
const user = useSelector(state => state.LoginReducer.currentUser)

useEffect(() => {
    console.log("mixture changed: ", mixture);
}, [mixture]);


  const handleSubmit = (e, newPotion) => {
    e.preventDefault()
    const materialIds = mixture.map(material => material.id);
    const requestBody = { ...newPotion, material_ids: materialIds };
    fetch(`/users/${user.id}/potions`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(requestBody)
  })
    .then(res => res.json())
    .then(data => {
      if (data.errors){
        setPotionErrors(data.errors)
      } else {
        setPotionErrors({})
        dispatch(createPotion(data))
      }
    })
  }

    // const steps = [
    //     {
    //       label: 'Select Materials',
    //       description: `The materials you select will determine the qualities your potion possesses.`,
    //       component:  
    //     },
    //     {
    //       label: 'Create a name',
    //       description:'Choose any name and description you would like.',
    //       component: 
    //     },
    //     {
    //       label: 'Completion',
    //       description: `Success!`,
    //       component: 
    //     },
    //   ];


  // const stepper = () => {
  //   return (
  //       <Box sx={{ maxWidth: 600, maxheight: 500, margin: '0 auto' }}>
  //       <Stepper activeStep={activeStep} orientation="vertical">
  //           {steps.map((step, index) => (
  //           <Step key={step.label}>
  //               <StepLabel
  //                 optional={
  //                   index === 2 ? (
  //                   <Typography variant="caption">Last step</Typography>
  //                   ) : null
  //                 }
  //               >
  //               {step.label}
  //               </StepLabel>
  //               <StepContent>

  //               <Typography>{step.description}</Typography>
  //               {step.component}

  //               <Box sx={{ mb: 2 }}>
  //                   <div>
  //                   <Button
  //                     variant="contained"
  //                     onClick={handleNext}
  //                     sx={{ mt: 1, mr: 1 }}
  //                   >
  //                       {index === steps.length - 1 ? 'Finish' : 'Continue'}
  //                   </Button>
  //                   <Button
  //                       disabled={index === 0}
  //                       onClick={handleBack}
  //                       sx={{ mt: 1, mr: 1 }}
  //                   >
  //                       Back
  //                   </Button>
  //                   </div>
  //               </Box>
  //               </StepContent>
  //           </Step>
  //           ))}
  //       </Stepper>
  //       {activeStep === steps.length && (
  //           <Paper square elevation={0} sx={{ p: 3 }}>
  //           <Typography>All steps completed - you&apos;re finished</Typography>
  //           <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
  //               Reset
  //           </Button>
  //           </Paper>
  //       )}
  //       </Box>
  //   );
  // }

    return(
        <div id="menu">
            <MaterialList setMixture={setMixture} materials={materials} mixture={mixture}/>
            <NamePotion handleSubmit={handleSubmit} potionErrors={potionErrors}/>
            <PotionList />
        </div>
    )}

export default CreateNewPotion


