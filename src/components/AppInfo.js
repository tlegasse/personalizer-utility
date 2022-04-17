import React, { useState } from 'react'
import ReactModal from 'react-modal';

export default function AppInfo() {
  
  const [showModal, setShowModal] = useState(false)
  
  const handleOpenModal = () => {
    console.log('handleOpenModal')
    setShowModal(true);
  }
  
  const handleCloseModal = () => {
    console.log('handleCloseModal')
    setShowModal(false);
  }
  
  return (
    <>
      <input type="button" onClick={handleOpenModal} className="app-info-button" value="[🙀 ...the heck is this?!?]" />
      <ReactModal 
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <input type="button" className="modal-close" onClick={handleCloseModal} value="[Get me out of here]"/>
        <p style={{marginTop: 0}}><strong>What is this?</strong></p>
        <p>It's a data manipulation tool to help you make reliable and easy work of updating the personalizers 🎉<br/><br/></p>
        <p><strong>How do I use it?</strong></p>
        <p><i>Easy!</i> Do you have data to start with?</p>
        <p>&nbsp;<strong>Yep, got it ready to go.</strong></p>
        <ol>
          <li>Paste your copied JSON into the text box in the right column.</li>
          <li>Ensure that the active tab is the one that corresponds to the data you'd like to modify.</li>
          <li>Click "Import Data"</li>
          <li>Make changes in the left column</li>
          <li>Once you're done making changes, click "Update Text Box" and ensure that everything looks good ✅</li>
          <li>Click the copy to clipboard button "📋"</li>
        </ol>
        <br/>
        <p>&nbsp;<strong>No, I'm starting fresh.</strong></p>
        <ol>
          <li>Click into the column you'd like to create data for.</li>
          <li>Click the "➕" button to add a new variant.</li>
          <li>Make any changes you'd like to the boxes that now appear, be sure not to neglect the sku!</li>
          <li>Once you're done making changes, click "Update Text Box" and ensure that everything looks good ✅</li>
          <li>Click the copy to clipboard button "📋"</li>
        </ol>
        <br />
        <p><strong>Helpful Tips</strong></p>
        <ul>
          <li>The text box is a staging area. Nothing will happen to the data until you load it in with the "Import Data" button, or "Update Text Box" button.</li>
          <li>To make sure you don't experience any errors, be sure to be on the correct tab before clicking "Import Data"</li>
          <li>Under the hood, we're checking the inputs in real time. If something doesn't look quite right, you won't be able to import.</li>
          <li>When you switch tabs, the app's data is cleared. But don't worry, all you need to do is paste in some data and import!</li>
          <li>If something breaks, or doesn't make sense, be sure to reach out to <a href="mailto:tanner@miir.com">Tanner</a>.</li>
        </ul>
        <br />
        <p><strong>Thanks, and have fun!</strong></p>
      </ReactModal>
    </>
  )
}
