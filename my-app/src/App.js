import React, { useState} from 'react';
import ListItem from './component/listItem/listItem';

import './App.css';

function App() {
  const [nameState, setNameState] = useState('Hassan')

  
  
  return (
    <div className="App">
      <header className="App-header">
        

          
        <button onClick= {() => setNameState('irfan')}> Update name</button>
        <div>My Name is {nameState}</div>
        <div>{nameState}</div>
      
    <ListItem name={nameState}/>
      </header>
    </div>

    
  );
}

export default App;
