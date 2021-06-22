import React, {useState} from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  return (
   
   <FlashcardList flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [

  {
    id: 1,
    kanji: '語',
    kunyomi: ['かたる','かたらう'],
    onyomi: ['ゴ'],
    stroke_count: 14,
    meanings: ["word","speech","language"],
  
  },
  {
    id: 2,
    kanji: '日本人',
    kunyomi: ['かたる','かたらう'],
    onyomi: ['ゴ'],
    stroke_count: 14,
    meanings: ["word","speech","language"],
  
  },


]





export default App;
