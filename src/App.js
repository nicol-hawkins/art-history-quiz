import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    correctGuessCount: 0,
    wrongGuessCount: 0,
    questionsAnswered: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null
    }
  }

  onCorrectAnswer = () => {
    this.setState({
      correctGuessCount: this.state.correctGuessCount + 1
    })
  }

  onWrongAnswer = () => {
    this.setState({
      wrongGuessCount: this.state.wrongGuessCount + 1
    })
  }

render() {
  return (
    <div className="QuestionContainer">
      <h1 className="Header">Who is the artist?</h1>
      <div className="Guesses">
        {
          this.state.correctGuessCount === 4 ? (
            <h2>Good job!</h2>
          ): null
        }
        Correct guesses: {this.state.correctGuessCount}<br />
        Wrong guesses: {this.state.wrongGuessCount}
      </div>

      <div className="Question">
        <p className="Question-prompt">How did Daenerys Targaryen attempt to hatch her dragon eggs?</p>
        <img className="Question-image" src="https://www.artic.edu/iiif/2/88d65792-afb3-c90b-56d7-6f95967fa731/full/1200,/0/default.jpg?w=1200&h=800&fit=crop" alt="dragon eggies" />

        {
          this.state.questionsAnswered[0] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[0] ? 'Correct!': 'Wrong :('}</h2>
              At the end of Season 1, Daenerys Targaryen's dragon eggs were engulfed in fire, in an attempt to hatch them.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(0)}>1. In a lightning storm</button>
              <button onClick={() => this.onCorrectAnswer(0)}>2. In a fire</button>
              <button onClick={() => this.onWrongAnswer(0)}>3. In an omelet</button>
              <button onClick={() => this.onWrongAnswer(0)}>4. In a frozen cave</button>
            </div>
          )
        }
       
      </div>

      <div className="Question">
        <p className="Question-prompt">The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:</p>
        <img className="Question-image" src="https://i.imgur.com/zoTroXq.jpg" alt="spooky man" />

       {
          this.state.questionsAnswered[1] !== null ? (
            <div className="Question-explanation">
             <h2>{this.state.questionsAnswered[1] ? 'Correct!': 'Wrong :('}</h2>
              The Season 2 finale was named "Valar Morghulis" while the Season 3 premiere was named "Valar Dohaeris." In 2014, the Brewery Ommegang created a beer called "Valar Morghulis," with each cork fire-branded with the response.
            </div>
          ): (
            <div className="Question-options">
            <button onClick={() => this.onCorrectAnswer(1)}>1. Valar Dohaeris or 'all men must serve'</button>
            <button onClick={() => this.onWrongAnswer(1)}>2. Valar Rohnas or 'all men must live'</button>
            <button onClick={() => this.onWrongAnswer(1)}>3. Valar GoGo or 'all men must dance'</button>
            <button onClick={() => this.onWrongAnswer(1)}>4. Valar Kilmer or 'all men must act'</button>
          </div>
          )
        }

      </div>

      <div className="Question">
        <p className="Question-prompt">Besides dragonglass, what is the only other substance capable of defeating White Walkers?</p>
        <img className="Question-image" src="https://i.imgur.com/m0u5VrG.jpg" alt="frosty boye"/>

        {
          this.state.questionsAnswered[2] !== null? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[2] ? 'Correct!': 'Wrong :)'}</h2>
              Valyrian Steel is not only exceptionally sharp, strong and free of maintenance, but is also capable of taking down an immortal White Walker. The metal is easily identified by its distinctive rippled pattern.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(2)}>1. Weirwood</button>
              <button onClick={() => this.onWrongAnswer(2)}>2. Wildfire</button>
              <button onClick={() => this.onCorrectAnswer(2)}>3. Valyrian steel</button>
              <button onClick={() => this.onWrongAnswer(2)}>4. Snowballs</button>
            </div>
          )
        }
                
      </div>

      <div className="Question">
        <p className="Question-prompt">Which Stark family direwolf received the penalty for Joffrey being bitten?</p>
        <img className="Question-image" src="https://i.imgur.com/QUkikLL.jpg" alt="doggo" />

        {
          this.state.questionsAnswered[3] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[3] ? 'Correct': 'Wrong'}</h2>
              After the direwolf Nymeria flees into the woods following a defensive attack against Prince Joffrey, Cersei Lannister took her wrath out on the sister wolf, Lady.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(3)}>1. Ghost</button>
              <button onClick={() => this.onCorrectAnswer(3)}>2. Lady</button>
              <button onClick={() => this.onWrongAnswer(3)}>3. Nymeria</button>
              <button onClick={() => this.onWrongAnswer(3)}>4. Summer</button>
            </div>
          )
        }

      </div>

      <div className="Question">
        <p className="Question-prompt">What is the name of Ned Stark's greatsword?</p>
        <img className="Question-image" src="https://i.imgur.com/opChkVP.jpg" alt="stay a-head, ned!" />

        {
          this.state.questionsAnswered[4] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[4] ? 'Correct!': 'Wrong:('}</h2>
              Ice was the official sword of the Lord of Winterfell, forged from Valyrian steel and handed down over the ages. It was subsequently melted down to forge two new swords – the Oathkeeper and Widow's Wail.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onCorrectAnswer(4)}>1. Ice</button>
              <button onClick={() => this.onWrongAnswer(4)}>2. Oathkeeper</button>
              <button onClick={() => this.onWrongAnswer(4)}>3. Widow's Wail</button>
              <button onClick={() => this.onWrongAnswer(4)}>4. Northguard</button>
            </div>
          )
        }

      </div>
    </div>
  );
}
}

export default App;