import React, { useEffect, useRef, useState} from "react"
import MaterialSelector from "./MaterialSelector";
import ScienceIcon from '@mui/icons-material/Science';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import IconButton from '@mui/material/IconButton';

const SlotCard = ( {  
    materials, 
    handleBrew,
    slot, 
    selectedSlot, 
    onSelect, 
    setSelectedSlot,
    handleServe,
    currentCustomer
    } ) => {
    const [ready, setReady] = useState('toStart')
    const [brewing, setBrewing] = useState(false)
    const [message, setMessage] = useState('')
    const [brewingMaterials, setBrewingMaterials] = useState([])
    const timer = currentCustomer?.request?.brew_time
    const customer = useRef(currentCustomer)
    const [results, setResults] = useState({})
    const [isMixing, setIsMixing] = useState(false);


    useEffect(() => {
        if (selectedSlot === slot) {
            customer.current = currentCustomer;
        }
      }, [selectedSlot]);

      const handleMixture = (material) => {
        if (brewingMaterials.includes(material)) {
          setBrewingMaterials((prevMaterials => [...prevMaterials.filter((m => m !== material ))]))
        } else if (brewingMaterials.length < 3 && !brewingMaterials.includes(material)) {
          setBrewingMaterials((prevMaterials => [...prevMaterials, material]))
        }
      }

      const handleMix = (brewingMaterials) => {
        setIsMixing(true);
        setTimeout(() => {
            setIsMixing(false);
            setReady('toBrew')
            setMessage('Ready to brew!')
          }, 1000);
        // setReady('toBrew')
        // setMessage('Ready to brew!')
        const arraysMatch = customer.current.request.materials.every(requestMaterial => {
          return brewingMaterials.some(brewingMaterial => brewingMaterial.name === requestMaterial.name)
        })
        let res = brewingMaterials.reduce((accumulator, material) => { 
        ['cost', 'quality', 'brew_time'].forEach(key => {
            accumulator[key] ||= 0
            accumulator[key] += material[key]
        })
            return (accumulator)
        }, {})
        res['success'] = arraysMatch
        setResults(res)
        setBrewingMaterials([])
      }

    const handleBottleClick = () => {
        if (ready === 'toBrew') {
            setBrewing(true)
            setMessage('Brewing...')
            handleBrew(customer.current)
            setTimeout(() => {
                setBrewing(false);
                setReady('toServe')
                setMessage('Ready to Serve! ' + customer?.current?.name) 
                console.log(customer)
            }, timer * 1000);
        } else if (ready === 'toServe') {
            handleServe(customer.current, results)
            setReady('toStart')
            setSelectedSlot(null)
        } else {
            console.log(ready)
        }
    }

    const fullBottle = {
        color: 'success',
        opacity: '1'
    }

    const emptyBottle = {
        color: '#FFFFFF',
        opacity: '0.5',
    }


    const renderSelector = () => {
        return (
            <div>
            <MaterialSelector 
                materials={materials}  
                brewingMaterials={brewingMaterials} 
                handleMixture={handleMixture}
                handleMix={handleMix}
                />
                <div class={`mixing-bowl ${isMixing ? "mixing" : ""}`}>
                <IconButton onClick={() => handleMix(brewingMaterials)}> Mix! 🍯 
                <div class={"ingredients-container"}>
                <> {brewingMaterials.map((material) => <div class= {isMixing ?"ingredient" : ""} key={material.id}> {material.description} </div>)} </>
                
                </div>
                </IconButton>
                </div>
            </div>
        )
    }

    const renderCard = () => {
        if (ready === 'toStart') {
            return (
                <>
                    <IconButton 
                        onClick={() => onSelect(slot)}
                        disabled={!currentCustomer}
                        >
                        <ScienceRoundedIcon sx={{ ...emptyBottle, fontSize: 150 }} />
                    </IconButton>   
                </>
            )
        } else {
            return (
                <>
                    <IconButton
                        disabled={brewing}
                        onClick={() => handleBottleClick()}>
                        <div className="bubble-container">
                        <ScienceRoundedIcon sx={{ ...fullBottle, fontSize: 150 }} />
                        {brewing || ready === 'toServe' ? 
                        <>
                        <div className={brewing ? "bubble" : "bubble bubbleover"}></div>
                        <div className={brewing ? "bubble" : "bubble bubbleover"}></div>
                        <div className={brewing ? "bubble" : "bubble bubbleover"}></div>
                        <div className={brewing ? "bubble" : "bubble bubbleover"}></div>
                        <div className={brewing ? "bubble" : "bubble bubbleover"}></div>
                        </>
                        : null
                    }
                        </div>
                    </IconButton>
                    <p>{message}</p>
                </>
            )
        }
    }

    return (
        selectedSlot === slot && ready === 'toStart'
          ? renderSelector()
          : renderCard()
      )
}

export default SlotCard;