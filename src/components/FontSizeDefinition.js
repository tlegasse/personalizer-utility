import React from 'react'

export default function FontSizeDefinition(props) {

  const sku = props.sku;

  const updateAppDataFromInputs = (event) => {
    const tempAppData = Object.assign({}, props.appData);
    let horVert = props.name;
    let fontname = event.target.getAttribute('fontname');
    let inputName = event.target.getAttribute('name');
    console.log(tempAppData[sku][horVert][fontname][inputName])
    tempAppData[sku][horVert][fontname][inputName] = parseInt(event.target.value);

    props.setAppData(tempAppData)
  }

  return (
    <div className="sub-variant">
      {props.sectionName}

      {Object.keys(props.appData[sku][props.name]).map((key, index) => {
        return (
            <div className="single-font-definition">
              <label key={'label' + index}>{props.fontFamilies[key].visibleName}</label>
                
                <div className="inline-labels">
                {Object.keys(props.appData[sku][props.name][key]).map((innerKey,innerValue) => {
                  let singleFont = props.appData[sku][props.name][key];

                  return(
                    <>
                      <label key={() => 'label' + innerKey}>
                        <span>{innerKey}</span>
                        <input type="number" onChange={updateAppDataFromInputs} key={key + '.' + innerKey} name={innerKey} fontname={key} value={singleFont[innerKey]} />
                      </label>
                    </>
                  )
                })}
              </div>
            </div>
        )
      })}
    </div>
  )
}
