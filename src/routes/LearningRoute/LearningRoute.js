import React, { Component } from 'react'
import LanguageService from '../../services/language-service';
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../../components/Button/Button'
import { Label, Input } from '../../components/Form/Form'
import './LearningRoute.css'

class LearningRoute extends Component {
static contextType = LanguageContext

  state = {
    answer: '',
    currentWord: '',
    nextWord: '',
    lastWord: '',
    correctAnswer: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    isCorrect: false,
    guessAnswer: false,
    error: null,

  }

  componentDidMount() {
    LanguageService.getWord()
    .then(res => {
      this.setState({
        nextWord: res.nextWord,
        currentWord: res.nextWord,
        lastWord: res.nextWord,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
        nextWordCorrectCount: res.wordCorrectCount,
        nextWordIncorrectCount: res.wordIncorrectCount,
        totalScore: res.totalScore
      })
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  handleGuessSubmit = e => {
    e.preventDefault()
    this.setState({guessAnswer: true})
    const guess= e.target.guess.value
    
    LanguageService.postGuess(guess)
    .then((res) => {
      this.setState({
        totalScore: res.totalScore,
        wordCorrectCount: res.wordCorrectCount,
        wordIncorrectCount: res.wordIncorrectCount,
        nextWord: res.nextWord,
        correctAnswer: res.answer,
        isCorrect: res.isCorrect,
        answer: guess
      })
      
    })
    .catch((res) => {
      this.setState({ error: res.error })
    })
  }

  handleNext = e => {
    e.preventDefault()
    this.setState({guessAnswer: false, currentWord: this.state.nextWord})
    
  }


  displayResult() {
    if(this.state.isCorrect) {
      return(
        <div>
          <h2>You were correct! :D</h2>
          <p>The correct translation for {this.state.currentWord} was {this.state.correctAnswer} and you chose {this.state.answer}!</p>
          <Button onClick={this.handleNext}>Try another word!</Button>
        </div>
      )
    }
    else {
      return (
        <div>
          <h2>Good try, but not quite right :(</h2>
            <p>The correct translation for {this.state.currentWord} was {this.state.correctAnswer} and you chose {this.state.answer}!</p>
            <Button onClick={this.handleNext}>Try another word!</Button>
        </div>
      )
    }
  }


  render() {
    
    return (
      <section>
        {!this.state.guessAnswer ? (
         <div>
          <div>
            <h2>Translate the word:</h2>
            <span className='word'>{this.state.currentWord}</span>
          </div>
        
          <form className='Guess' onSubmit={this.handleGuessSubmit}>
            <Label htmlFor='learn-guess-input'>What's the translation for this word?</Label>
            <Input id='learn-guess-input' name='guess' required/>
            <Button type='submit' className='learningSubmit'>
              Submit your answer
            </Button>
          </form>
         </div>
        ) : (
          <div className='DisplayFeedback p'>{this.displayResult()}</div>
        )}
          <div className='DisplayScore'><p>Your total score is: {this.state.totalScore}</p></div>
            
            <p className="Correct-Count">You have answered this word correctly {this.state.wordCorrectCount} times.</p>
            <p className="Incorrect-Count">You have answered this word incorrectly {this.state.wordIncorrectCount} times.</p>
      </section>

    );
  }
}

export default LearningRoute
