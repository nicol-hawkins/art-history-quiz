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

  onCorrectAnswer = (questionNumber) => {
    this.state.questionsAnswered[questionNumber] = true;
    this.setState({
      correctGuessCount: this.state.correctGuessCount + 1
    })
  }

  onWrongAnswer = (questionNumber) => {
    this.state.questionsAnswered[questionNumber] = false;
    this.setState({
      wrongGuessCount: this.state.wrongGuessCount + 1
    })
  }

  renderQuizResults = () => {
    return (
      <div className="Results-Container">
        <div className="Results-Header">
          Great job! You got {this.state.correctGuessCount}/5.
        </div>
      </div>
      
    );
  };

render() {
  console.log('Rendering state: ', this.state)

  if(this.state.correctGuessCount + this.state.wrongGuessCount > 4) {
    return this.renderQuizResults();
  }

  return (
    <div className="QuestionContainer">
      <h1 className="Header">Can you guess the artist?</h1>
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
        <p className="Question-prompt">Ophelia - 1852</p>
        <img className="Question-image" src="https://blogs.wright.edu/learn/fogdog/files/2019/05/image-for-item-4-John-Everret-Millais-Ophelia-painting-1851-52-use-with-Lauren-Reder-piece-1024x562.jpeg" alt="dragon eggies" />

        {
          this.state.questionsAnswered[0] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[0] ? <i>Correct!</i>: <i>Incorrect...</i>}</h2>
              Sir John Everett Millais depicts Ophelia, a character from William Shakespear's play Hamlet, singing before she drowns in a river.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(0)}>1. Dante Gabriel Rosetti</button>
              <button onClick={() => this.onCorrectAnswer(0)}>2. Sir John Everett Millais</button>
              <button onClick={() => this.onWrongAnswer(0)}>3. John Everett Millais</button>
              <button onClick={() => this.onWrongAnswer(0)}>4. John William Waterhouse</button>
            </div>
          )
        }
       
      </div>
      <div className="Question">
        <p className="Question-prompt">Christina's World - 1948</p>
        <img className="Question-image" src="https://www.moma.org/media/W1siZiIsIjE2NTQ1NyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=64fb4feaaa506f2b" alt="frosty boye"/>

        {
          this.state.questionsAnswered[2] !== null? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[2] ? <i>Correct!</i>: <i>Incorrect...</i>}</h2>
              Andrew Wyeth's Christina's World is one of the best known American paintings of the middle 20th century.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(2)}>1. Winslow Homer</button>
              <button onClick={() => this.onWrongAnswer(2)}>2. Edward Hopper</button>
              <button onClick={() => this.onWrongAnswer(2)}>3. Normam Rockwell</button>
              <button onClick={() => this.onCorrectAnswer(2)}>4. Andrew Wyeth</button>
            </div>
          )
        }
                
      </div>

      <div className="Question">
        <p className="Question-prompt">The Birth of Venus ~ 1480's</p>
        <img className="Question-image" src="https://imgc.allpostersimages.com/img/print/u-g-Q1GA2DM0.jpg?w=550&h=550&p=0" alt="spooky man" />

       {
          this.state.questionsAnswered[1] !== null ? (
            <div className="Question-explanation Question--answered">
             <h2>{this.state.questionsAnswered[1] ?  <i>Correct!</i>: <i>Incorrect...</i>}</h2>
             The Birth of Venus is a painting by the Italian artist Sandro Botticelli, probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown.
            </div>
          ): (
            <div className="Question-options">
            <button onClick={() => this.onCorrectAnswer(1)}>1. Sandro Botticelli</button>
            <button onClick={() => this.onWrongAnswer(1)}>2. Leonardo da Vinci</button>
            <button onClick={() => this.onWrongAnswer(1)}>3. Titian</button>
            <button onClick={() => this.onWrongAnswer(1)}>4. Michelangelo</button>
          </div>
          )
        }

      </div>

      <div className="Question">
        <p className="Question-prompt">Torso of a Woman in the Sunlight - 1876</p>
        <img className="Question-image" src="https://3wrxqs36sylaoef0l2imhgz1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-07-at-2.59.28-PM-e1559934060106-670x402.png" alt="stay a-head, ned!" />

        {
          this.state.questionsAnswered[4] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[4] ? <i>Correct!</i>: <i>Incorrect...</i>}</h2>
              Best known for portraiture, figurative work, and his series of voluptuous bathing women, Pierre-Auguste Renoir was among the first group of French Impressionist painters.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(4)}>1. Paul Cézanne</button>
              <button onClick={() => this.onCorrectAnswer(4)}>2. Pierre-Auguste Renoir</button>
              <button onClick={() => this.onWrongAnswer(4)}>3. Edgar Degas</button>
              <button onClick={() => this.onWrongAnswer(4)}>4. Claude Monet</button>
            </div>
          )
        }

      </div>

     

      <div className="Question">
        <p className="Question-prompt">The Sleepers - 1886</p>
        <img className="Question-image" src="https://i.etsystatic.com/15350345/r/il/f44c98/1796876199/il_570xN.1796876199_swmq.jpg" alt="doggo" />

        {
          this.state.questionsAnswered[3] !== null ? (
            <div className="Question-explanation">
              <h2>{this.state.questionsAnswered[3] ? <i>Correct!</i>: <i>Incorrect...</i>}</h2>
              Le Sommeil is an erotic oil painting on canvas by French artist Gustave Courbet created in 1866. The painting, which depicts a lesbian couple, is also known as the Two Friends and Indolence and Lust.
            </div>
          ):(
            <div className="Question-options">
              <button onClick={() => this.onWrongAnswer(3)}>1. Honore Daumier</button>
              <button onClick={() => this.onCorrectAnswer(3)}>2. Jean-Francois Millet</button>
              <button onClick={() => this.onWrongAnswer(3)}>3. Gustave Courbet</button>
              <button onClick={() => this.onWrongAnswer(3)}>4. Édouard Manet</button>
            </div>
          )
        }

      </div>

      
    </div>
  );
}
}

export default App;