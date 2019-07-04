import React from 'react';
import Gallow from './Gallow';

import './App.css';

const words = [
  'vladimir putin',
  'firetruck',
  'monkey lover',
  'chinese food basket',
  'your mother is a lovely woman',
];

class App extends React.Component {
  state = {
    word: words[0],
    goodLetters: [],
    badLetters: [],
  }

  componentDidMount(){
    document.addEventListener('keydown', event => {
      this.guess( String.fromCharCode(event.keyCode).toLowerCase() );
    });
  }

  guess = letter => {
    if( /[a-z]/.test(letter) ){

      if( this.state.word.includes(letter) &&
          !this.state.goodLetters.includes(letter) ){
        this.setState({
          goodLetters: [...this.state.goodLetters, letter],
        });
      } else if( !this.state.word.includes(letter) &&
                 !this.state.badLetters.includes(letter) ){
        this.setState({
          badLetters: [...this.state.badLetters, letter],
        });
      }
    }
  }

  render(){
    return (
      <div className="App">
        <Gallow strikes={this.state.badLetters.length}/>
        <div className='word'>
          {
            this.state.word.split('').map((letter, i)=> (
              <span className={letter === ' ' ? 'space' : 'letter'}
                    key={i}>
                {
                  this.state.goodLetters.includes(letter) ? letter : null
                }
              </span>
            ))
          }
        </div>
        <div className='badLetters'>
          Mistakes: {this.state.badLetters}
        </div>
      </div>
    );
  }
}

export default App;
