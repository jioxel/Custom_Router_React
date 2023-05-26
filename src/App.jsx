import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HomePage =()=>{
  return <>
    <h1>Home Page</h1>
    <a href="/about">Home</a>
  </>
}
const AboutPage =()=>{
  return <>
    <h1>About Page</h1>
    <img src="https://lh3.googleusercontent.com/a/AAcHTtd6PK33LD-aFRb-VHpQmb02ncxEJ6QmZn2hs7slBjg=s288-c-no"  alt="mi" />
    <a href="/">Home</a>
  </> 
}
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath == '/' && <HomePage/>}
      {currentPath == '/about' && <AboutPage/>}

    </main>
  )
}

export default App
