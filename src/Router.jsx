import { useEffect, useState, Children } from "react";
import {EVENTS} from './consts'
import {match} from 'path-to-regexp'
// eslint-disable-next-line react/prop-types
export function Router ({children,routes=[],defaultComponent:DefaultComponent =()=><h2>404</h2>}){
     

  const [currentPath, setCurrentPath] = useState(window.location.pathname)
     useEffect(() => {
       const onLocationChange = ()=>{
         setCurrentPath(window.location.pathname)
       }
       window.addEventListener(EVENTS.PUSHSTATE,onLocationChange);
       window.addEventListener(EVENTS.POPSTATE,onLocationChange);
       return ()=>{
         window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange);
         window.removeEventListener(EVENTS.POPSTATE,onLocationChange);
       }
   
     }, [])

      // add routes from children <Routes/> components
      const routesFromChildren = Children.map(children,({props, type}) =>{
        const {name} = type
        const isRoute= name === 'Route'
        return isRoute ? props : null
      })


      // Routes of use
      const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

     let routeParams={}
     const Page = routesToUse.find(({path})=>{ 
      if (path === currentPath) return true
      const matchUrl=match(path, {decode: decodeURIComponent})
      const matched = matchUrl(currentPath)
      if(!matched) return false

      routeParams = matched.params
      return true
    })?.Component


     return Page ? <Page routeParams ={routeParams}/> :<DefaultComponent routeParams ={routeParams}/>
   }