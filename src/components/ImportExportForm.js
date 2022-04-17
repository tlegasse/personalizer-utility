import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ImportExportForm(props) {

  const [tempAppDataString, setTempAppDataString] = useState(JSON.stringify(props.appData, null, 2))

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
        <CopyToClipboard
          text={tempAppDataString}
          onCopy={() => alert('Success!')}>
            <input type="button" value="📋" />
        </CopyToClipboard>
      )
    } else {
      return <span>Something isn't right</span>
    }
  }

  let updateTempAppDataString = () => {
    setTempAppDataString(JSON.stringify(props.appData, null, 2))
  }

  return (
    <div className="import-export-controls">
      <textarea
        onChange={(event) => setTempAppDataString(event.target.value)}
        value={tempAppDataString}>
      </textarea>

      <div className="import-export-buttons">
        <input
          type="button"
          value="Import Data"
          onClick={parseInput}
        />
        
        <input
          type="button"
          value="Update Text Box"
          onClick={updateTempAppDataString}
        />
        
        <ErrorOrButton />
      </div>
    </div>
  )
}
