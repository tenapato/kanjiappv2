import React, {useState, useEffect} from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';

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
    kunyomis: ['かたる','かたらう'],
    onyomis: ['ゴ'],
    stroke_count: 14,
    meanings: ["word","speech","language"],
  
  },
  {
    id: 2,
    kanji: '日本人',
    kunyomis: ['にほんじん'],
    onyomis: ['に'],
    stroke_count: 7,
    meanings: ["Japanese person"],
  
  },


]





export default App;
