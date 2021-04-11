import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


function App() {
  return (
    <div className="App">
      <h1>Hey Adam</h1>

      <Button bsStyle="primary">Primary</Button>

      <button onClick={ ()=> alert("This button has been clicked!")}>CLICK ME</button>
    </div>
  );
}

export default App;
