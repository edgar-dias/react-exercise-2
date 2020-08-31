import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        text: '',
    };

    getText = (event) => {
        const text = event.target.value;
        this.setState({
            text: text,
        });
    };

    deleteCharHandler = (charIndex) => {
        const currentText = [...this.state.text.split('')];
        currentText.splice(charIndex,1);
        this.setState({text: currentText.join('')});
    }

    render() {
        let charList = null;
        charList = (
            <div>
                {this.state.text.split('').map((char, index) => {
                    return <CharComponent letter={char} click={() => this.deleteCharHandler(index)} />;
                })}
            </div>
        );

        return (
            <div className="App">
                <br />
                <input type="text" onChange={this.getText} value={this.state.text}/>
                <p>Text length: {this.state.text.length}</p>
                <ValidationComponent textLength={this.state.text.length} />
                {charList}
            </div>
        );
    }
}

export default App;
