import React, { Component } from 'react'
import LanguageService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext'

export default class Words extends Component {
    static contextType = LanguageContext

    state = { error: null }

    componentDidMount() {
        LanguageService.getLanguage()
        .then(res => {
            this.context.setWords(res.words)
        })
        .catch( res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { words = [] }= this.context
    
        return words.map( word => 
            <li key={word.id}>
                <h4> Your word is: {word.original}</h4>
                <p>Correct answer count: {word.correct_count}</p>
                <p>Incorrect answer count: {word.incorrect_count}</p>
            </li>)
    }
}