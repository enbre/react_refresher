// import React from 'react'

const choice = (items) => {
   let idx = Math.floor(Math.random()* items.length)
   return items[idx]
}

const remove = (items, item) => {
   for(let i in items) {
      if (items[i]===item){
         return [...items.slice(0,i), ...items.slice(i+1)]
      }
   }
}

// const Helpers = () => {
//   return (
//     <div>Helpers</div>
//   )
// }

export  {choice, remove}