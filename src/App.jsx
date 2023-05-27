import './App.css'
import HomePage from './pages/Home.jsx'
import  AboutPage  from './pages/About.jsx'

import { Router } from './Router'
import { Page404 } from './pages/Page404'


const routes =[
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/search/:query',
    Component: AboutPage,
  }
]

function App() {

  

  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
