import React from 'react'
import foods from './Foods'
import {choice, remove} from './Helpers'

let fruit =  choice(foods);
console.log(`I'd like one ${fruit}, please.`)

const App = () => {
  return (
    <div>Appsss:
       fruit
      {/* <Helpers /> */}
    </div>
    
  )
}

export default App