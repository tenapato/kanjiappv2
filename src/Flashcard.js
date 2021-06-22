import React, {useState} from 'react'

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false); //Variable for handling the flip
    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`} 
            onClick={() => setFlip(!flip)}>
            <div className="front">
                <div className="flashcard-kanji">{flashcard.kanji}</div>
            </div>
            <div className="back">
                <div className="flashcard-options">
                    <div className="flashcard-titles"> Kunyomi </div>
                    {flashcard.kunyomis.map(kunyomi => {
                        return <div className="flashcard-kunyomi">{kunyomi}</div>
                    })}
                    <div className="flashcard-titles"> Onyomi </div>
                    {flashcard.onyomis.map(onyomi => {
                        return <div className="flashcard-onyomi">{onyomi}</div>
                    })}
                    <div className="flashcard-titles"> Meanings </div>
                    {flashcard.meanings.map(meaning => {
                        return <div className="flashcard-meaning">{meaning}</div>
                    })}
                    <div className="flashcard-titles"> Strokes </div>
                    {flashcard.stroke_count}
                </div>
                
                
            </div>
        </div>
    )
}
