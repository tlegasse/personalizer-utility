import React from 'react'
import FontSizeDefinition from './FontSizeDefinition';

export default function FontSizeVariant(props) {
  const sku = props.sku

  const fontFamilies = {
    "tekomedium": {visibleName:"Teko Medium",available:true},
    "stixtwotext": {visibleName:"STIX Two Text",available:true},
    "robotoslab": {visibleName:"Roboto Slab",available:true},
    "montserrat": {visibleName:"Montserrat",available:true},
    "blackout2am": {visibleName:"Blackout 2am",available:true},
    "voltage": {visibleName:"Voltage",available:true}
  };

  const updateSku = (event) => {
    let tempAppData = Object.assign({}, props.appData)
    let tempVariant = tempAppData[sku]

    delete tempAppData[sku];

    tempAppData[event.target.value] = tempVariant;

    props.setAppData(tempAppData)
    console.log(props.appData)
  }

  const duplicateBySku = (sku) => {
    let tempAppData = structuredClone(props.appData);
    let newSku;
    let i = 1;
    let skuExists = true;

    do {
      newSku = sku + '_' + i;
      i++;
      skuExists = props.appData[newSku];
    }
    while (skuExists)

    tempAppData[newSku] = structuredClone(tempAppData[sku]);
    props.setAppData(tempAppData)
  }

  const removeBySku = (sku) => {
    let tempAppData = Object.assign({}, props.appData)

    delete tempAppData[sku];

    props.setAppData(tempAppData)
  }

  return (
    <div className="variant">
      <label className="block-label">
        <span>sku</span>
        <input type="text" onChange={updateSku} name="sku" value={props.sku} />
      </label>

      <br />

      {Object.keys(props.appData[props.sku]).map((key, index) => {
        let sectionName = key === 'initials' ? 'Horizontal': 'Vertical'

        return (
          <FontSizeDefinition
            name={key}
            appData={props.appData}
            setAppData={props.setAppData}
            fontFamilies={fontFamilies}
            values={props.appData[sku][key]}
            sku={sku}
            key={index}
            sectionName={sectionName}
          />
        )
      })}

      <div className="variant-action-inputs">
        <button onClick={() => duplicateBySku(sku)}>Duplicate</button>
        <button onClick={() => removeBySku(sku)}>Remove</button>
      </div>
    </div>
  )
}
