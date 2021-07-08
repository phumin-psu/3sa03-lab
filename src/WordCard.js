import React from 'react';
import CharacterCard from './CharacterCard';

const word = "Hello";
export default function WordCard() {
    return (
        <div>
            {Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)}
        </div>
    )
}
