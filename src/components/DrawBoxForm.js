import React from 'react'
import DrawBoxVariant from './DrawBoxVariant'

export default function DrawBoxForm(props) {

  let defaultName = 'variant_sku';

  let drawBoxVariantTemplate = {
    "scale": 1,
    "left": "0px",
    "top": "0px",
    "name": "0px",
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
