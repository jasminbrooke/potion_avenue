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

const CreateNewPotion = () => {
  const [mixture, setMixture] = useState([])
  const [potionErrors, setPotionErrors] = useState({})
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')
  const [messageSeverity, setMessageSeverity] = useState('success')
  const [reset, setReset] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState()
  const dispatch = useDispatch()
  const materials = useSelector(state => state.MaterialReducer.materials)
  const user = useSelector(state => state.LoginReducer.currentUser)
  const potions = useSelector(state => state.PotionReducer.potions)

  const newPotion={
    name,
    // image: image,
    description,
    user_id: user.id
  }

  const handleSubmit = (e) => {
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
        if(data.errors.material_ids){
          setMessageSeverity('error')
          setMessage(data.errors.material_ids[0])
          setOpen(true)
        }
        setPotionErrors(data.errors)
      } else {
        setPotionErrors({})
        dispatch(createPotion(data))
        setOpen(true)
        setMessageSeverity('success')
        setMessage(`Successfully created ${data.name}`)
        setReset(true)
        setMixture([])
        setName('')
        setDescription('')
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
  const handleName = (value) => setName(value)
  const handleDescription = (value) => setDescription(value)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(
        <div id="potion-form">
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={messageSeverity} sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
          <MaterialList setMixture={setMixture} materials={materials} mixture={mixture} reset={reset}/>
          <NamePotion
            handleSubmit={handleSubmit}
            potionErrors={potionErrors}
            name={name}
            description={description}
            handleName={handleName}
            handleDescription={handleDescription}
            />
          <PotionList />
          <h4>Select three materials.</h4>
        </div>
    )}

export default CreateNewPotion


