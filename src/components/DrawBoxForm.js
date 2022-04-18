import React, { useState, useEffect } from 'react'
import DrawBoxVariant from './DrawBoxVariant'

export default function DrawBoxForm(props) {
  let defaultName = 'variant_sku';

  const [hasInserted, setHasInserted] = useState(false)

  let drawBoxVariantTemplate = {
    "scale": 1,
    "left": "0px",
    "top": "0px",
    "name": "Some Name",
    "sizes": "defaultSizes"
  }

  let addFromVariantTemplate = () => {
    let tempAppData = Object.assign({}, props.appData)
    let newSku;
    let i = 1;
    let skuExists = true;

    do {
      newSku = defaultName + '_' + i;
      i++;
      skuExists = !!props.appData[newSku];
    }
    while (skuExists)

    tempAppData[newSku] = drawBoxVariantTemplate;
    props.setAppData(tempAppData)
  }

  useEffect(() => {
    if(!hasInserted) {
      addFromVariantTemplate()
      setHasInserted(true);
    }
  })

  const validates = (appData) => {
    try {
      for(let key of Object.keys(appData)) {
        if(typeof appData[key] !== 'object') {
          throw new Error('Error validating input');
        } else {
          for(let innerKey of Object.keys(appData[key])) {
            if(typeof appData[key][innerKey] !== 'string' && typeof appData[key][innerKey] !== 'number') {
              throw new Error('Error validating input')
            }
          }
        }
      }
      return true;
    } catch (e) {
      console.log(e)
      return false;
    }
  }

  if(!validates(props.appData)) {
    return (
      <p style={{color:"red"}}>An error was encountered, please check your input and try again.<br/>You a dev? Check the console.</p>
    )
  }

  return (
    <div>
      {Object.keys(props.appData).map((key, index) => {
        return (
          <DrawBoxVariant
            appData={props.appData}
            setAppData={props.setAppData}
            sku={key}
            key={index}
          />
        )
      })}

      <button className="pad-below" onClick={addFromVariantTemplate} title="Add new variant">[➕]</button>
    </div>
  )
}
