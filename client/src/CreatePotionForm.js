import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createPotion } from './actions/PotionActions';
import NamePotion from './NamePotion';
import MaterialList from './MaterialList';
import PotionList from './PotionList';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateNewPotion = ( { materials } ) => {
  const [mixture, setMixture] = useState([])
  const [potionErrors, setPotionErrors] = useState({})
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
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
        setOpen(true)
        setMessage(data.name)
      }
    })
  }

  // const handleSuccess = (data) => {
  //   console.log(name)
  //   dispatch(createPotion(data))
  //   setPotionErrors({})
  //   setOpen(true)
  //   setMessage(data.name)
  //   setName('')
  //   setDescription('')
  //   console.log("aaname)
  // }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(
        <div id="potion-form">
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {`Successfully created ${message}`}
            </Alert>
          </Snackbar>
          <MaterialList setMixture={setMixture} materials={materials} mixture={mixture}/>
          <NamePotion handleSubmit={handleSubmit} potionErrors={potionErrors}/>
          <PotionList />
        </div>
    )}

export default CreateNewPotion


