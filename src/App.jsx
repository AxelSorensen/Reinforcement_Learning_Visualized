import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Content from './Content'
import { useEffect } from 'react'

import { stop_training } from './Field'



import SketchManager from './SketchManager'
import RightManager from './RightManager'

function App() {

  const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
   }
   window.addEventListener('resize', documentHeight)
   documentHeight();

  const [page, setPage] = useState(0)


  const changePage = (direction) => {
    setPage(page+direction);
  }

  useEffect(()=> {
    const contentDiv = document.getElementById('content');
    contentDiv.scrollTop = 0;


    stop_training(true);
  },[page])

  return (
    <div id="App">
      <div id='left'>
        <div id='left-content'>
        <div id='header'>
          <h1>Reinforcement Learning Visualized</h1>
          <p id='byline'>Written and programmed by Axel Sorensen</p>
        </div>
        <div id='content'>
          <Content page={page}/>
        </div>
        <div id='footer'>
            <div className={page == 0 ? 'disabled' : ''} onClick={()=> changePage(-1)}>&#60;</div>
            {page}
            <div id='backward' onClick={()=> changePage(1)}>&#62;
            </div>
        </div>
        </div>
      </div>
      <div id='right'>
        <div id='right-container'>
          <SketchManager page={page}/>
          <RightManager page={page}/>
        </div>

        </div>


      

    </div>
  )
}

export default App;