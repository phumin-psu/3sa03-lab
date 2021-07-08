import React, {useState} from 'react';
import Lodash from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (givenWord) => {
    let word = givenWord.toUpperCase()
    let chars = Lodash.shuffle(Array.from(word))
    return {
        word,
        chars,
        attemp: 1,
        guess: '',
        isComplete: false
    }
}

export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(c + " Activated")

        let guess = state.guess + c
        console.log(`Now guess is ${guess}`)

        setState({...state, guess})

        if (guess.length === state.word.length) {
            if (guess === state.word) {
                console.log("OK! True.")
                setState({...state, isComplete: true})
            } else {
                console.log("No! Wrong")
                setState({...state, guess: '', attemp: state.attemp++})
                console.log(`Now is time ${state.attemp}`)
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
                )
            }
        </div>
    )
}
