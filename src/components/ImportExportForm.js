import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import AppInfo from './AppInfo';

export default function ImportExportForm(props) {

  const [tempAppDataString, setTempAppDataString] = useState(JSON.stringify(props.appData, null, 2))
  const [buttonMessage, setButtonMessage] = useState('[📋]')

  let parseInput = () => {
    if(validateJson(tempAppDataString)) {
      props.setAppData(JSON.parse(tempAppDataString))
    }
  }

  let validateJson = (value) => {
    try {
      JSON.parse(value)
      return true;
    } catch (e) {
      console.log(e)
      return false;
    }
  }
  
  let ErrorOrButton = () => {
    if(validateJson(tempAppDataString)) {
      return (
        <input
          type="button"
          value="[Import Data]"
          onClick={parseInput}
        />
      )
    } else {
      return <span className="error-message">[^Something in there isn't right...]</span>
    }
  }

  let updateTempAppDataString = () => {
    setTempAppDataString(JSON.stringify(props.appData, null, 2))
  }

  let setButtonSuccess = () => {
    setButtonMessage('[✅]')
    window.setTimeout(() => {setButtonMessage('[📋]')}, 1000)
  }

  return (
    <div className="import-export-controls">
      <textarea
        onChange={(event) => setTempAppDataString(event.target.value)}
        value={tempAppDataString}>
      </textarea>

      <div className="import-export-buttons">
        
        <ErrorOrButton />
        
        <input
          type="button"
          value="[Update Text Box]"
          onClick={updateTempAppDataString}
        />
        
        <CopyToClipboard
          text={tempAppDataString}
          onCopy={setButtonSuccess}>  
          <input type="button" value={buttonMessage} />
        </CopyToClipboard>
        <AppInfo />
      </div>
    </div>
  )
}
