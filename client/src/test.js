
//things we can move to slotcard?

const [brewingMaterials, setBrewingMaterials] = useState([]) 

const handleMixture = (material) => {
    if (brewingMaterials.includes(material)) {
      setBrewingMaterials((prevMaterials => [...prevMaterials.filter((m => m !== material ))]))
    } else if (brewingMaterials.length < 3 && !brewingMaterials.includes(material)) {
      setBrewingMaterials((prevMaterials => [...prevMaterials, material]))
    }
  }


const handleClickMix = (brewingMaterials) => {
    const arraysMatch = customer.request.materials.every(requestMaterial => {
      return brewingMaterials.some(brewingMaterial => brewingMaterial.name === requestMaterial.name)
    })

    if (arraysMatch) {
        //return success message that needs to be passed back to shopfront
    } else {
        const reducedValues = brewingMaterials.reduce((accumulator, material) => { 
          ['cost', 'quality', 'time'].forEach(key => {
            accumulator[key] ||= 0
            accumulator[key] += material[key]
          })
            return (accumulator)
        }, {})
        setBrewingMaterials([])
        //return failure message that needs to be passed back to shopfront


    }
    setReady('toBrew')
    handleMix(brewingMaterials, customer.current)
    setMessage('Ready to brew!')
}