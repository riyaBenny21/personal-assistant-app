import React from 'react'
import './App.css'
import Profilecard from './components/profilecard'
import alexaIcon from '/images/alexa.png'
import cortana from '/images/cortana.png'
import siri from '/images/siri.png'

function App() {

  return (
    <>
      <div>
          <div style={{marginLeft: '450px', border: '2px solid #ccc', backgroundColor: '#DB6551', width: '650px'}}><h3>Personal Digital Assistance</h3></div>
          <div className='content' style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
              <Profilecard 
                title ='alexa' 
                handle='@alexa99' 
                description='I will help you to buy stuff of Amazon'
                imgSrc='/images/alexa.png'
              />
            </div>
            <div style={{ marginRight: '20px' }}>
              <Profilecard 
                title ='cortana' 
                handle='@cortana32'
                description='Personal assistance by Microsoft'
                imgSrc={cortana}
              />
            </div>
            <div style={{ marginRight: '20px' }}>
              <Profilecard 
                title ='siri' 
                handle='@siri01'
                description='I perform various tasks and provide assistance on Apple devices'
                imgSrc={siri}
              />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
