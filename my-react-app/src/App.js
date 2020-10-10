import React from 'react';
import './App.css';
import {Tab,Tabs} from 'react-bootstrap';
import ServerRam from './components/ServerRam/ServerRam.js';
import ServerCPU from './components/ServerCPU/ServerCPU.js';
import ServerPublicaciones from './components/ServerPublicaciones/ServerPublicaciones.js';

function App() {
  return (
    <div className="App">
      <div className="container-fluid m-4">
          <Tabs defaultActiveKey="servidorA" id="uncontrolled-tab-example" className="nav-fill">
            <Tab eventKey="servidorA" title="Servidor A">
              Server A
              <ServerRam URL={'http://35.229.79.84:5001'}>

              </ServerRam>
              <ServerCPU URL={'http://35.229.79.84:5001'}>

              </ServerCPU>
              <ServerPublicaciones URL={'http://35.229.79.84:5001'}>

              </ServerPublicaciones>
            </Tab>
            <Tab eventKey="profile" title="Servidor B">
              Server B
              <ServerRam URL={'http://35.184.149.249:5001'}>

              </ServerRam>
              <ServerCPU URL={'http://35.184.149.249:5001'}>

              </ServerCPU>
              <ServerPublicaciones URL={'http://35.184.149.249:5001'}>

              </ServerPublicaciones>
            </Tab>
          </Tabs>
        </div>
    </div>
  );
}

export default App;
