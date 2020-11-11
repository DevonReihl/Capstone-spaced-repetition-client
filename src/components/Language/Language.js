import React, { Component } from 'react'
import LanguageService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext'

export default class Language extends Component {
    static contextType = LanguageContext
   
    state = { error: null}



componentDidMount() {
    LanguageService.getLanguage()
    .then(res => {
        this.context.setLauguage(res.language)  
    })
    .catch( res => {
        this.setState({ error: res.error })
    })
}

render() {
    const { error } = this.state
    const { language } = this.context

    return (
        <div>
            <div>
                <h2>
                    Your current language is: {language.name}
                </h2>
            </div>
            <p>Total correct guesses in /French/{language.name} is /0/{language.total_score}</p>
        </div>
    )
}
}