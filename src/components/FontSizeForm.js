import React, { useState, useEffect } from 'react'
import FontSizeVariant from './FontSizeVariant'

export default function FontSizeForm(props) {
  
  let defaultName = 'variant_sku';

  const [hasInserted, setHasInserted] = useState(false)

  let drawBoxVariantTemplate = {
    "initials": {
      "tekomedium": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "stixtwotext": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "robotoslab": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "montserrat": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "blackout2am": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "voltage": {
        "large": 0,
        "medium": 0,
        "small": 0
      }
    },
    "name": {
      "tekomedium": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "stixtwotext": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "robotoslab": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "montserrat": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "blackout2am": {
        "large": 0,
        "medium": 0,
        "small": 0
      },
      "voltage": {
        "large": 0,
        "medium": 0,
        "small": 0
      }
    }
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

  return (
    <div>
      {Object.keys(props.appData).map((key, index) => {
        return (
          <FontSizeVariant
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
