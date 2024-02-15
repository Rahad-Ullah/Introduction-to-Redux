
import './App.css'
import Parent from './components/Parent/Parent'
import CounterContext from './contexts/CounterContext'

function App() {

  return (
      <CounterContext>
        <Parent/>
      </CounterContext>
  )
}

export default App