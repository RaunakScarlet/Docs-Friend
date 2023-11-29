
import './App.css'
import Color from './features/Color'
import Font from './features/Font'
import Size from './features/Size'

function App() {
  

  return (
     <>
        <div className='text-white text-xl font-bold  border-b-2'>Docs Friend</div>
          <div className="card flex-row w-full h-full justify-between m">
              <Font />
              <Size />
              <Color/>
          </div>
          </>
  )
}

export default App
