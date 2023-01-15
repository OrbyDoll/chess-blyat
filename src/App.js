import './App.css';
import poleSquare from './poleMass'
import {useState} from 'react'
function App() {
  const [poleSquares,setPoleSquares] = useState(poleSquare)
  let field = poleSquares.map(square =>{
    let figure = ''
    switch(square.type){
      case 'pawn':
        figure = 'Pawn'
        break
      case 'castle':
        figure = 'Castle'
        break
      case 'horse':
        figure = 'Horse'
        break
      case 'bishop':
        figure = 'Bishop'
        break
      case 'king':
        figure = 'King'
        break
      case 'queen':
        figure = 'Queen'
        break
    }
    return(
      <div className='pole'>
        {figure}
      </div>
    )
  }) 
  return (
    <div className='mainWrap'>
        <div className='roomWrap'>
          <input className='roomKeyInput' placeholder='Room Key'></input>
          <button className='roomKeySubmit'>Submit</button>
        </div>
        <div className='poleWrap'>
          {field}
        </div>
    </div>  
  );
}

export default App;
