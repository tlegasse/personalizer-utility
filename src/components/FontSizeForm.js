import React from 'react'
import FontSizeVariant from './FontSizeVariant'

export default function FontSizeForm(props) {
  
  let defaultName = 'variant_sku';

  let drawBoxVariantTemplate = {
    "initials": {
      "tekomedium": {
        "large": 36,
        "medium": 30,
        "small": 22
      },
      "stixtwotext": {
        "large": 24,
        "medium": 20,
        "small": 16
      },
      "robotoslab": {
        "large": 24,
        "medium": 20,
        "small": 18
      },
      "montserrat": {
        "large": 24,
        "medium": 20,
        "small": 16
      },
      "blackout2am": {
        "large": 34,
        "medium": 28,
        "small": 20
      },
      "voltage": {
        "large": 26,
        "medium": 20,
        "small": 16
      }
    },
    "name": {
      "tekomedium": {
        "large": 56,
        "medium": 46,
        "small": 36
      },
      "stixtwotext": {
        "large": 56,
        "medium": 46,
        "small": 36
      },
      "robotoslab": {
        "large": 56,
        "medium": 46,
        "small": 36
      },
      "montserrat": {
        "large": 56,
        "medium": 46,
        "small": 36
      },
      "blackout2am": {
        "large": 56,
        "medium": 46,
        "small": 36
      },
      "voltage": {
        "large": 56,
        "medium": 46,
        "small": 36
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
