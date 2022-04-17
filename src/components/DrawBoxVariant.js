import React from 'react'

export default function DrawBoxVariant(props) {
  const sku = props.sku
  
  const updateAppDataFromInputs = (event) => {
    const tempAppData = Object.assign({}, props.appData);
    tempAppData[props.sku][event.target.getAttribute('name')] = event.target.value;

    props.setAppData(tempAppData)
  }

  const updateSku = (event) => {
    let tempAppData = Object.assign({}, props.appData)
    let tempVariant = tempAppData[sku]

    delete tempAppData[sku];

    tempAppData[event.target.value] = tempVariant;

    props.setAppData(tempAppData)
  }
  
  const duplicateBySku = (sku) => {
    let tempAppData = structuredClone(props.appData);
    let newSku;
    let i = 1;
    let skuExists = true;

    do {
      newSku = sku + '_' + i;
      i++;
      skuExists = !!props.appData[newSku];
    }
    while (skuExists)

    tempAppData[newSku] = structuredClone(props.appData[sku]);
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

      <div className="sub-variant">
        <label className="block-label">
          <span>scale</span>
          <input onChange={updateAppDataFromInputs} type="text" name="scale" value={props.appData[sku]['scale']} />
        </label>

        <label className="block-label">
          <span>left</span>
          <input onChange={updateAppDataFromInputs} type="text" name="left" value={props.appData[sku]['left']} />
        </label>

        <label className="block-label">
          <span>top</span>
          <input onChange={updateAppDataFromInputs} type="text" name="top" value={props.appData[sku]['top']} />
        </label>

        <label className="block-label">
          <span>name</span>
          <input onChange={updateAppDataFromInputs} type="text" name="name" value={props.appData[sku]['name']} />
        </label>

        <label className="block-label">
          <span>sizes</span>
          <input onChange={updateAppDataFromInputs} type="text" name="sizes" value={props.appData[sku]['sizes']} />
        </label>

        <div className="variant-action-inputs">
          <button onClick={() => duplicateBySku(sku)}>📄📄</button>
          <button onClick={() => removeBySku(sku)}>➖</button>
        </div>
      </div>
    </div>
  )
}
