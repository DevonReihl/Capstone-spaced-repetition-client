import React, { Component } from 'react'

const LanguageContext = React.createContext({
    language: {},
    words: [],
    setLanguage: () => {},
    setWords: () => {},
    setWord: () => {},
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

    setWord = word => {
        this.setState({ word })
    }

    render() {
        const value = { 
            language: this.state.language,
            words: this.state.words,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            setWord: this.setWord,
        }

        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}