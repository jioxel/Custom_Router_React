import {Suspense, lazy} from 'react'
import './App.css'

//static import
// import  AboutPage  from './pages/About.jsx'
// import HomePage from './pages/Home.jsx'
import { Page404 } from './pages/Page404'
import { Search } from './pages/Search'

//dinamic import
const LazyHomePage=lazy(()=>import('./pages/Home'))
const LazyAboutPage=lazy(()=>import('./pages/About'))

import { Router } from './Router'
import {Route} from './Route'

const routes =[
  {
    path: '/search/:query',
    Component: Search,
  }
]

function App() {

  

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path={'/'} Component={LazyHomePage}/>
          <Route path={'/about'} Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
