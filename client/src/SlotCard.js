import React, { useEffect, useRef, useState} from "react"
import MaterialSelector from "./MaterialSelector";
import ScienceIcon from '@mui/icons-material/Science';
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
        setReady('toBrew')
        setMessage('Ready to brew!')
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
        processFeedback(res)
      }

    const processFeedback = (res) => {
        // if (res.quality < customer.current.request.quality) {
        //     console.log('Gross')
        // }}

        //
        // let maxDiff = 0
        // let maxDiffKey = null
        
        // for (const key in res) {
        //     if (customer.current.request.hasOwnProperty(key)) {
        //         const diff = Math.abs(res[key] - customer.current.request[key])
        //         if (diff > maxDiff) {
        //             maxDiff = diff
        //             maxDiffKey = key
        //         }
        //     }
        // }
        //
        // res[maxDiffKey] > customer.current.request[maxDiffKey] 


        // results.cost > customer.current.request.cost ?
        // results.quality > customer.current.request.quality ?
        // results.brew_time > customer.current.request.brew_time ?
    }

    const handleBottleClick = () => {
        if (ready === 'toBrew') {
            setBrewing(true)
            setMessage('Brewing...')
            handleBrew(customer.current)
            setTimeout(() => {
                setBrewing(false);
                setReady('toServe')
                setMessage('Ready to Serve! ' + customer?.current?.name?.first) 
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
            <>
            <MaterialSelector 
                materials={materials}  
                brewingMaterials={brewingMaterials} 
                handleMixture={handleMixture}
                handleMix={handleMix}
                />
                <IconButton onClick={() => handleMix(brewingMaterials)}> Mix! </IconButton>
                <> {brewingMaterials.map((material) => <p key={material.id}> {material.name} </p>)} </>
            </>
        )
    }

    const renderCard = () => {
        if (ready === 'toStart') {
            return (
                <>
                    <IconButton 
                        onClick={() => onSelect(slot)}
                        disabled={!currentCustomer}
                        // selectedSlot && !(selectedSlot === slot) && 
                        >
                        <ScienceIcon sx={{ ...emptyBottle, fontSize: 150 }} />
                    </IconButton>   
                </>
            )
        } else {
            return (
                <>
                    <IconButton
                        disabled={brewing}
                        onClick={() => handleBottleClick()}>
                        <ScienceIcon sx={{ ...fullBottle, fontSize: 150 }} />
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