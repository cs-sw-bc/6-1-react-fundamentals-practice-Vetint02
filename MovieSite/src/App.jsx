import { useState } from 'react'
import './App.css'
import MovieBanner from './components/movieBanner.jsx'
import MovieDetails from './components/movieDetails.jsx'
import CastList from './components/CastList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MovieBanner/>
      <MovieDetails/>
      <CastList/>
    </div>
  )
}

export default App
