import { useState, useEffect } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "./react_memory_game/img/helmet-1.png", matched: false },
  { "src": "./react_memory_game/img/potion-1.png", matched: false },
  { "src": "./react_memory_game/img/ring-1.png", matched: false },
  { "src": "./react_memory_game/img/scroll-1.png", matched: false },
  { "src": "./react_memory_game/img/shield-1.png", matched: false },
  { "src": "./react_memory_game/img/sword-1.png", matched: false },
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
                                                        .sort(() => Math.random() - 0.5) //to randomize the deck
                                                        .map(card => ( {...card, id: Math.random() }))

                                                        setChoiceOne(null)
                                                        setChoiceTwo(null)

                                                        setCards(shuffledCards)
                                                        setTurns(0)
  }
  //compare two selected cards
  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true)

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          }) 
        })
        resetTurn()     
      }
      else {
        setTimeout(resetTurn, 1000 )            
      }
    }
    
  }, [choiceOne, choiceTwo])

  //start a new game automatically
  useEffect(() => {
    shuffleCards()
  }, [])

//handle a choice
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)  
}

//reset choices and increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
  setDisabled(false)
} 



  return (
    <div className="App">
      <h1>Magic Math</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
                      card={card} 
                      key={card.id} 
                      handleChoice={handleChoice} 
                      flipped={card === choiceOne || card === choiceTwo || card.matched}
                      disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
