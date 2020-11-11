import React, { Component } from 'react'

const LanguageContext = React.createContext({
    language: {},
    words: [],
    setLanguage: () => {},
    setWords: () => {},
})

export default LanguageContext

export class LanguageProvider extends Component {
    state = {
        language: {},
        words: []
    }

    setLanguage = language => {
        this.setState({ language })
    }

    setWords = words => {
        this.setState({ words })
    }

    render() {
        const value = { 
            language: this.state.language,
            words: this.state.words,
            setLanguage: this.state.setLanguage,
            setWords: this.state.setWords,
        }

        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}