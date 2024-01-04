import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Weather from './components/Weather'
import Settings from './components/Settings'
import Cities from './components/Cities'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Weather} />
        <Route path='/cities' Component={Cities} />
        <Route path='/settings' Component={Settings} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
