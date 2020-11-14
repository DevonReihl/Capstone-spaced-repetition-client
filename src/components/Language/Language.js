import React, { Component } from 'react'
import LanguageService from '../../services/language-service'
import LanguageContext from '../../contexts/LanguageContext'
import './Language.css'

export default class Language extends Component {
    static contextType = LanguageContext
   
    state = { error: null}



componentDidMount() {
    LanguageService.getLanguage()
    .then(res => {
        this.context.setLanguage(res.language);
    })
    .catch( res => {
        this.setState({ error: res.error })
    })
}

render() {
    const { language } = this.context

    return (
        <div>
            <div className='language'>
                <h2>
                    Your current language is: {language.name}
                </h2>
            </div>
            <p>Total correct answers: {language.total_score}</p>
        </div>
    )
}
}