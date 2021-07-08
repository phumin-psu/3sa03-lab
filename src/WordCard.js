import React, {useState} from 'react';
import Lodash from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (givenWord) => {
    let word = givenWord.toUpperCase()
    let chars = Lodash.shuffle(Array.from(word))
    return {
        word,
        chars
    }
}

export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(c + " Activated")
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
