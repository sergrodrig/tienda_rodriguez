import { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer.jsx';

class App extends Component{
  render () {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={`const nananananananana = 'batman'`} />
      </div>
    );
  }
}
  
export default App;
