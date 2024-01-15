import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Weather from './components/Weather'
import Settings from './components/Settings'
import Cities from './components/Cities'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
