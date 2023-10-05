import React from 'react'

import { useState } from 'react'
import './Game.css'
const Game = () => {
    const [number,]=useState(
        Math.floor(Math.random()*100+1)

    )
    console.log(number)


    const [guess,setGuess]=useState(null)

    const[feedback,setFeedback]=useState('')


    const handleChange = (event)=>{
        event.preventDefault();
        if (guess === number) {
            setFeedback('You guessed the correct number!');
          } else if (guess > number) {
            setFeedback('Too high! Try again.');
          } else {
            setFeedback('Too low! Try again.');
          }
          setGuess(null);
        }
        return (
            <div>
        
                <h1>Number Guessing</h1>
                <p>{feedback}</p>
                <form onSubmit={handleChange}>
                    <label htmlFor="">
        
        
                        Guess the number between 1--100
        
                        <input type="number"
                        min="1"
                        max="100"
                        value={guess}
                        onChange={event => setGuess(parseInt(event.target.value))}
        
                        
                        
                        
                        
                        />
                    </label>
        
                    <button type='submit'>Guess</button>
                </form>
              
            </div>
          )
      
        






    }

  


export default Game
