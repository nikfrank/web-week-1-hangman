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
    didWin: null,
  }

  componentDidMount(){
    document.addEventListener('keydown', event => {
      this.guess( String.fromCharCode(event.keyCode).toLowerCase() );
    });
  }

  newGame = (didWin)=> {
    this.setState({ didWin });

    setTimeout(()=> this.setState({
      word: words[ Math.floor( Math.random()*words.length ) ],
      goodLetters: [],
      badLetters: [],
      didWin: null
    }), 2000);
  }

  guess = letter => {
    if( /[a-z]/.test(letter) ){

      if( this.state.word.includes(letter) &&
          !this.state.goodLetters.includes(letter) ){

        this.setState({
          goodLetters: [...this.state.goodLetters, letter],
        }, ()=> {
          let lettersLeft = this.state.word.replace(/ /g, '');

          for(let i=0; i< this.state.goodLetters.length; i++){
            lettersLeft = lettersLeft.split(this.state.goodLetters[i])
                                     .join('');
          }

          if(!lettersLeft) {
            console.log('YOU WON THE GAME SON');
            this.newGame(!!'won');
          }
        });

      } else if( !this.state.word.includes(letter) &&
                 !this.state.badLetters.includes(letter) ){
        this.setState({
          badLetters: [...this.state.badLetters, letter],
        }, ()=> {
          console.log('bad guess', this.state);
          if(this.state.badLetters.length === 7){
            console.log('YOU LOST THE GAME FOU');
            this.newGame(!'won');
          }
        });
      }
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.didWin ? (
            <div className='winner'><span>
              WINNER WINNER CHICKEN DINNER
            </span></div>
          ) :
          this.state.didWin !== null ? (
            <div className='loser'><span>
            you're dead loser.
          </span></div>
          ) :
          null
        }
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
