import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { createPotion } from './actions/PotionActions';
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

    return(
        <div id="menu">
            <MaterialList setMixture={setMixture} materials={materials} mixture={mixture}/>
            <NamePotion handleSubmit={handleSubmit} potionErrors={potionErrors}/>
            <PotionList />
        </div>
    )}

export default CreateNewPotion


