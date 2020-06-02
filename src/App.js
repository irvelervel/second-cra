import React from 'react';
import NewComponent from './NewComponent'
import './App.css';

class App extends React.Component {

  state = {
    listElements: []
  }

  addListElement = (input) => {
    this.setState({
      listElements: [...this.state.listElements, input] // ADDING A 'NEW' ELEMENT
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            type="button"
            onClick={() => this.addListElement('new')}>ADD</button>

          <NewComponent
            elements={this.state.listElements}
          />

        </header>
      </div>
    );
  }
}

export default App;

// TO USE THE STATE, WE NEED TO CONVERT THIS IN A CLASS BASED COMPONENT
