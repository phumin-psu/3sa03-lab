import React, {useState, unmountComponentAtNode} from 'react';
import Lodash, { forEach } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (givenWord) => {
    let word = givenWord.toUpperCase()
    let chars = Lodash.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
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
                alert(`You win! Text is "${state.word}"`)
            } else {
                var correctPercent = function() {
                    var right = 0;
                    for (var i = 0; i < state.word.length; i++) {
                        if (state.word.charAt(i) === guess.charAt(i)) {
                            right++;
                        }
                    }
                    return right / state.word.length * 100;
                }
                console.log("No! Wrong")
                setState({...state, guess: '', attempt: state.attempt+1})
                console.log(`Now is time ${state.attempt}`)
                alert(`You lose (${state.attempt} time${state.attempt > 1 ? 's' : ''})! Try again. (${correctPercent().toFixed(2)}%)`)
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
        </div>
    )
}
