import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Weather from './components/Weather'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Weather} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
