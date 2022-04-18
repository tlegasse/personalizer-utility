import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DrawBoxForm from './components/DrawBoxForm';
import FontSizeForm from './components/FontSizeForm';
import ImportExportForm from './components/ImportExportForm';


import './App.css';
import 'react-tabs/style/react-tabs.css';


function App() {
  const [appData, setAppData] = useState({})

  const resetAppData = () => {
    setAppData({})
  }

  return (
    <>
      <div className="app-columns">
        <div className="app-column">
          <Tabs onSelect={resetAppData}>
            <TabList>
              <Tab>[Etch Positions]</Tab>
              <Tab>[Etch Font Sizes]</Tab>
            </TabList>
        
            <TabPanel>
              <DrawBoxForm appData={appData} setAppData={setAppData} />
            </TabPanel>
            <TabPanel>
              <FontSizeForm appData={appData} setAppData={setAppData} />
            </TabPanel>
          </Tabs>
        </div>
        <div className="app-column">
          <ImportExportForm appData={appData} setAppData={setAppData} />
        </div>
      </div>
    </>
  )
}

export default App;
