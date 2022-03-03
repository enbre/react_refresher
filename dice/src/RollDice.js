import React,{useState} from 'react'
import Die from './Die'

const numName = ['one', 'two', 'three', 'four' , 'five', 'six']
const RollDice = () => {
   const [die1, setDie1] = useState(0);
   const [die2, setDie2] = useState(0);
   const rando = () => {return Math.floor(Math.random()*6)}
   const playGame = () => {
      setDie1(rando());
      setDie2(rando());
   }
   
  return (
    <div>RollDice:
      <Die num = {numName[die1]}/>
      <Die num = {numName[die2]}/>
      <button onClick ={playGame}>Roll Dice</button>
    </div>
  )
}

export default RollDice